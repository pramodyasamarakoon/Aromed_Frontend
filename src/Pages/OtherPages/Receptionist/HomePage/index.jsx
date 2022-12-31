import React from "react";
import { Link } from "react-router-dom";
// import NavBar from "../../Lib/NavBar";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
// import Button from "../../../../components/MainButton";
import CheckFormBox from "../../../../Lib/CheckFormBox";
import Footer from "../../../../Lib/Footer";
import { DoctorData } from "../../../../Lib/Const/DoctorData";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import * as appConst from "../../../../Lib/Const/const";
import { landingPageValidation } from "../../../../Validations/LandingPageV";

/* Data for Appointment List */
const APPOINTMENT_LIST = [
  {
    id: 15442,
    number: 15,
    pName: "Pramodya Samarakoon",
    nic: "990491402v",
    gender: "Male",
    age: 20,
    mobile: 770891382,
  },
  {
    id: 15442,
    number: 15,
    pName: "Pramodya Samarakoon",
    nic: "990491402v",
    gender: "Male",
    age: 20,
    mobile: 770891382,
  },
  {
    id: 15442,
    number: 15,
    pName: "Pramodya Samarakoon",
    nic: "990491402v",
    gender: "Male",
    age: 20,
    mobile: 770891382,
  },
  {
    id: 15442,
    number: 15,
    pName: "Pramodya Samarakoon",
    nic: "990491402v",
    gender: "Male",
    age: 20,
    mobile: 770891382,
  },
  {
    id: 15442,
    number: 15,
    pName: "Pramodya Samarakoon",
    nic: "990491402v",
    gender: "Male",
    age: 20,
    mobile: 770891382,
  },
];

/* Data for the doctor */
const DOCTOR_NAMES = [
  {
    name: "Mr.Mitchel Barly",
  },
  {
    name: "Mr.Mitchel Barly",
  },
  {
    name: "Mr.Mitchel Barly",
  },
  {
    name: "Mr.Mitchel Barly",
  },
];

function ReceptionistHome() {
  const [appointmentDoctor, setAppointmentDoctor] = useState();
  const [name, setName] = useState("");
  const [mNumber, setMNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [nic, setNic] = useState();
  const [doctor, setDoctor] = useState();
  const [appointmentFee, setAppointmentFee] = useState(1500);
  const [date, setDate] = useState();
  const [message, setMessage] = useState();
  const [snackBar, setSnackBar] = useState(false);
  const videoConference = false;
  const [amount, setAmount] = useState(2300);
  // const [data, setData] = useState();
  const [billHandler, setBillHandler] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [tempAppointmentId, setTempAppointmentId] = useState();
  const [data, setData] = useState();
  const [id, setId] = useState();

  const onSubmit = async () => {
    // window.alert('Data Successfully Saved')
    // console.log("This is data", mNumber);
    setSnackBar(true);
    let res = await axios
      .post("http://localhost:8080/customer/videoConference", {
        name: name,
        mNumber: mNumber,
        email: email,
        address: address,
        gender: gender,
        age: age,
        nic: nic,
        doctor: doctor,
        date: date,
        message: message,
        videoConference: videoConference,
      })
      .then(function (response) {
        // console.log(response);
        setData(response);
        if (response.status === 201) {
          console.log(response.data.appointmentId);
          setBillHandler(true);
          // appConst.doctors.forEach((element, index) => {
          //   if (doctor === appConst.doctors.find(doctor)) {
          //     console.log("Success");
          //   }
          //   console.log("Error");
          // });
        }
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  const bookAnAppointment = async () => {
    let res = await axios
      .post("http://localhost:8080/customer/meetAppointment", {
        appointmentId: tempAppointmentId,
        paymentStatus: false,
        amount: amount,
      })
      .then(function (response) {
        // console.log(response);
        setData(response);
        // if(response.status === 201 ){
        //   console.log("Succesfull");
        // }
      })
      .catch(function (error) {
        // console.log(error);
      });
    // if ( tempAppointmentId === data.data.appointmentId ){
    //   setPaymentStatus(false);
    //   // console.log(paymentStatus);
    // }
    // else{
    //   console.log(paymentStatus);
    // }
  };

  // Check Appointment ID
  const checkAppointment = async (ID, e) => {
    // e.preventDefault("");
    let appointmentID = ID;

    if (appointmentID != undefined) {
      window.alert(appointmentID);
      const isValid = await landingPageValidation.isValid(appointmentID);
      // window.alert(isValid)
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
                  <li className="Active">Appointments</li>
                </Link>
                <Link to="/ReceptionistLab">
                  <li>Laboratory</li>
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
            <li>Current</li>
            <li>Check</li>
            <li>Booking Now</li>
            <li>List</li>
          </ul>
        </div>
      </div>

      {/* Check Current Appointment Number */}
      <div className="max-w-[1240px] mx-auto mt-[150px] ">
        <HeaderBox header="Current Appointment Number" />
        <div className="bg-white">
          <div className="p-4">
            <ValidatorForm
              className="md:flex w-full m-auto py-4 "
              // onSubmit={onSubmit}
              onError={() => null}
            >
              <Grid container spacing={1}>
                <Grid
                  className="flex items-center"
                  item
                  lg={8}
                  md={8}
                  sm={12}
                  xs={12}
                >
                  <FormControl fullWidth>
                    <InputLabel>Select Doctor</InputLabel>
                    <Select
                      value={appointmentDoctor}
                      label="Doctor"
                      size="small"
                      required={true}
                      // defaultValue={"Male"}
                      onChange={(e) => {
                        setAppointmentDoctor(e.target.value);
                      }}
                    >
                      {DoctorData.map((data) => (
                        <MenuItem value={data.name}>{data.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  // className="flex items-center"
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                >
                  <div className="py-4  justify-center text-center border-2 border-slate-400  ">
                    <p className="text-6xl text-black">15</p>
                  </div>
                </Grid>
              </Grid>
            </ValidatorForm>
          </div>
        </div>

        {/* Check Appointments */}
        <HeaderBox header="Check Appointment" />
        <div className="bg-white">
          <ValidatorForm
            className="md:flex w-[80%] m-auto py-4 "
            onSubmit={(event) => {
              checkAppointment(id, event);
            }}
            onError={() => null}
          >
            <Grid container>
              <Grid
                // className="flex items-center"
                item
                lg={9}
                md={9}
                sm={12}
                xs={12}
              >
                <TextValidator
                  sx={{ width: "90%" }}
                  className="w-full mb-4 md:mb-0  "
                  placeholder="Appointment Id"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={id}
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                />
              </Grid>
              <Grid
                className="flex items-center"
                item
                lg={1}
                md={1}
                sm={12}
                xs={12}
              ></Grid>
              <Grid
                // className="flex justify-center"
                item
                lg={2}
                md={2}
                sm={12}
                xs={12}
              >
                <Button type="submit" variant="contained">
                  Check
                </Button>
              </Grid>
            </Grid>

            {/* <Button
                // onClick={ checkAppointment }
                value="check"
                type="submit"
              /> */}
          </ValidatorForm>
        </div>

        {/* Book Now */}
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
                    errorMessages={["This field is required", "Invalid Email"]}
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
                  // className="flex items-center"
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  {/* <TextValidator
                      // sx={{ width: "90%" }}
                      className="w-full mb-4 md:mb-0  "
                      label="Gender"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={gender}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                      validators={["required"]}
                      errorMessages={["This field is required"]}
                    /> */}
                  <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      value={gender}
                      label="Gender"
                      size="small"
                      required={true}
                      defaultValue={"Male"}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                    </Select>
                  </FormControl>
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
                    label="Age"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                    validators={[
                      "required",
                      "isNumber",
                      "maxNumber:100",
                      "minNumber:0",
                    ]}
                    errorMessages={[
                      "This field is required",
                      "Invalid Age",
                      "Invalid Age",
                      "Age Must be Positive",
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
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  {/* <TextValidator
                      // sx={{ width: "90%" }}
                      className="w-full mb-4 md:mb-0  "
                      label="Doctor"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={doctor}
                      onChange={(e) => {
                        setDoctor(e.target.value);
                      }}
                      validators={["required"]}
                      errorMessages={["This field is required"]}
                    /> */}
                  <FormControl fullWidth>
                    <InputLabel>Select Doctor</InputLabel>
                    <Select
                      value={doctor}
                      label="Doctor"
                      size="small"
                      required={true}
                      // defaultValue={"Male"}
                      onChange={(e) => {
                        setDoctor(e.target.value);
                      }}
                    >
                      {appConst.doctors.map((data) => (
                        <MenuItem value={data.name}>{data.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
                    Appointment Date
                  </p>
                  <FormControl fullWidth>
                    <input
                      name="date"
                      type="date"
                      required={true}
                      placeholder="Select a Date"
                      className="md:w-[100%] "
                      onChange={(e) => {
                        setDate(e.target.value);
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

        {/* Bill */}
        {billHandler === true ? (
          <div className="w-full h-auto py-10 my-5 bg-box-blue/20">
            {/* Bill inner box */}
            <div className="w-[340px] mx-auto py-10 px-8 bg-white font-bold rounded-xl ">
              {/* Bill items */}
              <div className="pb-10 border-b border-slate-500  ">
                <div className="flex justify-between ">
                  <p className="text-black">Appointment Fee</p>
                  <p className="text-black">600.00</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-black">Doctor Fee</p>
                  <p className="text-black">1700.00</p>
                </div>
              </div>
              {/* Bill total */}
              <div className="flex justify-between pt-4 pb-4 font-semi-bold text-xl ">
                <p className="text-black">Total</p>
                <p className="text-lime-500">2300.00</p>
              </div>
              <div className="w-full flex-col justify-between md:my-2 pb-2 ">
                <p className="text-black font-semibold pb-2">
                  Check Your E mail and Please Enter the Appointment ID Here
                </p>
                <input
                  name="appointmentId"
                  type="text"
                  placeholder="Appointment ID"
                  className="w-full md:w-[100%]"
                  onChange={(e) => {
                    setTempAppointmentId(e.target.value);
                  }}
                />
              </div>
              <Grid
                className="flex justify-center"
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Button variant="contained" onClick={bookAnAppointment}>
                  Pay on Door
                </Button>
              </Grid>
            </div>
          </div>
        ) : null}

        {/* Appointment List */}
        <HeaderBox header="Appointment List" />
        <div className="w-full h-auto py-20 my-12 bg-box-blue/20 px-2 ">
          <div className="flex w-full pb-12 ">
            <div className="w-full p-2">
              <p className="pb-2 px-4">Select the Doctor</p>
              <select name="" id="">
                {DOCTOR_NAMES.map(({ name }) => (
                  <option value={`${name}`}>{name}</option>
                ))}
              </select>
            </div>
            <div className="w-full p-2">
              <p className="pb-2 px-4">Select Date</p>
              <input type="date" />
            </div>
          </div>
          {/* Inner box */}
          <div className="w-full mx-auto pt-24 pb-16 px-8 bg-white font-bold rounded-xl ">
            {/* Bill items */}
            <div className="pb-16   ">
              <table className="table-auto w-full border-collapse border border-slate-500 ">
                <thead>
                  <th className=" border border-slate-600 bg-slate-400 ">ID</th>
                  <th className=" border border-slate-600 bg-slate-400 ">
                    Number
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Patient Name
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">NIC</th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Gender
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">Age</th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Mobile Number
                  </th>
                </thead>
                <tbody>
                  {APPOINTMENT_LIST.map(
                    ({ id, number, pName, nic, gender, age, mobile }) => (
                      <tr>
                        <td className="text-center border border-slate-700">
                          {id}
                        </td>
                        <td className="text-center border border-slate-700">
                          {number}
                        </td>
                        <td className="text-center border border-slate-700">
                          {pName}
                        </td>
                        <td className="text-center border border-slate-700">
                          {nic}
                        </td>
                        <td className="text-center border border-slate-700">
                          {gender}
                        </td>
                        <td className="text-center border border-slate-700">
                          {age}
                        </td>
                        <td className="text-center border border-slate-700">
                          {mobile}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReceptionistHome;
