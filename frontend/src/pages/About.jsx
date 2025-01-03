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
            Forever was born out of a passion for innovation and a desire to
            revolutionize Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ipsum, adipisci?{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            harum.Since our inception, we've worked tirelessly to curate a
            diverse selection of...
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and.. Lorem ipsum dolor sit amet consectetur
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
