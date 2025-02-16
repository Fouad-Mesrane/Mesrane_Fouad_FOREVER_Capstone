import { currency } from "../../admin/src/App.jsx";
import Order from "../models/Order.js";
import User from "../models/User.js";
import Stripe from "stripe";

// gateway initializing
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// Placing an order using COD

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const order = new Order({
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
    });

    const newOrder = await order.save();
    await User.findByIdAndUpdate(userId, { cartData: {} });

    res
      .status(200)
      .json({
        success: true,
        message: "Order placed successfully",
        order: newOrder,
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// Placing an order using Stripe
const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;
    const order = new Order({
      userId,
      items,
      amount,
      address,
      paymentMethod: "Stripe",
      payment: false,
    });
    const newOrder = await order.save();
    await User.findByIdAndUpdate(userId, { cartData: {} });

    const line_items = items.map((item) => ({
      price_data: {
        currency,
        product_data: {
          name: item.name,
          unit_amount: item.price * 100,
        },
        quantity: item.quantitity,
      },
    }));
    line_items.push({
        price_data: {
          currency,
          product_data: {
            name: "delivery fee",
            unit_amount: item.price * 100,
          },
          quantity: item.quantitity,
        },
      })
  } catch (error) {}
};

// Placing an order using Razorpay
const placeOrderRazorpay = async (req, res) => {};

// Get all orders for admin panel

const allOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json({ success: true, orders }).status(200);
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// User orders for frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await Order.find({ userId });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// update order status from admin panel

const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await Order.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status updated" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateOrderStatus,
};
