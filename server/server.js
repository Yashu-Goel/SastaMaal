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
        type: String,
        required: true
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
    amount: { type: Number },
    details: [
        { id: String, date: String, mode: String, amount: String, ref_no: String, by: String, upi_id: String }
    ]
});
const Amount = mongoose.model("Amount", detailSchema)
//OfferMockData Schema
const OfferMockDataSchema = new mongoose.Schema({
    ProductImage: {
        type: String,
        required: true,
        unique: true
    },
    BrandImage: {
        type: String,
    },
    Discount: {
        type: String,
    },
    Cashback: {
        type: String,
    },
    Color: {
        type: String,
    }
})
const OfferMockDataModel = new mongoose.model('offer_mock_data', OfferMockDataSchema);

app.post('/OfferData', async (req, res) => {
    const { ProductImage, BrandImage, Discount, Cashback, Color } = req.body;
    if (!ProductImage || !BrandImage || !Discount || !Cashback || !Color) {
        return res.json({
            message: "Pls fill all the details"
        })
    }

    try {
        const Data = new OfferMockDataModel({ ProductImage, BrandImage, Discount, Cashback, Color });
        await Data.save();
        res.json({ message: "Success..." })
    } catch (error) {
        res.json({ error: "unable to enter data " + error })
    }


})
//get OfferMockData
app.get('/OfferData', async (req, res) => {
    try {
        const OfferMockData = await OfferMockDataModel.find();
        res.status(201).send(OfferMockData);
    } catch (error) {
        res.status(400).send("Fail " + error)
    }
})

//end
// TopCashbackStoresData

const TopCashbackStoresSchema = new mongoose.Schema({
    ImageSrc: {
        type: String,
        required: true,
        unique: true
    },
    Cashback: {
        type: String,
    },
    Offer: {
        type: String,
    },
    BrandName: {
        type: String,
    }
})
const TopCashbackStoresModel = new mongoose.model('top_cashback_stores_data', TopCashbackStoresSchema);

//create TopCashbackStoresData


app.post('/TopCashbackStoresData', async (req, res) => {
    const { ImageSrc, Cashback, Offer, BrandName } = req.body;
    if (!ImageSrc || !Cashback || !Offer || !BrandName) {
        return res.json({
            message: "Pls fill all the details"
        })
    }

    try {
        const Data = new TopCashbackStoresModel({ ImageSrc, Cashback, Offer, BrandName });
        await Data.save();
        res.json({ message: "Success..." })
    } catch (error) {
        res.json({ error: "unable to enter data " + error })
    }
})
//get TopCashbackStoresData
app.get('/TopCashbackStoresData', async (req, res) => {
    try {
        const TopCashbackStoresData = await TopCashbackStoresModel.find();
        res.status(201).send(TopCashbackStoresData);
    } catch (error) {
        res.status(400).send("Fail " + error)
    }
})
//end

// Top categories schema

const TopCategoriesSchema = new mongoose.Schema({
    ImageSrc: {
        type: String,
        required: true,
        unique: true
    }
})
const TopCategoriesModel = new mongoose.model('top_Categories_data', TopCategoriesSchema);

//create Top Categories Model


app.post('/TopCategoriesData', async (req, res) => {
    const { ImageSrc } = req.body;
    if (!ImageSrc) {
        return res.json({
            message: "Pls fill all the details"
        })
    }

    try {
        const Data = new TopCategoriesModel({ ImageSrc });
        await Data.save();
        res.json({ message: "Success..." })
    } catch (error) {
        res.json({ error: "unable to enter data " + error })
    }
})
//get top_categories_data
app.get('/TopCategoriesData', async (req, res) => {
    try {
        const TopCategoriesData = await TopCategoriesModel.find();
        res.status(201).send(TopCategoriesData);
    } catch (error) {
        res.status(400).send("Fail " + error)
    }
})
//
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
app.get("/reload", async (req, res) => {

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
    res.json({ name: users.name, email: users.email });
})
app.post('/withdraw', async (req, res) => {

    const { email, password, amount, upi } = req.body;

    const users = await User.findOne({ email: email });
    if (!users) {
        res.status(403);
        res.json({
            message: "No User exsists",
        })
        return;
    }
    const decryptedPass = cryptr.decrypt(users.password);
    if (decryptedPass !== password) {
        res.status(403);
        res.json({
            message: "Invalid Credentials",
        })
        return;
    }
    const cost = await Amount.findOne({ userId: users._id });

    if (amount > cost.amount) {
        res.status(403).json({ message: "Invalid Amount" });
        return;
    }

    // refernce num
    var crypto = require('crypto');
    function randomValueHex(len) {
        return crypto.randomBytes(Math.ceil(len / 2))
            .toString('hex')
            .slice(0, len).toUpperCase();
    }
    var string = randomValueHex(3) + randomValueHex(3) + randomValueHex(3);
    // date
    const dat = new Date().toLocaleDateString('en-US', { day: "numeric", year: "numeric", month: "short" });
    // 

    //id generator
    const id = Date.now().toString().substring(5);
    //

    const newPayment = {
        id: id,
        date: dat,
        mode: "UPI",
        amount: amount,
        ref_no: string,
        by: "earnkaro.com",
        upi_id: upi
    }
    cost.details.unshift(newPayment);
    cost.amount -= amount;
    cost.save();
    res.status(200).json({ message: "Success" });
})
app.get('/fetch-details', async (req, res) => {

    const { authorization } = req.headers;
    const [, token] = authorization.split(" ");
    const [email, password] = token.split(":");
    const users = await User.findOne({ email: email })

    const decryptedPass = cryptr.decrypt(users.password);

    if (!users || decryptedPass !== password) {
        res.status(403);
        res.json({
            message: "Auth Failed",
        })
        return;
    }
    const { details } = await Amount.findOne({ userId: users._id });
    res.json(details);
})
app.listen(5000, (console.log("Port has started at 5000")));
