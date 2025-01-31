import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="w-32 mb-5" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            praesentium. Quae labore, debitis, quis ex earum numquam blanditiis
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-221-34-2345</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

     <div>
     <hr />
     <p className="py-5 text-sm text-center">Copyright &copy; 2025 Forever.com - All Rights Reserved</p>
     </div>
    </div>
  );
};

export default Footer;
