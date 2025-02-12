import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 4.99;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    // check if size is selected
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    // make a copy of cartItems
    let cartData = structuredClone(cartItems);
    // check if item is already in cart
    if (cartData[itemId]) {
      // check if size is already in cart
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let count = 0;
    // loop through cartItems
    for (const items in cartItems) {
      // loop through sizes
      for (const sizes in cartItems[items]) {
        try {
          // check if quantity is greater than 0
          if (cartItems[items][sizes] > 0) {
            count += cartItems[items][sizes];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return count;
  };

  // update quantity
  const updateQuantity = async (itemId, size, quantity) => {
    // make a copy of cartItems
    let cartData = structuredClone(cartItems);
    // check if quantity is greater than 0
    if (quantity > 0) {
      cartData[itemId][size] = quantity;
    } else {
      // remove item from cart
      delete cartData[itemId];
    }
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      const productPrice = products.find(
        (product) => product._id === items
      ).price;
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          totalAmount += productPrice * cartItems[items][size];
        }
      }
    }
    return totalAmount;
  };

  const getProducts = async () => {
   
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      
      if (response.data.success) {
        const data = response.data;
        setProducts(data.products);
      }else{
        toast.error(response.data.message, {
          autoClose: 1000,
        })
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        autoClose: 1000,
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if(!token && localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
      
    }
  },[])
  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    getProducts,
    token,
    setToken
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
