import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// ===== DB Connection =====
export const conectDB=()=>{
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log("MongoDB connection error:", err));
}