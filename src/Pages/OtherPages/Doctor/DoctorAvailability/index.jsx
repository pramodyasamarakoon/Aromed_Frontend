import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import Button from "@mui/material/Button";
import Footer from "../../../../Lib/Footer";
import {
  Grid,
  Modal,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import axios from "axios";
import { ValidatorForm } from "react-material-ui-form-validator";
import { toast } from "react-toastify";

function DoctorAvailability() {
  const moment = require("moment");
  const [doctor, setDoctor] = useState("fbd3c3c3");
  const [availabilities, setAvailabilities] = useState([]);
  const [value, setValue] = useState("On Leave");
  const [popUpData, setPopUpData] = useState({
    open: false,
    date: null,
    availability: null,
    id: null,
  });
  const [id, setId] = useState();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    async function fetchAvailabilities() {
      // get availability for next 3 weeks
      try {
        const response = await axios.get(
          "http://localhost:8080/doctorAvailability/getAvailability",
          {
            params: {
              doctorId: doctor,
              startDate: "2023-04-19",
            },
          }
        );
        setAvailabilities(response.data);
        console.log("Ava Res", response.data);
      } catch (error) {
        console.error("Error", error);
      }
    }
    fetchAvailabilities();
  }, []);

  // when click on the date this will update
  const availabilityPopUp = (open, date, availability, id) => {
    setPopUpData({
      open: open,
      date: date,
      availability: availability,
      id: id,
    });
  };

  // Availability Update PUT method and reload
  const updateAvailability = async (availabilityId, availability) => {
    console.log("availabilityId", availabilityId);
    try {
      const response = await axios.put(
        `http://localhost:8080/doctorAvailability/updateAvailability?availabilityId=${availabilityId}&availability=${availability}`
      );
      console.log("Result When Update", response.data);

      loadData();
      setPopUpData({
        open: false,
      });
    } catch (error) {
      console.log(error);
      toast.error("Error", {
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
  };

  // load availability data
  const loadData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/doctorAvailability/getAvailability",
        {
          params: {
            doctorId: doctor,
          },
        }
      );
      setAvailabilities(response.data);
      console.log("Ava Res", response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="bg-back-blue  ">
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
                  <li>Appointments</li>
                </Link>
                <Link to="/DoctorAvailability">
                  <li className="Active">Availability</li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <Button value="Account" />
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="max-w-[1000px] mx-auto mt-[100px] ">
        <HeaderBox header="Availability" />
        <div className="bg-box-blue/50">
          <Grid spacing={2} container>
            <Grid
              className="flex items-center justify-center p-4"
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <h1 className="mx-8">
                You can set the availability here. For the next week, you cannot
                edit your availability. It has already been released to
                customers for bookings. You can set your availability for the
                following two weeks here.
              </h1>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="p-4">
            {availabilities.map((availability, index) =>
              index < 7 ? (
                <Grid
                  key={availability.availabilityId}
                  className="flex w-full "
                  item
                  lg={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <div
                    className="w-full h-full items-center text-center bg-back-blue/50"
                    style={{ border: "2px solid #040C18" }}
                  >
                    <p className="pt-2" style={{ fontSize: "15px" }}>
                      {months[parseInt(availability.month) - 1]}
                    </p>
                    <p className="" style={{ fontSize: "40px" }}>
                      {availability.date}
                    </p>
                    <p className="p-2" style={{ fontSize: "15px" }}>
                      {availability.availability}
                    </p>
                  </div>
                </Grid>
              ) : (
                <Grid
                  key={availability.availabilityId}
                  className="flex w-full cursor-pointer "
                  item
                  lg={2}
                  alignItems="center"
                  justifyContent="center"
                  onClick={() =>
                    availabilityPopUp(
                      true,
                      availability.fullDate,
                      availability.availability,
                      availability.id
                    )
                  }
                >
                  <div className="w-full h-full items-center text-center bg-back-blue">
                    <p className="pt-2" style={{ fontSize: "15px" }}>
                      {months[parseInt(availability.month) - 1]}
                    </p>
                    <p className="" style={{ fontSize: "40px" }}>
                      {availability.date}
                    </p>
                    <p className="p-2" style={{ fontSize: "15px" }}>
                      {availability.availability}
                    </p>
                  </div>
                </Grid>
              )
            )}
          </Grid>

          {/* Pop Up */}
          <div
            className={`fixed z-10  w-full  h-full  ${
              popUpData.open ? "flex" : "hidden"
            } flex-col justify-center  bg-back-blue`}
          >
            <div
              className={`fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px]  h-auto py-4  m-auto flex-col justify-center  bg-box-blue rounded-sm`}
            >
              <Grid container className="p-4">
                <Grid
                  className="flex items-center justify-center p-2"
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <p className="justify-center text-xl ">Availability</p>
                </Grid>
                <Grid
                  className="flex items-center justify-center pb-2"
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <p className="justify-center ">{popUpData.date}</p>
                </Grid>
                <ValidatorForm
                  onSubmit={() => {
                    updateAvailability(popUpData.id, popUpData.availability);
                  }}
                  className=" mx-auto py-4"
                >
                  <Grid
                    className="flex items-center justify-center pb-4"
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <FormControl component="fieldset">
                      {/* <FormLabel component="legend">Gender</FormLabel> */}
                      <RadioGroup
                        // aria-label="gender"
                        row
                        name="Availability"
                        value={popUpData.availability}
                        onChange={(e) => setValue(e.target.value)}
                      >
                        <FormControlLabel
                          value="On Leave"
                          control={<Radio size="small" color="primary" />}
                          display="inline"
                          label="On Leave"
                          onChange={(e) =>
                            updateAvailability(popUpData.id, e.target.value)
                          }
                        />
                        <FormControlLabel
                          value="Virtual"
                          control={<Radio size="small" color="primary" />}
                          display="inline"
                          label="Virtual"
                          onChange={(e) =>
                            updateAvailability(popUpData.id, e.target.value)
                          }
                        />
                        <FormControlLabel
                          value="Physical"
                          control={<Radio size="small" color="primary" />}
                          display="inline"
                          label="Physical"
                          onChange={(e) =>
                            updateAvailability(popUpData.id, e.target.value)
                          }
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  {/* <Grid
                    className="flex items-center justify-evenly pb-2"
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <Button
                      onClick={setPopUpData({
                        open: false,
                      })}
                      variant="contained"
                    >
                      Cancel
                    </Button>
                  </Grid> */}
                </ValidatorForm>
              </Grid>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DoctorAvailability;
