import mongoose from "mongoose";

const OfferMockDataSchema = mongoose.Schema({
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
export default mongoose.model('offer_mock_data', OfferMockDataSchema);