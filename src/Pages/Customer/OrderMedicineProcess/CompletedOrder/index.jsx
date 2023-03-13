import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
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

function CompletedOrder() {
  const location = useLocation();
  const order = location.state.order;
  console.log(order);
  const [medicineList, setMedicineList] = useState(order.medicineList);
  const [total, setTotal] = useState(order.total);
  const navigate = useNavigate();
  const [handleHome, setHandleHome] = useState(false);

  const deleteOrder = async () => {
    try {
      axios
        .delete(
          `http://localhost:8080/order/deleteOrder?orderId=${order.orderMedicineId}`
        )
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
          // Do something on error, e.g. show an error message
        });
    } catch (error) {
      console.log(error);
      toast.error(
        { error },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
  };

  const placedOrder = async () => {
    try {
      axios
        .put(
          `http://localhost:8080/order/PlacingOrders?orderId=${order.orderMedicineId}&placedStatus=true`
        )
        .then((res) => {
          console.log("Updated Order", res.data);
          toast.success("Successfully Placed the Order", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setHandleHome(true);
        })
        .catch((err) => {
          console.error(err);
          // Do something on error, e.g. show an error message
        });
    } catch (error) {
      console.log(error);
      toast.error(
        { error },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
  };

  return (
    <div className="bg-back-blue">
      <div className="max-w-[1000px] mx-auto ">
        {/* Logo */}
        <div className="py-4 ">
          <Logo />
        </div>

        {/* Processing Message */}
        <HeaderBox
          extraTailwind="my-4"
          header="Your Order"
          backIcon="true"
          backPath="/orderMedicine"
        />

        {/* Bill */}
        <div className="w-full h-auto py-4 my-12 mt-2 bg-box-blue/20 ">
          {/* Bill inner box */}
          <div className="w-[400px] mx-auto pt-8 px-8 bg-white font-bold rounded-xl ">
            {/* Bill items */}
            <div className="pb-8 border-b border-slate-500  ">
              {medicineList.map((data, index) => {
                return (
                  <div key={index} className="flex justify-between ">
                    <p className="text-black">{data.medicine}</p>
                    <p className="text-black">{data.price}</p>
                  </div>
                );
              })}
              <div className="flex justify-between ">
                <p className="text-black">Delivery Charges</p>
                <p className="text-black">500</p>
              </div>
            </div>
            {/* Bill total */}
            <div className="flex justify-between pt-4 pb-12 font-semi-bold text-xl ">
              <p className="text-black">Total</p>
              <p className="text-lime-500">{total}</p>
            </div>
            {!handleHome ? (
              <div className="flex justify-center gap-2 px-4 pb-8 pt-4 ">
                <Button variant="contained" onClick={deleteOrder}>
                  Cancel Order
                </Button>
                <Button variant="contained" onClick={placedOrder}>
                  Pay by Card
                </Button>
              </div>
            ) : (
              <div className="flex justify-center gap-2 px-4 pb-8 pt-4 ">
                <Link to="/">
                  <Button variant="contained">Back to Home</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default CompletedOrder;
