import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../components/HeaderBox";
import CheckFormBox from "../../../Lib/CheckFormBox";
import Button from "../../../components/MainButton";
import NavBar from "../../../Lib/NavBar";
import Footer from "../../../Lib/Footer";

function onSubmitID() {
  window.alert('Searching for Data')
}

function onSubmit() {
  window.alert('Data Successfully Saved')
}

function OrderMedicine() {
  const [orderID, setOrderID] = useState();
  const [name, setName] = useState('');
  const [mNumber, setMNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [prescription, setPrescription] = useState();
  const [nic, setNic] = useState();
  const [message, setMessage] = useState();

  return (
    <div className="bg-back-blue ">
      <NavBar />

      {/* Order Medicine Page */}

      <div className="max-w-[1240px] mx-auto pt-28 ">
        {/* Check Form */}

        <HeaderBox
          header="Check Your Order"
          backIcon=""
          extraTailwind="mt-0 "
          backPath="/"
        />
        <div>
        <div className="max-w-[1240px] mx-auto ">
          <p className={` p-4 pt-0 `}>Do you want to check about your previous order? You can enter your Order ID and get updated about your order.</p>
          <div className="bg-box-blue/30">
            <form className="md:flex w-[80%] m-auto py-8 ">
              <input
                className="w-full mb-4 md:mb-0 mr-4  "
                type="text"
                name='orderID'
                required={true}
                placeholder='Order ID'
                onChange={ (e) =>
                  { setOrderID(e.target.value) }
                }
              />
              <Link to="/OrderProcessing">
                <Button value='Check' 
                // onClick={ onSubmitID } 
                extraTailwind="p-4" />
              </Link>
            </form>
          </div>
        </div>
      </div>
        {/* Order Form */}

        <HeaderBox header="Order Medicine" />
        <div>
          <div className="p-4 px-12">
            <p>Delivery Chargers Will be apply*</p>
            <p className="px-12">In Dristict - LKR 200</p>
            <p className="px-12">Out of District - LKR 400</p>
          </div>
          <div className="bg-box-blue/20">
            <div className="p-4">
              <div className="w-full md:flex justify-between md:my-2 ">
                <input
                  type="text"
                  name='name'
                  placeholder="Name"
                  className="w-full md:w-[49%]"
                  onChange={ (e) =>
                    { setName(e.target.value) }
                  }
                />
                <input
                  type="text"
                  name="mNumber"
                  id=""
                  placeholder="Mobile Number"
                  className="w-full md:w-[49%] "
                  onChange={ (e) =>
                    { setMNumber(e.target.value) }
                  }
                />
              </div>
              <div className="w-full md:flex justify-between md:my-2">
                <input
                  type="email"
                  name='email'
                  placeholder="E mail"
                  className="md:w-[49%] "
                  onChange={ (e) =>
                    { setEmail(e.target.value) }
                  }
                />
                <input
                  type="text"
                  name="address"
                  id=""
                  placeholder="Address"
                  className="md:w-[49%] "
                  onChange={ (e) =>
                    { setAddress(e.target.value) }
                  }
                />
              </div>
              <div className="w-full md:my-2">
                <input
                  type="text"
                  name="nic"
                  placeholder="NIC Number"
                  className="md:w-[49%] "
                  onChange={ (e) =>
                    { setNic(e.target.value) }
                  }
                />
              </div>
              <div className="md:my-2">
                <p className="px-8">Prescription</p>
                <input
                  type="file"
                  name="prescriotion"
                  id=""
                  placeholder="Prescription"
                  className="md:w-[49%] "
                  onChange={ (e) =>
                    { setPrescription(e.target.value) }
                  }
                />
              </div>
              <div className="md:my-2">
                <input
                  type="text"
                  name="message"
                  id=""
                  placeholder="Any Special Notes?"
                  onChange={ (e) =>
                    { setMessage(e.target.value) }
                  }
                />
              </div>
              <div className="py-2">
                <Link to="/SuccessfulOrderRequest">
                  <Button 
                  // onClick={onSubmit} 
                  value="Request" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderMedicine;
