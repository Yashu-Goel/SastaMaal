const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors())

mongoose.set("strictQuery", false);
const url = process.env.CONNECTION_URL;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to database successfully"))
    .catch(console.error)

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    }
});
const User = mongoose.model("User", userSchema);

const detailSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    array: [
        { text: String, offerid: String, clickId: Number, currDay: String, status: String }
    ],
    amount: { type: Number }
});
const Amount = mongoose.model("Amount", detailSchema)

app.post('/login', async (req, res) => {

    const { email, password } = req.body;

    const users = await User.findOne({ email: email });
    if (!users) {
        res.status(403);
        res.json({
            message: "Not a user! Please register",
        })
        return;
    }
    if (cryptr.decrypt(users.password) !== password) {
        res.status(403);
        res.json({
            message: "Invalid Login",
        })
        return;
    }
    res.json({
        message: "Login Success!!",
    })
})

app.post('/register', async (req, res) => {

    const { email, password, name } = req.body;
    const encryptedPass = cryptr.encrypt(password);
    const users = await User.findOne({ email: email });

    if (users) {
        res.status(500);
        res.json({
            message: "User exists! Please login",
        })
        return;
    }

    const user = new User({ email: email, password: encryptedPass, name: name });
    await user.save();
    res.json({
        message: "Registration Success",
    });
})
app.get("/amount", async (req, res) => {
    const { authorization } = req.headers;
    const [, token] = authorization.split(" ");
    const [email, password] = token.split(":");
    const users = await User.findOne({ email: email })

    const decryptedPass = cryptr.decrypt(users.password);
    if (!users || decryptedPass !== password) {
        res.status(403);
        res.json({
            message: "Invalid Login",
        })
        return;
    }
    const available = await Amount.findOne({ userId: users._id });
    if (available !== null) {
        const { amount } = await Amount.findOne({ userId: users._id });
        res.json(amount);
    } else if (available === null) {
        const currAmount = new Amount({ userId: users._id, amount: '0' });
        await currAmount.save();
    }
})

app.get("/arrays", async (req, res) => {

    const { authorization } = req.headers;
    const [, token] = authorization.split(" ");
    const [email, password] = token.split(":");
    const users = await User.findOne({ email: email })

    const decryptedPass = cryptr.decrypt(users.password);
    if (!users || decryptedPass !== password) {
        res.status(403);
        res.json({
            message: "Invalid Login",
        })
        return;
    }
    const available = await Amount.findOne({ userId: users._id });
    if (available !== null) {
        const { amount, array } = await Amount.findOne({ userId: users._id });

        res.json({ amount: amount, array: array });
    } else
        return;
})

app.post('/click', async (req, res) => {

    const { store, email, password, id, offerid, currDay } = req.body;
    const users = await User.findOne({ email: email });

    if (!users) {
        res.status(403);
        res.json({
            message: "Not a user! Please register",
        })
        return;
    }
    if (cryptr.decrypt(users.password) !== password) {
        res.status(403);
        res.json({
            message: "Invalid Login",
        })
        return;
    }

    const available = await Amount.findOne({ userId: users._id });
    available.array.unshift({ text: store, offerid: offerid, currDay: currDay, status: "Pending" });
    await available.save();
})

app.post('/edit-name', async (req, res) => {

    const { email, password, name } = req.body;

    const users = await User.findOne({ email: email });

    if (!users) {
        res.status(403);
        res.json({
            message: "Not a user",
        })
        return;
    }
    else if (cryptr.decrypt(users.password) !== password) {
        res.status(403);
        res.json({
            message: "Invalid Details",
        })
        return;
    } else {
        users.name = name;
        res.status(200);
        res.json({
            message: "Changes Saved Successfully",
        })
        await users.save();
        return;
    }
})
//support backend remaining
app.get("/sup", async (req, res) => {

    const { authorization } = req.headers;
    const [, token] = authorization.split(" ");
    const [email, password] = token.split(":");
    const users = await User.findOne({ email: email })

    const decryptedPass = cryptr.decrypt(users.password);
    if (!users || decryptedPass !== password) {
        res.status(403);
        res.json({
            message: "Invalid Login",
        })
        return;
    }
    console.log(users.name + users.email);
    res.json({ name: users.name, email: users.email });
})
app.listen(5000, (console.log("Port has started at 5000")));