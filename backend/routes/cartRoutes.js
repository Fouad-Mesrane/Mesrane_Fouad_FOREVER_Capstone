import express from "express";
import { addToCart, updateCart, getCart } from "../controllers/cartController";
import authUser from "../middleware/auth";

const router = express.Router();

router.post("/get", authUser, getCart);
router.post("/add", authUser, addToCart);
router.post("/update", authUser, updateCart);

export default router;
