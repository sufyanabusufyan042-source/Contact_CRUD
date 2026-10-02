
import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
});
contactSchema.plugin(mongoosePaginate)

export default mongoose.model("Contact", contactSchema);
