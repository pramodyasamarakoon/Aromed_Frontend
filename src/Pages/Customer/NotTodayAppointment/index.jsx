import React from "react";
import { useLocation } from "react-router-dom";
import HeaderBox from "../../../components/HeaderBox";
import Logo from "../../../components/Logo";
import Footer from "../../../Lib/Footer";

function NotTodayAppointment() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get("date");
  return (
    <div className="bg-back-blue">
      <div className="max-w-[1000px] mx-auto pb-8">
        <div className="py-4 ">
          <Logo />
        </div>
        <HeaderBox
          extraTailwind="my-4"
          header="Oops!"
          backIcon="true"
          backPath="/"
        />

        {/* Content */}
        <div className="bg-box-blue/30 px-4 py-12 my-8">
          <div className="text-center">
            <p>Your Appointment Date is</p>
            <p className="text-6xl font-bold py-8">{date}</p>
          </div>
          <div className="flex">
            <p className="p-4 w-[80%] sm:w-auto ">
              Please join us on the relevant date
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotTodayAppointment;
