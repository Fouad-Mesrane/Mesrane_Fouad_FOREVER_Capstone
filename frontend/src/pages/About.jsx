import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for inovation and desire to
            revolutionize the way people shop online. Our mission is to provide
            a seamless and enjoyable shopping experience for our customers,
            while also supporting small businesses and local communities.
          </p>
          <p>
            Since our inception, we've worked tirelessly to create a platform
            that is user-friendly, secure, and easy to navigate. We believe that
            online shopping should be accessible to everyone, regardless of
            their location or income level.
          </p>
          <b className="text-gray-800 ">Our Missiion</b>
          <p>
            Our mission is to provide a seamless and enjoyable shopping
            experience for our customers, while also supporting small businesses
            and local communities.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>
        <div className="flex flex-col  md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance :</b>
            <p className="text-gray-600">
              We meticulously curate our products to ensure they meet the
              highest standards of quality.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className="text-gray-600">
              With our user-friendly and secure platform, you can shop with
              ease.{" "}
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className="text-gray-600">
              Our team of experts is dedicated to providing exceptional customer
              service.
            </p>
          </div>
        </div>
    </div>
  );
};

export default About;
