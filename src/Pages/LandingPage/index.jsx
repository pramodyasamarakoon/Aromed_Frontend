import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../Lib/NavBar";
import Hero from "../../Lib/Hero";
import HeaderBox from "../../components/HeaderBox";
// import Button from "../../components/MainButton";
// import { Button } from "@material-ui/core";
import Button from "@mui/material/Button";
import ServiceBox from "../../components/ServiceBox";
import ServiceBoxSmall from "../../components/ServiceBoxSmall";
import DoctorCard from "../../components/DoctorCard";
import Doc1 from "../../assets/Doc1.jpg";
import Doc2 from "../../assets/Doc2.jpg";
import Doc3 from "../../assets/Doc3.jpg";
import Doc4 from "../../assets/Doc4.jpg";
import Doc5 from "../../assets/Doc5.jpg";
import img3 from "../../assets/img3.jpg";
import DoctorMeet from "../../assets/DoctorMeet.jpg";
import VideoCall from "../../assets/VideoCall.jpg";
import Footer from "../../Lib/Footer";
import { landingPageValidation } from "../../Validations/LandingPageV";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { DoctorData } from "../../Lib/Const/DoctorData";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        onClick={() => setOpen(!open)}
        sx={{ "& > *": { borderBottom: "unset", cursor: "pointer" } }}
      >
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left">{row.gender}</TableCell>
        <TableCell align="left">{row.specialisation}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ marginX: 6, marginY: 1 }}>
              <Grid container spacing={1}>
                <Grid
                  // className="flex justify-center"
                  item
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <div>
                    <p className="text-back-blue font-semibold">
                      Qualifications...
                    </p>
                    <p className="text-black">{row.qualification}</p>
                  </div>
                </Grid>
                <Grid
                  // className="flex justify-center"
                  item
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <div>
                    <p className="text-back-blue font-semibold">
                      Experience...
                    </p>
                    <p className="text-black">{row.experience}</p>
                  </div>
                </Grid>
                <Grid
                  // className="flex justify-center"
                  item
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <div>
                    <p className="text-back-blue font-semibold">
                      Special Note...
                    </p>
                    <p className="text-black">{row.note}</p>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function LandingPage() {
  const [doctor, setDoctor] = useState([]);
  // const [filterDoctor, setFilterDoctor] = useState(doctor);
  const [id, setId] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchSpecial, setSearchSpecial] = useState("");
  const navigate = useNavigate();
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    loadDoctorData();
  }, []);

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

  // load doctor data
  const loadDoctorData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/user/allDoctors");
      setDoctor(response.data);
      console.log("Result", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = () => {
    axios
      .post("http://localhost:8080/user/login", { userName, password })
      .then((response) => {
        // window.alert("Successful");
        console.log(response.data);
        if (response.data == "Username doesn't Exist") {
          toast.error("Username doesnt Exist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else if (response.data == "Password doesn't match") {
          toast.error("Incorrect Password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else if (response.data == "Login Successful") {
          // toast.success("Login Successful", {
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "dark",
          // });
        }
      })
      .catch((error) => {
        // Handle login error
        window.alert("UnSuccessful");
      });
  };

  const search = (event) => {
    const matchedUsers = doctor.filter((user) => {
      return `${user.name}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setDoctor(matchedUsers);
    setSearchPhrase(event.target.value);
  };

  const searchSpecialization = (event) => {
    const matchedUsers = doctor.filter((user) => {
      return `${user.specialisation}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setDoctor(matchedUsers);
    setSearchSpecial(event.target.value);
  };

  const renderUsers = () => {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            <TableRow>
              <TableCell align="left">Doctor Name</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Specialization</TableCell>
            </TableRow>
            {doctor.map((user) => (
              <Row row={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <div className="bg-back-blue ">
      <NavBar />

      <Hero />

      {/* Check Your Appointment */}
      <div className="max-w-[1000px] mx-auto ">
        <HeaderBox header="Check Your Appointment" />
        <div>
          <p className={` p-4 pt-0 `}>
            Do you want to check about your previous Appointment? You can enter
            your Appointment ID and get updated about your order.
          </p>
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
        </div>

        {/* About Us */}
        <div id="1" className="">
          <HeaderBox header="About Us" />
          <div className=" h-full grid grid-cols-3 gap-4">
            <div className="col-span-2 flex flex-col items-center justify-center">
              <p className="px-8 hidden lg:block  ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
                aliquid assumenda. Labore minus nostrum, sunt aspernatur aliquid
                quam inventore eius nesciunt reiciendis! Ab, dicta a! Error
                totam quasi reprehenderit ut blanditiis minus. Eaque soluta est
                reiciendis. Consequuntur beatae sed a explicabo? Molestias dicta
                adipisci nihil, odio rerum esse facilis nam perferendis
                consequatur sed laboriosam earum accusantium consequuntur cum
                sapiente quibusdam asperiores magnam modi alias doloribus!
                Maiores, architecto laborum. Fugiat alias excepturi eos
                perferendis quae quo nulla vitae sit eius non in tempora
                blanditiis mollitia rem ullam sed, quisquam numquam quaerat
                minus molestiae! Dicta facere minima tempora aliquam praesentium
                explicabo harum temporibus quam necessitatibus molestiae? Nemo,
                soluta iste! Expedita consectetur aliquam itaque laboriosam
                debitis, error voluptas totam soluta?
              </p>
              <p className="lg:hidden px-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                rerum fuga, natus quod, iste maxime cum eius perspiciatis
                aperiam facere commodi quaerat asperiores vero doloremque nulla
                recusandae! Doloribus neque voluptates error itaque harum?
              </p>

              <Link to="videoConference" className="">
                {/* eslint-disable-next-line */}
                <p className="text-center py-2 md:py-8 lg:hidden cursor-pointer hover:text-light-blue ">
                  {" "}
                  Read More....{" "}
                </p>
              </Link>
            </div>
            <div>
              <img
                className="object-cover w-full max-h-[300px] "
                src={img3}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Services */}
        <div id="2">
          <HeaderBox header="Our Services" />
          {/* After lg */}
          <div className="lg:flex justify-evenly hidden   ">
            <ServiceBox
              icon="fontisto:doctor"
              topic="Meet a Doctor"
              path="customer/videoConference"
              // eslint-disable-next-line
              text="You can book an appointment Here. There are two options you have. You can meet a doctor physically or vertually."
            />
            <ServiceBox
              icon="ri:medicine-bottle-fill"
              topic="Order Medicine"
              path="orderMedicine"
              // eslint-disable-next-line
              text="You can order your medicine to your doorstep. Cash on delivery is now available. "
            />

            <ServiceBox
              icon="medical-icon:i-laboratory"
              topic="Laboratory Charges"
              path="LaboratoryFees"
              text="You can view our charges for the laboratory tests."
            />
          </div>

          {/* Before lg */}
          <div className="flex flex-col lg:hidden ">
            <ServiceBoxSmall
              icon="fontisto:doctor"
              topic="Meet a Doctor"
              path="videoConference"
            />
            <ServiceBoxSmall
              icon="ri:medicine-bottle-fill"
              topic="Order Medicine"
              path="orderMedicine"
            />
            <ServiceBoxSmall
              icon="medical-icon:i-laboratory"
              topic="Laboratory Charges"
              path="videoConference"
            />
          </div>
        </div>

        {/* Our Doctors */}
        <div>
          <HeaderBox header="Our Doctors" />
          <div className="bg-white">
            <div className="p-1">
              <ValidatorForm
                className="md:flex w-[95%] m-auto py-4 "
                // onSubmit={signIn}
                // onError={() => null}
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
                    <p className="text-black">Search Doctor By Name</p>
                    <TextValidator
                      // sx={{ width: "90%" }}
                      className="w-full md:mb-0  "
                      label="Search Doctor"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={searchPhrase}
                      onChange={(e) => {
                        search(e);
                      }}
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
                    <p className="text-black">
                      Search Doctor By Specialization
                    </p>
                    <TextValidator
                      // sx={{ width: "90%" }}
                      className="w-full md:mb-0  "
                      label="Search Speacialization"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={searchSpecial}
                      onChange={searchSpecialization}
                    />
                  </Grid>
                </Grid>
              </ValidatorForm>
            </div>
            <div>
              {/* <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Specialization</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {doctor.map((user) => (
                    <TableRow
                      // key={row.name}
                      // onClick={window.alert("Hiii")}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="right" component="th" scope="row">
                        {user.res}
                      </TableCell>
                      <TableCell align="left">{user.name}</TableCell>
                      <TableCell align="left">{user.special}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer> */}
            </div>
          </div>
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {renderUsers()}
          </div> */}
          <div className="bg-white">
            <div className="my-2">{renderUsers()}</div>
          </div>
        </div>

        {/* Select appointment method */}
        <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4 my-8">
          <div>
            <Link to="/customer/meetDoctor">
              {/* eslint-disable-next-line */}
              <div className="sm:col-start-2 mx-8 sm:mx-0 col-span-2 h-[126px] relative group cursor-pointer ">
                <img
                  className="w-full h-full object-cover "
                  src={DoctorMeet}
                  alt=""
                />
                <div className="bg-box-blue/60 h-full w-full absolute top-0 " />
                {/* eslint-disable-next-line */}
                <div className="bg-light-blue h-[50%] w-full absolute bottom-0 flex flex-col justify-center group-hover:h-full  group-hover:bg-light-blue/60 transition-[1000ms] ">
                  <h1 className=" text-xl text-center group-hover:font-bold ">
                    Meet a Doctor
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/customer/videoConference">
              {/* eslint-disable-next-line */}
              <div className="sm:col-start-4 mx-8 sm:mx-0 col-span-2 h-[126px] relative group cursor-pointer ">
                <img
                  className="w-full h-full object-cover "
                  src={VideoCall}
                  alt=""
                />
                <div className="bg-box-blue/60 h-full w-full absolute top-0 ">
                  {/* eslint-disable-next-line */}
                  <div className="bg-light-blue h-[50%] w-full absolute bottom-0 flex flex-col justify-center group-hover:h-full  group-hover:bg-light-blue/60 transition-[1000ms] ">
                    <h1 className=" text-xl text-center group-hover:font-bold ">
                      Video Conference
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Staff Area */}
        <div id="3">
          <HeaderBox header="Staff Area" />
          <div className="bg-white">
            <div className="p-2">
              <ValidatorForm
                className="md:flex w-[90%] m-auto py-4 "
                onSubmit={signIn}
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
                      label="Password"
                      type="password"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      validators={["required"]}
                      errorMessages={["This field is required"]}
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
                      Sign In
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
                        Forgot Password?
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </ValidatorForm>
              <div className="flex justify-center text-black">
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
