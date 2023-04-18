import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
// import Button from "../../../../components/MainButton";
import Footer from "../../../../Lib/Footer";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function ReceptionistLab() {
  const [customer, setCustomer] = useState({
    name: "",
    mNumber: "",
    email: "",
    address: "",
    nic: "",
  });
  const [customerID, setCustomerID] = useState();
  const [allReports, setAllReports] = useState();
  const [report, setReport] = useState({
    name: "",
    price: 0,
  });
  const [billHandler, setBillHandler] = useState(false);
  const [listReports, setListReports] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadAllReports();
  }, []);

  const loadAllReports = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/charges/getChargesByChargeType?chargeType=Laboratory Charges"
      );
      const result = response.data;
      console.log("Lab Reports", result);
      setAllReports(result);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    toast.success("Customer Registered Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    let res = await axios
      .post("http://localhost:8080/labCustomer/addCustomer", {
        name: customer.name,
        mNumber: customer.mNumber,
        email: customer.email,
        address: customer.address,
        nic: customer.nic,
      })
      .then(function (response) {
        console.log("Customer Data", response.data);
        setCustomerID(response.data.customerId);
        setCustomer({
          name: "",
          mNumber: "",
          email: "",
          address: "",
          nic: "",
        });
      })
      .catch(function (error) {
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
      });
  };

  const handleReportChange = (e) => {
    const selectedReport = allReports.find(
      (report) => report.chargeId === e.target.value
    );
    setReport({
      name: e.target.value,
      price: selectedReport.fee,
    });
  };

  const billDone = () => {
    toast.success("Successfully Bill Added!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const addReports = async () => {
    if (report.name != null) {
      try {
        const response = await axios.put(
          `http://localhost:8080/labCustomer/${customerID}/labReports`,
          {
            reportId: report.name,
            price: report.price,
            // reportId: 556656,
            // price: 3000,
          }
        );
        const result = response.data;
        console.log("Done", result);
        setBillHandler(true);
        setListReports(result.labReports);
        if (result.labReports !== null) {
          // set total
          let totalPrice = result.labReports.reduce((total, data) => {
            return total + data.price;
          }, 0);
          setTotal(totalPrice);
          console.log("Total", totalPrice);
        } else {
          setTotal(0);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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
                  <li className="Active">Laboratory</li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <Button value="Account" />
          </div>
        </div>
        {/* <div className="w-[1000px] h-[50px] pl-40  mx-auto ">
          <ul className="flex gap-4 ">
            <li>New Customer</li>
            <li>Send Reports</li>
          </ul>
        </div> */}
      </div>

      <div className="max-w-[1000px] mx-auto mt-[100px] ">
        {/* Booking Form */}
        <HeaderBox header="Book Now" />
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
                    value={customer.name}
                    onChange={(e) => {
                      setCustomer({ ...customer, name: e.target.value });
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
                    value={customer.mNumber}
                    onChange={(e) => {
                      setCustomer({ ...customer, mNumber: e.target.value });
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
                    value={customer.email}
                    onChange={(e) => {
                      setCustomer({ ...customer, email: e.target.value });
                    }}
                    validators={["required", "isEmail"]}
                    errorMessages={["This field is required", "Invalid Email"]}
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
                    value={customer.nic}
                    onChange={(e) => {
                      setCustomer({ ...customer, nic: e.target.value });
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
                    value={customer.address}
                    onChange={(e) => {
                      setCustomer({ ...customer, address: e.target.value });
                    }}
                    validators={["required"]}
                    errorMessages={["This field is required"]}
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

        {/* Adding Lab Reports */}
        {customerID != null ? (
          <div className="bg-box-blue/20 pb-12 ">
            <HeaderBox header="Laboratory Reports" />
            <div className="bg-white">
              <div className="p-4">
                <ValidatorForm
                  className="md:flex w-full m-auto py-4 "
                  onSubmit={addReports}
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
                        label="Customer ID"
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={customerID}
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
                      <FormControl fullWidth>
                        <InputLabel>Select Report</InputLabel>
                        <Select
                          value={report.name}
                          label="Report"
                          size="small"
                          required={true}
                          // defaultValue={"Male"}
                          onChange={(e) => {
                            handleReportChange(e);
                            console.log("Report", report);
                          }}
                        >
                          {allReports &&
                            allReports.map((data) => (
                              <MenuItem
                                key={data.chargeId}
                                value={data.chargeId}
                              >
                                {data.name}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
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
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                </ValidatorForm>
              </div>
            </div>
          </div>
        ) : null}

        {/* Bill */}
        {billHandler === true ? (
          <div className="w-full h-auto py-4 my-12 mt-2 bg-box-blue/20 ">
            {/* Bill inner box */}
            <div className="w-[340px] mx-auto pt-8 px-8 bg-white font-bold rounded-xl ">
              {/* Bill items */}
              <div className="pb-8 border-b border-slate-500  ">
                {listReports !== null
                  ? listReports.map((data, index) => {
                      return (
                        <div key={index} className="flex justify-between ">
                          <p className="text-black">{data.reportId}</p>
                          <p className="text-black">{data.price}</p>
                        </div>
                      );
                    })
                  : null}
              </div>
              {/* Bill total */}
              <div className="flex justify-between pt-4 pb-12 font-semi-bold text-xl ">
                <p className="text-black">Total</p>
                <p className="text-lime-500">{total}</p>
              </div>
              <div className="flex justify-center gap-2 px-4 pb-8 pt-4 ">
                <Button variant="contained" onClick={billDone}>
                  Done
                </Button>
              </div>
            </div>
          </div>
        ) : null}

        {/* Send Reports */}
        {/* <div className="bg-box-blue/20 pb-12 ">
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
        </div> */}
      </div>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default ReceptionistLab;
