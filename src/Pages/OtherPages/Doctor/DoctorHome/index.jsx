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
import React, { useState } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import Button from "../../../../components/MainButton";
import Footer from "../../../../Lib/Footer";

/* Data for Appointments */
const APPOINTMENT_DETAILS = [
  {
    AppointmentID: 1544554,
    PName: "Pramodya Samarakoon",
    Gender: "Male",
    Age: 23,
    Prescription: "Download",
  },
  {
    AppointmentID: 1544554,
    PName: "Pramodya Samarakoon",
    Gender: "Male",
    Age: 23,
    Prescription: "Download",
  },
  {
    AppointmentID: 1544554,
    PName: "Pramodya Samarakoon",
    Gender: "Male",
    Age: 23,
    Prescription: "Download",
  },
];

function DoctorHome() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [doctor, setDoctor] = useState("fbd3c3c3");
  const [appointments, setAppointments] = useState([]);
  // console.log("Date", appointments);

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
          <div>
            <Button value="Account" />
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
