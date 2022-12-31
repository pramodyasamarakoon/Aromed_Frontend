import { Button, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import HeaderBox from "../../../components/HeaderBox";
import Logo from "../../../components/Logo";
// import Button from "../../../components/MainButton";
import Footer from "../../../Lib/Footer";

function ForgotPassword01() {
  const [userName, setUserName] = useState();
  const [mNumber, setMNumber] = useState();
  const [code, setCode] = useState();

  const forgotSubmit = () => {
    window.alert("Submit");
  };

  const sendCode = () => {
    window.alert("Send Code");
  };

  return (
    <div className="bg-back-blue">
      <div className="max-w-[1000px] mx-auto ">
        <div className="py-4 ">
          <Logo />
        </div>
        <HeaderBox
          extraTailwind="my-4"
          header="Forgot Password"
          backIcon="true"
          backPath="/"
        />
        <div className="p-4 py-8 pt-0">
          <p className="px-4">
            If you have forgot your password, Then complete following fields.
            The system will send a 4-digit number for your mobile. Please enter
            that correctly.
          </p>
        </div>
        <div className="bg-white">
          <div className="p-4">
            <ValidatorForm
              className="md:flex w-[90%] m-auto py-4 "
              onSubmit={sendCode}
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
                    label="User Name"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
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
                    required={true}
                    variant="outlined"
                    size="small"
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
                  className="flex mt-2 justify-center"
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <Button type="submit" variant="contained">
                    Send a Code
                  </Button>
                </Grid>
                <Grid
                  className="flex mt-2 justify-center"
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <a href="/ForgotPassword01">
                    <p className="text-black font-semibold my-2">
                      Did not Received a code? Click Here to Resend.
                    </p>
                  </a>
                </Grid>
              </Grid>
            </ValidatorForm>
            <ValidatorForm
              className="md:flex w-[90%] m-auto py-4 "
              onSubmit={forgotSubmit}
              onError={() => null}
            >
              <Grid container spacing={1}>
                <Grid
                  className="flex items-center"
                  item
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                ></Grid>
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
                    label="4 Digit Number"
                    fullWidth
                    required={true}
                    variant="outlined"
                    size="small"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                    validators={[
                      "required",
                      "isNumber",
                      "maxNumber:9999",
                      "minStringLength:4",
                      // "matchRegexp:^[0-99]$",
                    ]}
                    errorMessages={[
                      "This field is required",
                      "Invalid Code",
                      "Invalid Code",
                      "Invalid Code",
                    ]}
                  />
                </Grid>
                <Grid
                  className="flex mt-2 justify-center"
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
      <Footer />
    </div>
  );
}

export default ForgotPassword01;
