// const require = require('express')
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { connectDb } from './config/db.js';
import Product from '../model/product.model.js';

dotenv.config();
const app = express();

app.use(express.json()); //allow us accept JSON data in the req.body

app.get("/api/products",async(req, res) =>{
    try {
        const product =await Product.find({});
        res.status(200).json({success: true, data: product})
    } catch (error) {
        console.error("Error in fetching products", error.message)
        res.status(500).json({success: false, message: "Server error"})
    }
    
})

app.post('/api/products',async (req, res) => {
    const product = req.body; 

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    } catch (error) {
        console.error("Error in creating product", error.message)
        res.status(500).json({success: false, message: "server error"})
    }
});

app.put("/api/products/:id", async(req,res)=> {
    const { id } = req.params;

    const productHere = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Product ID is not valid"})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, productHere, {new: true});
        res.status(201).json({success: true, data: updatedProduct})

    } catch (error) {
        console.error("Error in updating products", error.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
})

app.delete("/api/products/:id", async (req, res) => {
    const { id }= req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Items deleted successfully"})
    } catch (error) {
        console.error("Error in deleting products", error.message)
        res.status(404).json({success: false, message: "Product not found"})
    }
})

app.listen(5000, () => {
    connectDb();
    console.log("Server started at http://localhost:5000/")
})

// 