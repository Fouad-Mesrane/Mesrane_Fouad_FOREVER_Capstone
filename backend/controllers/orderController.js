import Order from "../models/Order.js";
import User from "../models/User.js";

// Placing an order using COD

const placeOrder = async (req, res) => {
    try {
        const { userId, products, amount, address } = req.body;
        const order = new Order({
            userId,
            products,
            amount,
            address,
            paymentMethod : "COD",
            payment : false
        });

        const newOrder = await order.save();
        await User.findByIdAndUpdate(userId, {cartData: {}});

        res.status(200).json({ success: true, message: "Order placed successfully", order: newOrder });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error.message });
    }
};

// Placing an order using Stripe
const placeOrderStripe = async (req, res) => {};

// Placing an order using Razorpay
const placeOrderRazorpay = async (req, res) => {};

// Get all orders for admin panel

const allOrders = async (req, res) => {};

// User orders for frontend
const userOrders = async (req, res) => {};

// update order status from admin panel

const updateOrderStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateOrderStatus,
};
