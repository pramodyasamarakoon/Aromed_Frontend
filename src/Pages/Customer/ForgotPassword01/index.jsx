import React from "react";
import HeaderBox from "../../../components/HeaderBox";
import Logo from "../../../components/Logo";
import Button from "../../../components/MainButton";
import Footer from "../../../Lib/Footer";

function ForgotPassword01() {
  return (
    <div className="bg-back-blue">
      <div className="max-w-[1240px] mx-auto ">
        <div className="py-4 ">
          <Logo />
        </div>
        <HeaderBox
          extraTailwind="my-4"
          header="Forgot Password"
          backIcon="true"
          backPath="/"
        />
        <div className="p-4 pt-0">
          <p className="px-4">
            If you have forgot your password, Then complete following fields.
            The system will send a 4-digit number for your mobile. Please enter
            that correctly.
          </p>
          <div className="bg-box-blue/30  my-4 py-4">
            <input
              className="w-[96%] mx-[2%] sm:w-[48%] sm:mx-2 "
              type="text"
              placeholder="User Name"
            />
            <input
              className="w-[96%] mx-[2%] sm:w-[48%] sm:mx-2 "
              type="text"
              placeholder="Mobile Number"
            />
            <Button extraTailwind="my-4" value="Send a Code" />
            <p className="text-center text-[14px] ">
              Did not Receive? Click Here to Resend.
            </p>
            <div className="w-full text-center py-8 ">
              <input
                className="w-[240px] items-center  "
                type="number"
                placeholder="4-digit number"
              />
              <Button extraTailwind="mt-4" value="Enter" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPassword01;
