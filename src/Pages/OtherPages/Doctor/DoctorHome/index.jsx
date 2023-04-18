import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import { Link, useNavigate } from "react-router-dom";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import MainButton from "../../../../components/MainButton";
import Button from "@mui/material/Button";
import Footer from "../../../../Lib/Footer";
import { useLocation } from "react-router-dom";

function DoctorHome() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [doctor, setDoctor] = useState();
  const [user, setUser] = useState();
  const [appointments, setAppointments] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  // console.log("Date", appointments);

  useEffect(() => {
    const userId = searchParams.get("userId");
    setDoctor(userId);
  }, []);

  useEffect(() => {
    const userId = searchParams.get("userId");
    loadUser(userId);
    console.log("User", doctor);
  }, [doctor]);

  // Load user
  const loadUser = async (userId) => {
    const response = await axios.get(
      `http://localhost:8080/user/getUser?userId=${userId}`
    );
    setUser(response.data);
  };

  // Filtering the appointments when select the date according to the doctor
  const filterAppointment = async (day) => {
    try {
      axios
        .get("http://localhost:8080/customer/loadAppointments", {
          params: {
            doctor: doctor,
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

  const createZoomMeetingLink = async () => {
    try {
      const response = await axios.post(
        "https://api.zoom.us/v2/users/me/meetings",
        {
          topic: "My Meeting",
          type: 2,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IlNGdXhjZDk3UVZ5SjlhcHU4a2N3bGciLCJleHAiOjE2ODIzNjEwNjAsImlhdCI6MTY4MTIxODM1MX0.XhHiu3TcJD8Kna9AM_I9l36Qxwt0Q_i6NZRYBFYt3oo"}`,
          },
        }
      );
      const meetingLink = response.data.join_url;
      console.log(meetingLink);
      // Do something with the meeting link, like display it to the user.
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  const navigateAccount = () => {
    navigate(`/AccountPage?userId=${doctor}`);
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
                <Link to="/DoctorHome">
                  <li className="Active">Appointments</li>
                </Link>
                <Link to="/DoctorAvailability">
                  <li>Availability</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="text-[18px] flex ">
            {user && <p>Welcome Back {user.name}</p>}
          </div>
          <div>
            <Button onClick={() => navigateAccount()} variant="contained">
              Account
            </Button>
          </div>
        </div>
      </div>

      {/* Check Current Appointment Number */}
      <div className="max-w-[1000px] mx-auto mt-[100px] ">
        <HeaderBox header="Appointments" />
        {/* Filtering the date */}
        {/* <div className="bg-box-blue/30 flex px-20 py-12 justify-center ">
          <p className="w-[160px] my-auto ">Select the Date</p>
          <input
            value={date}
            className="w-[60%]"
            onChange={(e) => {
              setDate(e.target.value);
              filterAppointment(e.target.value);
            }}
            type="date"
          />
        </div> */}
        <div className="bg-white">
          <ValidatorForm
            className="md:flex w-[80%] m-auto py-4 "
            // onSubmit={(event) => {
            //   checkAppointment(id, event);
            // }}
            onError={() => null}
          >
            <Grid container>
              <Grid
                className="flex items-center"
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
              >
                <p className="text-black">Select the Date</p>
              </Grid>
              <Grid
                // className="flex items-center"
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
              >
                <input
                  value={date}
                  className="w-[80%]"
                  onChange={(e) => {
                    setDate(e.target.value);
                    filterAppointment(e.target.value);
                  }}
                  type="date"
                />
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
        {/* Appointments Table */}
        {/* Inner box */}

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
                          onClick={() => createZoomMeetingLink()}
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
      <Footer />
    </div>
  );
}

export default DoctorHome;
