import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../components/HeaderBox";
import Logo from "../../../components/Logo";
import Button from "../../../components/MainButton";
import Footer from "../../../Lib/Footer";

function AppointmentConfirmation() {
  return (
    <div className="bg-back-blue">
      <div className="max-w-[1240px] mx-auto ">
        {/* Logo */}
        <div className="py-4 ">
          <Logo />
        </div>

        {/* Successful Message */}
        <HeaderBox extraTailwind="my-4" header="Confirmation" />
        <div className="flex justify-center py-8 ">
          <div className="flex flex-col justify-center p-4">
            <Icon icon="charm:circle-tick" color="#4ecb71" width="36" />
          </div>
          <p className="p-4 text-xl text-[#4ecb71] ">
            Your Appointment is Successful
          </p>
        </div>

        {/* Date */}
        <div className="bg-box-blue/30 p-4 px-12 ">
          <p className="font-bold">Wed, 13th October, 2022</p>
        </div>

        {/* Content */}
        <div className=" text-center pt-8 px-12 sm:px-40   ">
          <div className="sm:flex justify-center text-xl border-2 rounded-lg ">
            <p className="p-2 sm:p-4">Your Appointment Number is</p>
            <p className="p-2 sm:px-8 font-bold sm:p-4 text-4xl sm:text-xl ">
              15
            </p>
          </div>
        </div>
        <div className=" text-center pt-8 px-12 sm:px-40  ">
          <div className="sm:flex justify-center text-xl border-2 rounded-lg ">
            <p className="p-2 sm:p-4">Your Appointment ID is</p>
            <p className="p-2 sm:px-8 font-bold sm:p-4 text-4xl sm:text-xl ">
              123456789
            </p>
          </div>
        </div>

        <div className="pt-12 px-8">
          <p className="px-4">Thank You</p>
          <div className="p-4 sm:flex sm:justify-between sm:px-0 ">
            <Link to="/">
              <Button extraTailwind="mt-4" value="Go Home" />
            </Link>
            <Link to="/videoConference">
              <Button
                extraTailwind="max-w-[300px] mt-4 "
                value="Make Another Appointment"
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppointmentConfirmation;
