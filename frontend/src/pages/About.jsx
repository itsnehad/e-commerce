import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
          TrendVault was born from a passion for timeless style, innovation, and empowering self-expression through fashion. Our mission is to redefine the shopping experience by offering high-quality apparel that blends comfort, style, and sustainability.{" "}
          </p>
          <p>
          From curated collections to exclusive designs, we take pride in delivering fashion that resonates with every personality. With a commitment to excellence, we ensure every piece reflects our dedication to quality and creativity.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
          At TrendVault, our mission is to inspire confidence and individuality in every customer. We aim to provide a seamless shopping experience, exceptional customer service, and a carefully crafted collection that speaks to every style story.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurence</b>
          <p className="text-grey-600">
            We meticularously select and vet each product to ensure it meets our
            strigent quality standards{" "}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience </b>
          <p className="text-grey-600">
            With our user friendly experience and hussle-free ordering process
            ,shopping has never been easier{" "}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-grey-600">
            Our team of dedicated professionals is here to assist you the
            way,ensuring your satisfaction is our top priority{" "}
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
