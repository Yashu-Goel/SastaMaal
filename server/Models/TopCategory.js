import mongoose from "mongoose";

const TopCategoriesSchema = mongoose.Schema({
    ImageSrc: {
        type: String,
        required: true,
        unique: true
    }
})
export default mongoose.model('top_Categories_data', TopCategoriesSchema);