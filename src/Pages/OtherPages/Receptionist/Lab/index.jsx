import React from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import Button from "../../../../components/MainButton";
import Footer from "../../../../Lib/Footer";

function ReceptionistLab() {
  return (
    <div className="bg-back-blue ">
      {/* <NavBar/> */}
      <div className="w-full  bg-back-blue  text-white fixed z-10 top-0 ">
        {/* Current NavBar */}
        <div className="max-w-[1500px] h-[100px] mx-auto px-4 flex items-center justify-between ">
          <div>
            <Logo />
          </div>
          <div className="w-[50%] text-[18px] ">
            <div className="uppercase">
              <ul className="flex gap-4 ">
                <Link to="/ReceptionistHome">
                  <li>Appointments</li>
                </Link>
                <Link to="/ReceptionistLab">
                  <li className="Active">Availability</li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <Button value="Account" />
          </div>
        </div>
        <div className="w-[1000px] h-[50px] pl-40  mx-auto ">
          <ul className="flex gap-4 ">
            <li>New Customer</li>
            <li>Send Reports</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto mt-[150px] ">
        <HeaderBox header="Customer Details" />
        {/* bg box */}
        <div className="bg-box-blue/20">
          {/* Form */}
          <div className="p-4">
            <div className="w-full flex justify-between mt-4 ">
              <input type="text" placeholder="Name" className="w-[49%]" />
              <input
                type="number"
                name=""
                id=""
                placeholder="Mobile Number"
                className="w-[49%] "
              />
            </div>
            <div className="w-full flex justify-between mt-4">
              <input type="email" placeholder="E mail" className="w-[49%] " />
              <input
                type="text"
                name=""
                id=""
                placeholder="Address"
                className="w-[49%] "
              />
            </div>
            <div className="w-full flex justify-between mt-4 ">
              <input
                type="text"
                name=""
                id=""
                placeholder="NIC Number"
                className="w-[49%] "
              />
            </div>
            <div className="w-full  justify-between mt-4 ">
              <p className="pb-2 px-4 ">Prescription</p>
              <input
                type="file"
                name=""
                id=""
                placeholder="Prescription"
                className="w-[49%] "
              />
            </div>
            <div className="w-full mt-4 pb-12">
              <input
                type="text"
                placeholder="If Any Message?"
                className="w-full "
              />
            </div>
            <Button extraTailwind="mb-8" value="Add" />
          </div>
        </div>

        {/* Adding Lab Reports */}
        <div className="bg-box-blue/20 pb-12 ">
          <HeaderBox header="Laboratory Reports" />
          <div className="py-8 px-4 pb-12 ">
            <div className="flex w-full gap-2 ">
              <input
                type="number"
                placeholder="Customer ID"
                className="w-[50%]"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Report Type"
                className="w-[120%]"
              />
              <input
                type="number"
                name=""
                id=""
                placeholder="Price"
                className="w-[60%]"
              />
            </div>
          </div>
          <Button extraTailwind="mb-8" value="Add" />
        </div>

        {/* Bill */}
        <div className="w-full h-auto py-20 my-12 bg-box-blue/20 ">
          {/* Bill inner box */}
          <div className="w-[340px] mx-auto pt-24 pb-16 px-8 bg-white font-bold rounded-xl ">
            {/* Bill items */}
            <div className="pb-16 border-b border-slate-500  ">
              <div className="flex justify-between ">
                <p className="text-black">Full Blood Count</p>
                <p className="text-black">600.00</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-black">X-Ray</p>
                <p className="text-black">1700.00</p>
              </div>
            </div>
            {/* Bill total */}
            <div className="flex justify-between pt-4 pb-12 font-semi-bold text-xl ">
              <p className="text-black">Total</p>
              <p className="text-lime-500">2300.00</p>
            </div>
            <Link to="/AppointmentConfirmation">
              <Button value="Confirm" />
            </Link>
          </div>
        </div>

        {/* Send Reports */}
        <div className="bg-box-blue/20 pb-12 ">
          <HeaderBox header="Send Reports" />
          <div className="py-8 px-4 pb-12 ">
            <div className="flex w-full gap-2 ">
              <input
                type="number"
                placeholder="Customer ID"
                className="w-[50%]"
              />
              <p className="w-[30%] px-4 text-right my-auto ">Upload Reports</p>
              <input type="file" name="" id="" className="w-[60%]" />
            </div>
          </div>
          <Button extraTailwind="mb-8" value="Send" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReceptionistLab;
