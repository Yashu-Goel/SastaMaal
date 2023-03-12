import offer_mock_data from "../../Models/Offer_data.js"

const Offer_data = async (req, res) => {
    try {
        const OfferMockData = await offer_mock_data.find();
        res.status(201).send(OfferMockData);
    } catch (error) {
        res.status(400).send("Fail " + error)
    }
}

export default Offer_data;