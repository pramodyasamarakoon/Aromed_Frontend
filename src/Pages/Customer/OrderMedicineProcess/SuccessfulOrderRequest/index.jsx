import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import Footer from "../../../../Lib/Footer";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Select,
} from "@mui/material";

function SuccessfulOrderRequest() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderMedicineId = queryParams.get("orderMedicineId");
  return (
    <div className="bg-back-blue">
      <div className="max-w-[1000px] mx-auto ">
        {/* Logo */}
        <div className="py-4 ">
          <Logo />
        </div>

        {/* Successful Message */}
        <HeaderBox
          extraTailwind="my-4"
          header="Order Medicine"
          backPath="SuccessfulOrderRequest"
        />
        <div className="flex justify-center py-4 ">
          <div className="flex flex-col justify-center p-4">
            <Icon icon="charm:circle-tick" color="#4ecb71" width="36" />
          </div>
          <p className="p-4 text-xl text-[#4ecb71] ">Successful Request</p>
        </div>

        <div className="text-center py-2">
          <p>
            We will check the details and let you know. Please be sure to
            interact with your Email.
          </p>
        </div>

        {/* Content */}
        <div className=" text-center pt-8 px-12 sm:px-40   ">
          <div className="sm:flex py-2 justify-center text-xl border-2 rounded-lg ">
            <p className="p-2 sm:p-4">Your Order ID is</p>
            <p className="p-2 sm:px-8 font-bold sm:p-4 text-4xl sm:text-xl ">
              {orderMedicineId}
            </p>
          </div>
        </div>

        <div className="pt-4 px-8">
          <p className="px-4">Thank You</p>
          <div className="p-4 sm:flex sm:justify-between sm:px-0 pt-12 ">
            <Link to="/">
              <Button variant="contained">Home</Button>
            </Link>
            <Link to="/orderMedicine">
              <Button variant="contained">Make new Order</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SuccessfulOrderRequest;
