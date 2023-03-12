import top_cashback_stores_data from "../../Models/TopCashBackModel.js"

const TopCashBack = async (req, res) => {
    try {
        const TopCashbackStoresData = await top_cashback_stores_data.find();
        res.status(201).send(TopCashbackStoresData);
    } catch (error) {
        res.status(400).send("Fail " + error)
    }
}

export default TopCashBack;