import React from "react";
import HeaderBox from "../../../components/HeaderBox";
import Logo from "../../../components/Logo";
import Button from "../../../components/MainButton";
import Footer from "../../../Lib/Footer";

function ForgotPassword02() {
  return (
    <div>
      <div className="bg-back-blue">
        <div className="max-w-[1240px] mx-auto sm:mb-28 ">
          <div className="py-4 sm:mb-20 ">
            <Logo />
          </div>
          <HeaderBox
            extraTailwind="my-4"
            header="Update Password"
            backIcon="true"
            backPath="/ForgotPassword01"
          />
          <div className="p-4 pt-0 mb-12">
            <div className="bg-box-blue/30 text-center  my-4 py-4">
              <input
                className="w-[96%] mx-[2%] sm:w-[48%] sm:mx-2 sm:my-2 "
                type="text"
                placeholder="User Name"
              />
              <input
                className="w-[96%] mx-[2%] sm:w-[48%] sm:mx-2 sm:my-2 "
                type="text"
                placeholder="New Password"
              />
              <input
                className="w-[96%] mx-[2%] sm:w-[48%] sm:mx-2 sm:my-2 "
                type="text"
                placeholder="Confirm Password"
              />
              <Button extraTailwind="my-4" value="Update" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ForgotPassword02;
