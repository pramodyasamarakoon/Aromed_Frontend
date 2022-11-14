import React from "react";
import { Icon } from "@iconify/react";
import Logo from "../../components/Logo";

function Footer() {
  return (
    <div id="4" className="w-full bg-box-blue mt-12">
      <div className="sm:pt-20 pb-12 pt-12 sm:px-4 md:px-[10%] grid sm:grid-cols-3 grid-cols-2  ">
        <div className="col-start-1 text-left ">
          <ul>
            <li className="py-2 font-semibold text-[16px]">Our Services</li>
            <li>Meet a Doctor</li>
            <li>Order Medicine</li>
            <li>View Laboratory Charges</li>
          </ul>
        </div>
        <div className="col-start-2 row-span-2 flex flex-col justify-center items-center ">
          <Logo />
        </div>
        <div className="col-start-1  sm:col-start-3 sm:text-right ">
          <ul>
            <li className="py-2 font-semibold text-[16px]">Contact Us</li>
            <li>A1, Peradeniya, Sri Lanka</li>
            <li>+94 812 065 030</li>
            <li>AromedMedical@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-solid border-t border-white h-[40px] ">
        <div className="grid grid-cols-2 h-full">
          <div className="flex w-full">
            <p className="flex flex-col justify-center pl-8 text-[12px] ">
              Copyright{" "}
            </p>
            <p className="flex flex-col justify-center pl-2 text-[12px] ">
              <Icon icon="ant-design:copyright-circle-outlined" color="white" />
            </p>
            <p className="flex flex-col justify-center pl-2 text-[12px] ">
              All Right Reserved By Pramodya Samarakoon
            </p>
          </div>
          <div className="flex w-full justify-end ">
            <li className="flex flex-col justify-center pr-8 text-[12px] ">
              Privacy{" "}
            </li>
            <li className="flex flex-col justify-center pr-8 text-[12px] ">
              Terms
            </li>
            <li className="flex flex-col justify-center pr-8 text-[12px] ">
              Policy
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
