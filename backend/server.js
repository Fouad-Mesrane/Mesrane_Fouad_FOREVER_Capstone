import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import  "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

// App config
const app = express();
const port = process.env.PORT || 9000;
// DB config
connectDB()
connectCloudinary()
// Middlewares
app.use(express.json());
app.use(cors());


// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)


app.get("/", (req, res) => {
    res.send("Hello World");
});

// listen
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});