// const require = require('express')
import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js';
import productRoutes from './routes/product.route.js'

dotenv.config();

const app = express();

app.use(express.json()); //allow us accept JSON data in the req.body

app.use('/api/products', productRoutes)

app.listen(5000, () => {
    connectDb();
    console.log("Server started at http://localhost:5000/")
})

// 