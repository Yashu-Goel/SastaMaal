import mongoose from "mongoose";

const TopCashbackStoresSchema = mongoose.Schema({
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
export default mongoose.model('top_cashback_stores_data', TopCashbackStoresSchema);