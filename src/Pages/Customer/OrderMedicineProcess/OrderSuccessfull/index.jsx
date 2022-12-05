import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import Button from "../../../../components/MainButton";
import Footer from "../../../../Lib/Footer";

function OrderSuccessful() {
  return (
    <div className="bg-back-blue">
      <div className="max-w-[1240px] mx-auto ">
        {/* Logo */}
        <div className="py-4 ">
          <Logo />
        </div>

        {/* Successful Message */}
        <HeaderBox extraTailwind="my-4" header="Order Medicine" />
        <div className="flex justify-center py-8 ">
          <div className="flex flex-col justify-center p-4">
            <Icon icon="charm:circle-tick" color="#4ecb71" width="36" />
          </div>
          <p className="p-4 text-xl text-[#4ecb71] ">Successful Order</p>
        </div>

        <div className="text-center py-4">
          <p>
            The Order is Placed. Your Order will send as soon as possible. If
            you want to get any details about the delivering, please free to
            contact us. Thank You.
          </p>
          <div className="flex justify-center">
            <p className="py-2 text-xl">Contact Us - </p>
            <a href="tel:+94770891382">
              <p className="py-2 px-2 text-xl">077 000 0000</p>
            </a>
          </div>
        </div>

        {/* Content */}
        <div className=" text-center pt-8 px-12 sm:px-40   ">
          <div className="sm:flex py-2 justify-center text-xl border-2 rounded-lg ">
            <p className="p-2 sm:p-4">Your Order ID is</p>
            <p className="p-2 sm:px-8 font-bold sm:p-4 text-4xl sm:text-xl ">
              1554548
            </p>
          </div>
        </div>

        <div className="pt-12 px-8">
          <p className="px-4">Thank You</p>
          <div className="p-4 sm:flex sm:justify-between sm:px-0 ">
            <Link to="/">
              <Button extraTailwind="mt-4" value="Go Home" />
            </Link>
            <Link to="/orderMedicine">
              <Button
                extraTailwind="max-w-[300px] mt-4 "
                value="Make Another Order"
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderSuccessful;