import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import NavBar from "../../Lib/NavBar";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
// import Button from "../../../../components/MainButton";
import CheckFormBox from "../../../../Lib/CheckFormBox";
import Footer from "../../../../Lib/Footer";
import { DoctorData } from "../../../../Lib/Const/DoctorData";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import * as appConst from "../../../../Lib/Const/const";
import { landingPageValidation } from "../../../../Validations/LandingPageV";
import { toast, ToastContainer } from "react-toastify";
import { getAllDoctors } from "../../../../Lib/Const/const";

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
  const today = new Date().toISOString().slice(0, 10);
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [doctorId, setDoctorId] = useState();
  const [allDoctors, setAllDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllDoctors();
      setAllDoctors(result);
      console.log("Doc", result);
    };
    fetchData();
  }, []);

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
    let appointmentID = ID;
    try {
      const response = await axios.get(
        `http://localhost:8080/customer/appointmentId/${appointmentID}`
      );
      const result = response.data; // log the string return from the server
      if (result == "") {
        toast.error("Incorrect Appointment Number", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      // else {
      //   console.log(result);
      //   navigate(`/NotTodayAppointment?date=${result.date}`);
      // }
      else if (result.date === today) {
        console.log("today", result);

        navigate(
          `/WaitingForAppointment?appointmentNumber=${result.appointmentNumber}&appointmentId=${result.appointmentId}&appointmentTime=${result.appointmentTime}`
        );
      } else {
        // console.log("not today");
        navigate(`/NotTodayAppointment?date=${result.date}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filterAppointment = async (day, doctorId) => {
    try {
      axios
        .get("http://localhost:8080/customer/loadAppointments", {
          params: {
            doctor: doctorId,
            date: day,
          },
        })
        .then((response) => {
          console.log(response.data);
          setAppointments(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
    console.log("Appointments", appointments);
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
        {/* <div className="w-[1000px] h-[50px] pl-40  mx-auto ">
          <ul className="flex gap-4 ">
            <li>Current</li>
            <li>Check</li>
            <li>Booking Now</li>
            <li>List</li>
          </ul>
        </div> */}
      </div>

      {/* Check Current Appointment Number */}
      <div className="max-w-[1000px] mx-auto mt-[100px] ">
        {/* <HeaderBox header="Current Appointment Number" />
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
        </div> */}

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
                      {/* {appConst.doctors.map((data) => (
                        <MenuItem value={data.name}>{data.name}</MenuItem>
                      ))} */}
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

        <HeaderBox header="Appointments List" />
        <div className="bg-white">
          <ValidatorForm
            className="md:flex w-[90%] m-auto py-4 "
            // onSubmit={(event) => {
            //   checkAppointment(id, event);
            // }}
            onError={() => null}
          >
            <Grid container spacing={2}>
              <Grid
                className="flex items-center"
                item
                lg={2}
                md={6}
                sm={12}
                xs={12}
              >
                <p className="text-black">Select Doctor</p>
              </Grid>
              <Grid
                // className="flex items-center"
                item
                lg={4}
                md={6}
                sm={12}
                xs={12}
              >
                <FormControl fullWidth>
                  <InputLabel>Select Doctor</InputLabel>
                  <Select
                    value={doctor}
                    label="Doctor"
                    size="small"
                    required={true}
                    // defaultValue={"Male"}
                    onChange={(e) => {
                      setDoctorId(e.target.value);
                      console.log("Key It", e.target.value);
                      if (date != null) {
                        filterAppointment(date, e.target.value);
                      }
                    }}
                  >
                    {allDoctors.map((data) => (
                      <MenuItem key={data.userId} value={data.userId}>
                        {data.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                className="flex items-center"
                item
                lg={2}
                md={6}
                sm={12}
                xs={12}
              >
                <p className="text-black">Select the Date</p>
              </Grid>
              <Grid
                // className="flex items-center"
                item
                lg={4}
                md={6}
                sm={12}
                xs={12}
              >
                <input
                  value={date}
                  className="w-[80%]"
                  onChange={(e) => {
                    setDate(e.target.value);
                    if (doctorId != null) {
                      filterAppointment(e.target.value, doctorId);
                    }
                  }}
                  type="date"
                />
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
        {/* Appointments Table */}
        <div className="w-full mx-auto p-4 px-8 my-2 bg-white font-bold rounded-sm ">
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableBody>
                <TableRow
                  sx={{
                    "& > *": {
                      borderBottom: "unset",
                      font: "bold",
                    },
                  }}
                >
                  <TableCell
                    className="font-bold"
                    align="center"
                    component="th"
                    scope="row"
                  >
                    Appointment ID
                  </TableCell>
                  <TableCell className="font-bold" align="center">
                    Patient Name
                  </TableCell>
                  <TableCell className="font-bold" align="center">
                    Age
                  </TableCell>
                  <TableCell className="font-bold" align="center">
                    Type
                  </TableCell>
                </TableRow>
                {appointments.map(
                  ({ appointmentId, name, age, videoConference }) => (
                    <TableRow
                      // onClick={() => setOpen(!open)}
                      sx={{
                        "& > *": { borderBottom: "unset", cursor: "pointer" },
                      }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {appointmentId}
                      </TableCell>
                      <TableCell align="center">{name}</TableCell>
                      <TableCell align="center">{age}</TableCell>
                      <TableCell align="center">
                        {" "}
                        {videoConference ? "Virtual" : "Physical"}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          // onClick={() => createZoomMeetingLink()}
                          variant="contained"
                        >
                          Start
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default ReceptionistHome;
