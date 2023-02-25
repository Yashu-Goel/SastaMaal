const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
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
const User = mongoose.model("User", userSchema)

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
app.listen(5000, (console.log("Port has started at 5000")));
// app.get('/', (req, res) => {
//     res.send("Backend started");
// })
