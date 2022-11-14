import React from "react";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import Button from "../../../../components/MainButton";
import Footer from "../../../../Lib/Footer";

function DoctorMeeting() {
  return (
    <div className="bg-back-blue ">
      {/* <NavBar/> */}
      <div className="w-full  bg-back-blue  text-white fixed z-10 top-0 ">
        {/* Current NavBar */}
        <div className="max-w-[1500px] h-[100px] mx-auto px-4 flex items-center justify-between ">
          <div>
            <Logo />
          </div>
        </div>
      </div>

      {/* Patient Details */}
      <div className="max-w-[1240px] mx-auto mt-[100px] ">
        <HeaderBox header="Book Now" />
        <div className="bg-box-blue/20">
          <div className="p-4">
            {/* Name */}
            <div className="w-full flex justify-between my-2 ">
              <p className="my-auto w-[175px] pl-12 ">Name</p>
              <input type="text" className="w-full" />
            </div>
            {/* Age and Gender */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Age</p>
                <input type="number" className="w-full" />
              </div>
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Gender</p>
                <input type="text" className="w-[75%]" />
              </div>
            </div>
            {/* Email and Mobile */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">E mail</p>
                <input type="email" className="w-full" />
              </div>
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Mobile</p>
                <input type="number" className="w-[75%]" />
              </div>
            </div>
            {/* Address */}
            <div className="w-full flex justify-between my-2 ">
              <p className="my-auto w-[175px] pl-12 ">Address</p>
              <input type="text" className="w-full" />
            </div>
            {/* Message */}
            <div className="w-full flex justify-between my-2 ">
              <p className="my-auto w-[175px] pl-12 ">Message</p>
              <input type="text" className="w-full" />
            </div>

            {/* Buttons */}
            <div className="flex justify-evenly w-[400px] mx-auto py-12 ">
              <Button value="Start" />
              <Button value="Skip" />
            </div>
          </div>
        </div>

        {/* Prescription */}
        <div>
          <HeaderBox header="Prescription" />
          <div className="bg-box-blue/30 p-12 ">
            <textarea
              name=""
              id=""
              className="w-full min-h-[400px] bg-box-blue py-4 px-8 "
            />

            <Button extraTailwind="mt-12" value="Submit" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DoctorMeeting;
