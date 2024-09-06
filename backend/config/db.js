import mongoose from "mongoose";

export const connectDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Databse connected successfuly")
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1); //1 code means for faiure, 0 means suceess
    }
} 