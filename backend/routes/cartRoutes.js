import express from "express";
import { addToCart, updateCart, getCart } from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const router = express.Router();

router.get("/get", authUser,getCart);
router.post("/add", authUser, addToCart);
router.post("/update", authUser, updateCart);


export default router;
