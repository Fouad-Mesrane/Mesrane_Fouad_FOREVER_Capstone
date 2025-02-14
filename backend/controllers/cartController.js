import User from "../models/User.js";

// add products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, productId, size } = req.body;

    const user = await User.findById(userId);
    let cartData = await user.cartData;
    if (cartData[productId]) {
      if (cartData[productId][size]) {
        cartData[productId][size] += 1;
      } else {
        cartData[productId][size] = 1;
      }
    } else {
      cartData[productId] = {};
      cartData[productId][size] = 1;
    }
    await User.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({ success: true, message: "Product added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// update user cart
const updateCart = async (req, res) => {
  try {
    const { userId, productId, size, quantity } = req.body;
    const user = await User.findById(userId);
    let cartData = await user.cartData;
    cartData[productId][size] = quantity;
    await User.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({ success: true, message: "Cart updated" });
   
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// get user cart
const getCart = async (req, res) => {

  
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);
    const cartData = await user.cartData;
    res.status(200).json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};




export { addToCart, updateCart, getCart,  };
