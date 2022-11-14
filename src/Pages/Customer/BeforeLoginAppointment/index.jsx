import React from "react";
import HeaderBox from "../../../components/HeaderBox";
import Logo from "../../../components/Logo";
import Footer from "../../../Lib/Footer";

function BeforeLoginAppointment() {
  return (
    <div className="bg-back-blue">
      <div className="max-w-[1240px] mx-auto pb-8">
        <div className="py-4 ">
          <Logo />
        </div>
        <HeaderBox
          extraTailwind="my-4"
          header="Checking"
          backIcon="true"
          backPath="/"
        />

        {/* Content */}
        <div className="bg-box-blue/30 px-8 font-bold py-4 my-8">
          <p className="">Wed, 22 February 2022</p>
        </div>
        <div className="bg-box-blue/30 px-4 py-12 my-8">
          <div className="text-center">
            <p>Your Appointment Date is</p>
            <p className="text-2xl font-bold py-8">Thur, 23 February 2022</p>
          </div>
          <div className="flex">
            <p className="p-4  ">
              Please check your Appointment on the relevant date...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BeforeLoginAppointment;
