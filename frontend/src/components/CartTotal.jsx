import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
const CartTotal = () => {
  const { getCartAmount, deliveryFee, currency } = useContext(ShopContext);
  return (
    <div className="w-full ">
      <div className="text-2xl">
        <Title text1={"TOTAL"} text2={"PRICE"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount().toFixed(2)}
          </p>
        </div>
        <hr />
        <div className="flex justify-between"></div>
        <p>Delivery Fee</p>{" "}
        <p>
          {currency}
          {deliveryFee.toFixed(2)}
        </p>
       
      </div>
      <hr />
      <div className="flex justify-between">
        <b>Total</b>
        <b>
          {currency}
          {getCartAmount() === 0 ? 0 : (getCartAmount() + deliveryFee).toFixed(2)}
        </b>
      </div>
    </div>
  );
};

export default CartTotal;
