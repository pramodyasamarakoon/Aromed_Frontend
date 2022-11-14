import React from "react";
import heroVid from "../../assets/video1.mp4";
import ButtonSpecial from "../../components/SpecialButton";

function Hero() {
  return (
    <div className="h-screen  relative text-white w-full -z-8">
      <video
        className="object-cover max-h-full w-full absolute"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className="bg-back-blue/50 absolute w-full h-full top-0 left-0 -z-12" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center px-12 ">
        <h1 className="text-6xl font-bold">
          We Believe Everyone Should Have Easy Access to Great Healthcare
        </h1>
        <p className="text-xl py-4">
          “The art of medicine consists of amusing the patient while nature
          cures the disease.” <br /> - Voltaire -
        </p>
        <div className="w-full">
          <a href="#4">
            <ButtonSpecial value="Contact Us" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
