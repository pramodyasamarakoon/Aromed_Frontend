import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderBox from "../../../components/HeaderBox";
// import Button from "../../../components/MainButton";
import Footer from "../../../Lib/Footer";
import NavBar from "../../../Lib/NavBar";
import * as appConst from "../../../Lib/Const/const";
import axios, * as others from "axios";
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

function VideoConference() {
  const [name, setName] = useState("");
  const [mNumber, setMNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [nic, setNic] = useState();
  const [doctor, setDoctor] = useState();
  const [pName, setPName] = useState();
  const [appointmentFee, setAppointmentFee] = useState(1500);
  const [date, setDate] = useState();
  const [message, setMessage] = useState();
  const [snackBar, setSnackBar] = useState(false);
  const videoConference = true;
  const [amount, setAmount] = useState(2300);
  // const [data, setData] = useState();
  const [billHandler, setBillHandler] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [tempAppointmentId, setTempAppointmentId] = useState();
  const [data, setData] = useState();
  const navigate = useNavigate();

  const onSubmit = async () => {
    // window.alert('Data Successfully Saved')
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
    setSnackBar(true);
    let res = await axios
      .post("http://localhost:8080/customer/videoConference", {
        name: name,
        pName: pName,
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
        console.log(response);
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

  const bookAnAppointment = async () => {
    toast.success("Appointment Placed Successfully!", {
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
      .post("http://localhost:8080/customer/meetAppointment", {
        appointmentId: tempAppointmentId,
        paymentStatus: paymentStatus,
        amount: amount,
      })
      .then(function (response) {
        // console.log(response.data.paymentStatus);
        navigate("/customer/AppointmentConfirmation");
        setData(response);
        // if(response.status === 201 ){
        //   console.log("Succesfull");
        // }
      })
      .catch(function (error) {
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

  const bookAnAppointmentWithPayment = async () => {
    setPaymentStatus(true);
    let res = await axios
      .post("http://localhost:8080/customer/meetAppointment", {
        appointmentId: tempAppointmentId,
        paymentStatus: paymentStatus,
        amount: amount,
      })
      .then(function (response) {
        console.log(response.data.paymentStatus);
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

  return (
    <div className="bg-back-blue">
      <NavBar />
      <div className="max-w-[1000px] mx-auto pt-28 ">
        {/* Introduction */}

        <HeaderBox
          header="Video Conference"
          backIcon=""
          extraTailwind="mt-0"
          backPath="/"
        />
        <div className="p-4">
          <p className="md:hidden">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            atque id fugiat recusandae doloribus obcaecati molestiae aut? Fugit
            iste nulla architecto doloremque eligendi suscipit fuga nobis dicta
            optio magni rem quo, qui ullam, vero incidunt repellat nam sapiente
            dolorem tenetur quod amet quis beatae?
          </p>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem
            impedit perspiciatis delectus officia architecto dolores incidunt
            voluptates sequi deleniti? Corporis necessitatibus sit molestiae
            error tempora nisi animi eum. Quaerat praesentium nihil, fugiat
            delectus quidem, a deserunt, quisquam eveniet animi numquam cumque
            qui molestias excepturi natus repudiandae ducimus officia aut amet.
            Repellendus saepe, alias debitis consectetur, excepturi cum
            voluptatibus laborum commodi quibusdam quae qui doloribus doloremque
            quia, provident ipsam aliquid nulla sint mollitia sit delectus
            voluptatum laboriosam magnam maiores. Suscipit accusantium odio
            dolorem asperiores consectetur, labore, illo, sit in quam cupiditate
            perferendis mollitia sapiente explicabo. Hic, dolores nostrum
            consectetur illo culpa asperiores?
          </p>
          <div className="flex justify-center pt-4 ">
            <p className="px-4">Or you can meet a doctor</p>
            <Link to="/customer/meetDoctor">
              <button
                className="p-4 py-0 rounded-lg bg-light-blue "
                type="button"
              >
                Click Here
              </button>
            </Link>
          </div>
        </div>

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
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <p className="text-black mx-2 text-[18px] font-semibold">
                    Gaurdian Details
                  </p>
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
                  // className="flex items-center"
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <p className="text-black mx-2 mt-1 font-semibold text-[18px]">
                    Patient Details
                  </p>
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
                    label="Name"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={pName}
                    onChange={(e) => {
                      setPName(e.target.value);
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
              <Grid container spacing={1}>
                <Grid
                  className="flex justify-center"
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Button variant="contained" onClick={bookAnAppointment}>
                    Pay on Door
                  </Button>
                </Grid>
                <Grid
                  className="flex justify-center"
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Button
                    variant="contained"
                    onClick={bookAnAppointmentWithPayment}
                  >
                    Pay by Card
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        ) : null}
      </div>
      {/* <div>
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-gray-500">
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">gray!</b> This is a gray alert - check it
            out!
          </span>
          <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
            <span>×</span>
          </button>
        </div>
      </div> */}
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default VideoConference;
