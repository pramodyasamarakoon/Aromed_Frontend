import React from "react";
import { Icon } from "@iconify/react";
import Footer from "../../../../Lib/Footer";
import Logo from "../../../../components/Logo";
import HeaderBox from "../../../../components/HeaderBox";

function OrderProcessing() {
  return (
    <div className="bg-back-blue">
      <div className="max-w-[1240px] mx-auto ">
        {/* Logo */}
        <div className="py-4 ">
          <Logo />
        </div>

        {/* Processing Message */}
        <HeaderBox
          extraTailwind="my-4"
          header="Order Medicine"
          backIcon="true"
          backPath="/orderMedicine"
        />
        <div className="flex justify-center py-20 ">
          <div className="flex flex-col justify-center p-4">
            <Icon icon="uim:process" width="36" height="36" />
          </div>
          <p className="p-4 text-xl text-[#4ecb71] ">
            Your Request is Processing
          </p>
        </div>

        <div className="text-center p-4 ">
          <p>
            We will check the details and let you know. Please be sure to
            interact with your Email.
          </p>
        </div>

        <div className="pt-12 px-8 pb-8">
          <p className="px-4">Thank You</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderProcessing;
