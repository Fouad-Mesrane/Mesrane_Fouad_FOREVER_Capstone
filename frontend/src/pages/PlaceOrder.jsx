import React, { useState, useContext } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {navigate, backendUrl, token, cartItems,setCartItems,   getCartAmount, deliveryFee, products} =useContext(ShopContext)
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

const onChangeHandler = (e) => {
    setFormData(prevForm => ({ ...prevForm, [e.target.name]: e.target.value }));
}

const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo){
              itemInfo.size = item,
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

     let orderData = {
      address : formData,
      items : orderItems,
      amount : getCartAmount() + deliveryFee
     }


     switch (method) {
      // api calls for COD
      case 'cod' :
       
        const response = await axios.post(`${backendUrl}/api/order/place`, orderData, {headers : {token}})
        if (response.data.success) {
            setCartItems({})
            toast.success(response.data.message, {autoClose : 1000})
            navigate("/orders")
        }else {
          toast.error(response.data.message, {autoClose : 1000})
        }
      break;

      default : 
      break
     }

    } catch (error) {
      console.log (error)
      toast.error(error.message, {autoClose: 1000})
    }
   
}

  
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/* lefts side  */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border bordr-gray-300 rounded px-3.5 w-full"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={onChangeHandler}
            required
          />
          <input
            className="border bordr-gray-300 rounded px-3.5 w-full"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={onChangeHandler}
            required
          />
        </div>
        <input
          className="border bordr-gray-300 rounded px-3.5 w-full"
          type="email"
          placeholder="Email address"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
          required
        />
        <input
          className="border bordr-gray-300 rounded px-3.5 w-full"
          type="text"
          placeholder="Street"
          name="street"
          value={formData.street}
          onChange={onChangeHandler}
          required
        />
        <div className="flex gap-3">
          <input
            className="border bordr-gray-300 rounded px-3.5 w-full"
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={onChangeHandler}
            required
          />
          <input
            className="border bordr-gray-300 rounded px-3.5 w-full"
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border bordr-gray-300 rounded px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={onChangeHandler}
            required
          />
          <input
            className="border bordr-gray-300 rounded px-3.5 w-full"
            type="text"
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={onChangeHandler}
            required
          />
        </div>
        <input
          className="border bordr-gray-300 rounded px-3.5 w-full"
          type="number"
          placeholder="Phone number"
          name="phone"
          value={formData.phone}
          onChange={onChangeHandler}
          required
        />
      </div>

      {/* right side  */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ---------- payment method ---------- */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-500" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-500" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                Cash on Delivery
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button type="submit" className="bg-black text-white text-sm px-16 py-3">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
