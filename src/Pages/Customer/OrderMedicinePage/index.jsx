import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../components/HeaderBox";
import CheckFormBox from "../../../Lib/CheckFormBox";
// import Button from "../../../components/MainButton";
import NavBar from "../../../Lib/NavBar";
import Footer from "../../../Lib/Footer";
import * as appConst from "../../../Lib/Const/const";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Select,
} from "@mui/material";

function onSubmitID() {
  window.alert("Searching for Data");
}

function onSubmit() {
  window.alert("Data Successfully Saved");
}

function OrderMedicine() {
  const [orderID, setOrderID] = useState();
  const [name, setName] = useState("");
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
          <div className="max-w-[1000px] mx-auto ">
            <p className={` p-4 pt-0 `}>
              Do you want to check about your previous order? You can enter your
              Order ID and get updated about your order.
            </p>
            <div className="bg-box-blue/30">
              <form className="md:flex w-[80%] m-auto py-8 ">
                <input
                  className="w-full mb-4 md:mb-0 mr-4  "
                  type="text"
                  name="orderID"
                  required={true}
                  placeholder="Order ID"
                  // onChange={(e) => {
                  //   setOrderID(e.target.value);
                  // }}
                />
                <Link to="/OrderProcessing">
                  <Button
                    value="Check"
                    // onClick={ onSubmitID }
                    extraTailwind="p-4"
                  />
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
            <p className="px-12">
              {appConst.deliveryChargers[0].name} -
              {appConst.deliveryChargers[0].charge}
            </p>
            <p className="px-12">
              {appConst.deliveryChargers[1].name} -
              {appConst.deliveryChargers[1].charge}
            </p>
          </div>
          <div className="bg-white">
            <div className="p-4">
              <ValidatorForm
                className="md:flex w-full m-auto py-4 "
                onSubmit={onSubmit}
                onError={() => null}
              >
                <Grid container spacing={1}>
                  <Grid
                    // className="flex items-center"
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                  >
                    <TextValidator
                      // sx={{ width: "90%" }}
                      className="w-full mb-4 md:mb-0  "
                      label="Name"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      validators={["required"]}
                      errorMessages={["This field is required"]}
                    />
                  </Grid>
                  <Grid
                    // className="flex items-center"
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                  >
                    <TextValidator
                      // sx={{ width: "90%" }}
                      className="w-full mb-4 md:mb-0  "
                      label="Mobile Number"
                      fullWidth
                      variant="outlined"
                      size="small"
                      required={true}
                      value={mNumber}
                      onChange={(e) => {
                        setMNumber(e.target.value);
                      }}
                      validators={[
                        "required",
                        "isNumber",
                        "maxNumber:9999999999",
                        "minStringLength:10",
                        // "matchRegexp:^[0-99]$",
                      ]}
                      errorMessages={[
                        "This field is required",
                        "Invalid Number",
                        "Invalid Number",
                        "Invalid Number",
                      ]}
                    />
                  </Grid>
                  <Grid
                    // className="flex items-center"
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                  >
                    <TextValidator
                      // sx={{ width: "90%" }}
                      className="w-full mb-4 md:mb-0  "
                      label="Email"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      validators={["required", "isEmail"]}
                      errorMessages={[
                        "This field is required",
                        "Invalid Email",
                      ]}
                    />
                  </Grid>
                  <Grid
                    // className="flex items-center"
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                  >
                    <TextValidator
                      // sx={{ width: "90%" }}
                      className="w-full mb-4 md:mb-0  "
                      label="NIC"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={nic}
                      onChange={(e) => {
                        setNic(e.target.value);
                      }}
                      validators={["required"]}
                      errorMessages={["This field is required"]}
                    />
                  </Grid>
                  <Grid
                    // className="flex items-center"
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <TextValidator
                      // sx={{ width: "90%" }}
                      className="w-full mb-4 md:mb-0  "
                      label="Address"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      validators={["required"]}
                      errorMessages={["This field is required"]}
                    />
                  </Grid>

                  <Grid
                    className="flex items-center"
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                  >
                    <p className="text-black w-full px-2 font-semibold">
                      Prescription
                    </p>
                    <FormControl fullWidth>
                      <Input
                        className="w-full mb-4 md:mb-0  "
                        fullWidth
                        size="small"
                        type="file"
                        onChange={(e) => {
                          setPrescription(e.target.value);
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    // className="flex items-center"
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <TextValidator
                      // sx={{ width: "90%" }}
                      className="w-full mb-4 md:mb-0  "
                      label="If Any Message?"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </Grid>

                  {/* Submit */}
                  <Grid
                    className="flex justify-center"
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <Button type="submit" variant="contained">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </ValidatorForm>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderMedicine;
