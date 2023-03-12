import top_Categories_data from "../../Models/TopCategory.js"

const TopCategory = async (req, res) => {

    try {
        const OfferMockData = await top_Categories_data.find();
        res.status(201).send(OfferMockData);
    } catch (error) {
        res.status(400).send("Fail " + error)
    }
}

export default TopCategory;