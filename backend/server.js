import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import  "dotenv/config";


// App config
const app = express();
const port = process.env.PORT || 9000;

// Middlewares
app.use(express.json());
app.use(cors());

// DB config
// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("MongoDB database connection established successfully");
// }).catch((err) => {
//     console.error("MongoDB database connection error:", err);
// });

// api endpoints
app.get("/", (req, res) => {
    res.send("Hello World");
});

// listen
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});