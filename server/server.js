import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Cryptr from "cryptr"
import jwt from "jsonwebtoken";

import get from "./Middlewares/Get.js";
import Login from "./Middlewares/Login.js"
import FetchDetails from "./Controller/FetchDetails.js"
import Register from "./Controller/Register.js"
import FetchArrays from "./Controller/FetchArrays.js"
import Withdraw from "./Controller/Withdraw.js"
import SendMail from "./Controller/SendMail.js"

import User from "./Models/User.js";
import Amount from "./Models/Amount.js"

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

app.get("/amount", get);
app.post('/login', Login);
app.get('/fetch-details', FetchDetails);
app.post('/register', Register);
app.get("/arrays", FetchArrays);
app.post('/withdraw', Withdraw);
app.post("/reset", SendMail);
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

const SUPER_KEY = process.env.TEST;



app.post('/click', async (req, res) => {
    // const { token } = req.body;
    console.log(req.body.store);

    // const verify = jwt.verify(token, SUPER_KEY, (err, data) => {
    //     if (err) {
    //         res.status(408).json("Oops Session Expired");
    //         return;
    //     } else
    //         return data;
    // });

    // if (verify === undefined) {
    //     res.status(500);
    //     return;
    // }

    // const { email, password } = verify;

    // const { store, offerid, currDay } = req.body;

    // const users = await User.findOne({ email: email });

    // if (!users) {
    //     res.status(403);
    //     res.json({
    //         message: "Not a user! Please register",
    //     })
    //     return;
    // }
    // if (cryptr.decrypt(users.password) !== password) {
    //     res.status(403);
    //     res.json({
    //         message: "Invalid Login",
    //     })
    //     return;
    // }
    // const available = await Amount.findOne({ userId: users._id });
    // available.array.unshift({ text: store, offerid: offerid, currDay: currDay, status: "Pending" });
    // await available.save();
})

// app.post('/edit-name', async (req, res) => {

//     const { email, password, name } = req.body;

//     const users = await User.findOne({ email: email });

//     if (!users) {
//         res.status(403);
//         res.json({
//             message: "Not a user",
//         })
//         return;
//     }
//     else if (cryptr.decrypt(users.password) !== password) {
//         res.status(403);
//         res.json({
//             message: "Invalid Details",
//         })
//         return;
//     } else {
//         users.name = name;
//         res.status(200);
//         res.json({
//             message: "Changes Saved Successfully",
//         })
//         await users.save();
//         return;
//     }
// })
// app.get("/reload", async (req, res) => {

//     const { authorization } = req.headers;
//     const [, token] = authorization.split(" ");
//     const [email, password] = token.split(":");
//     const users = await User.findOne({ email: email })

//     const decryptedPass = cryptr.decrypt(users.password);
//     if (!users || decryptedPass !== password) {
//         res.status(403);
//         res.json({
//             message: "Invalid Login",
//         })
//         return;
//     }
//     res.json({ name: users.name, email: users.email });
// })

app.listen(5000, (console.log("Port has started at 5000")));
