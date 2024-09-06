import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price : {
        type: String,
        required: true,
    },
    image : {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const Product = mongoose.model("Product", productSchema); //in database it will convert to products

export default Product;