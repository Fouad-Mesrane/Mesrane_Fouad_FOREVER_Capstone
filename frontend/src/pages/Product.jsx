import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const [size, setSize] = useState("");
  const fetchProductData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);
  return (
    productData && (
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        {/* Product Data */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* Product images */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto  sm:overflow-y-scroll justify-between">
              {productData.image.map((item, index) => {
                return (
                  <img
                    onClick={() => setImage(item)}
                    key={index}
                    src={item}
                    className="w-[24%] sm:w-full flex-shrink-0 sm:mb-3  cursor-pointer"
                  />
                );
              })}
            </div>
            <div className="w-full sm:w-[80%]">
              <img src={image} className="w-full h-auto" alt="" />
            </div>
          </div>
          {/* prodct details */}
          <div className="flex-1">
            <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">
              {currency}
              {productData.price}
            </p>
            <p className="mt-5 text-gray-500 w-4/5">
              {productData.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className={`border py-2 px-4 bg-gray-50 ${
                        size === item ? "border-orange-500 " : ""
                      }`}
                      onClick={() => setSize(item)}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
            <button className="bg-black text-white px-8 py-3 active:bg-gray-700">
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original Product.</p>
              <p>Cash on Delivery Available</p>
              <p>Easy 30 days returns and exchanges</p>
            </div>
          </div>
        </div>

        {/* -------- Description & Reviews -------- */}

        <div className="mt-20">
          <div className="flex ">
            <p className="border px-5 py-3 text-sm">Description</p>
            <p className="border px-5 py-3 text-sm">Reviews (122)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>
              An e-commerce website is a web application that allows users to
              buy and sell products online. It typically includes features such
              as a catalog of products, a shopping cart, a checkout process, and
              payment processing.{" "}
            </p>
            <p>
              E-commerce websites are typically designed to offer a wide range
              of products and services to customers. They can be used to sell
              physical goods, digital services, or both.
            </p>
          </div>
        </div>

        {/* -------- Related Products -------- */}

        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
    )
  );
};

export default Product;
