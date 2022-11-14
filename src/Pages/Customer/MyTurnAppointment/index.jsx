import React from "react";
import HeaderBox from "../../../components/HeaderBox";
import Logo from "../../../components/Logo";
import Button from "../../../components/MainButton";
import Footer from "../../../Lib/Footer";

function MyTurnAppointment() {
  return (
    <div className="bg-back-blue">
      <div className="max-w-[1240px] mx-auto pb-8">
        <div className="py-4 ">
          <Logo />
        </div>
        <HeaderBox extraTailwind="my-4" header="Your Turn" />

        {/* Content */}
        <div className="bg-box-blue/30 px-4 py-12 my-8">
          <div className="text-center">
            <p>Your Meeting ID is</p>
            <p className="text-6xl font-bold py-8">145445145</p>
          </div>
          <div className="flex">
            <Button
              extraTailwind="max-w-[200px] mt-4 "
              value="Join the Meeting"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyTurnAppointment;
