import React from "react";
import HeaderBox from "../../../components/HeaderBox";
import Logo from "../../../components/Logo";
import Footer from "../../../Lib/Footer";

function WaitingForAppointment() {
  return (
    <div className="bg-back-blue">
      <div className="max-w-[1240px] mx-auto pb-8">
        <div className="py-4 ">
          <Logo />
        </div>
        <HeaderBox
          extraTailwind="my-4"
          header="Please Wait"
          backIcon="true"
          backPath="/"
        />

        {/* Content */}
        <div className="bg-box-blue/30 px-4 py-12 my-8">
          <div className="text-center">
            <p>Current Patient Number is</p>
            <p className="text-6xl font-bold py-8">09</p>
          </div>
          <div className="flex">
            <p className="p-4 w-[80%] sm:w-auto ">
              Please Wait Until Your Turn Comes... Your Appointment Number is
            </p>
            <p className="p-4 flex flex-col justify-center text-4xl ">14</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WaitingForAppointment;
