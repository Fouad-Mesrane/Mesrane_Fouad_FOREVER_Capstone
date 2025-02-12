import express from "express";
import { addToCart, updateCart, getCart } from "../controllers/cartController";

const router = express.Router();


router.post("/get", getCart);
router.post("/add", addToCart);
router.post("/update", updateCart);

export default router