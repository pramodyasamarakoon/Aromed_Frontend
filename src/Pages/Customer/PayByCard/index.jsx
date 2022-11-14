import React from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../components/HeaderBox";
import Logo from "../../../components/Logo";
import Visa from "../../../assets/Visa.png";
import Button from "../../../components/MainButton";
import Footer from "../../../Lib/Footer";

function PayByCard() {
  return (
    <div className="bg-back-blue">
      <div className="max-w-[1240px] mx-auto ">
        <div className="py-4 ">
          <Logo />
        </div>
        <HeaderBox
          extraTailwind="my-4"
          header="Pay By Card"
          backIcon="true"
          backPath="/videoConference"
        />
        <div className="bg-box-blue/30 p-8">
          <div>
            <h1>We Accept</h1>
            <img src={Visa} alt="" className="h-[150px] pl-20" />
          </div>
          <div>
            <h1 className="text-xl mt-8">Card Details</h1>
            <input
              className="sm:mt-2"
              type="text"
              placeholder="Card Holder's Name"
              name=""
              id=""
            />
            <input
              className="sm:mt-2"
              type="number"
              placeholder="Card Number"
            />
            <p className="pt-8">Expire Date</p>
            <div className="grid grid-cols-2 gap-2">
              <input className="sm:mt-2" type="number" placeholder="Year" />
              <input className="sm:mt-2" type="number" placeholder="Month" />
            </div>
            <input
              className="sm:mt-2"
              type="number"
              placeholder="CVV"
              name=""
              id=""
            />
            <Link to="/AppointmentConfirmation">
              <Button extraTailwind="mt-8 mb-12 " value="Pay Now" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PayByCard;
