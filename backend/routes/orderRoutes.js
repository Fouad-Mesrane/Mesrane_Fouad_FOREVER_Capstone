import express from "express";
import {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  updateOrderStatus,
  userOrders,
} from "../controllers/orderController.js";
import { adminAuth } from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const router = express.Router();

// Admin Features
router.post("/list", adminAuth, allOrders);
router.post("/status", adminAuth, updateOrderStatus);

// Payment Features

router.post("/place", authUser, placeOrder);
router.post("/stripe", authUser, placeOrderStripe);
router.post("/razorpay", authUser, placeOrderRazorpay);

// User Features

router.post("/userorders", authUser, userOrders);

export default router;
