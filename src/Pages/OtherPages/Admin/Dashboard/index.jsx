// Add delete button to the user list
import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Box,
  Collapse,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useReactToPrint } from "react-to-print";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
// import Button from "../../../../components/MainButton";
import Footer from "../../../../Lib/Footer";
// import { UserData } from "../../../../Lib/Const/UserData";
import Paper from "@mui/material/Paper";
import { MdDelete } from "react-icons/md";
import Popup from "reactjs-popup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { TiDelete } from "react-icons/ti";
import ReactDOM from "react-dom";
import RevenueChart from "./RevenueChart";

function Dashboard() {
  useEffect(() => {
    loadRevenue();
    loadTotalRevenue();
  }, []);
  const [revenue, setRevenue] = useState([]);
  const [lastWeek, setLastWeek] = useState([]);
  const [totalRevenue, setTotalrevenue] = useState(0);
  const [totalAmountThisYear, setTotalAmountThisYear] = useState(0);
  const [totalAmountThisMonth, setTotalAmountThisMonth] = useState(0);
  const [totalAmountThisWeek, setTotalAmountThisWeek] = useState(0);
  const [yearCount, setYearCount] = useState(0);
  const [monthCount, setMonthCount] = useState(0);
  const [weekCount, setWeekCount] = useState(0);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  //   Load total appointment REVENUE
  const loadRevenue = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/customer/total-amount-per-day`
      );
      const result = response.data;

      //   Total Appointment Revenue
      const totalRevenue = Object.values(result).reduce(
        (acc, curr) => acc + curr,
        0
      );
      setTotalrevenue(totalRevenue);

      // Appointment Revenue list for last 7 days
      const today = new Date();
      const last7Days = [...Array(7)].map((_, index) => {
        const date = new Date(today);
        date.setDate(date.getDate() - index);
        return date.toISOString().split("T")[0];
      });
      setLastWeek(last7Days);
      const revenue = [];
      last7Days.forEach((day) => {
        if (result.hasOwnProperty(day)) {
          revenue.push(result[day]);
        } else {
          revenue.push(0);
        }
      });
      setRevenue(revenue);
    } catch (error) {
      console.log(error);
    }
  };

  //   Load appointment REVENUE
  const loadTotalRevenue = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/customer/total-amount"
      );
      const result = response.data;
      setTotalAmountThisYear(result.TotalAmountThisYear);
      setTotalAmountThisMonth(result.TotalAmountThisMonth);
      setTotalAmountThisWeek(result.TotalAmountThisWeek);
      setYearCount(result.AppointmentCountThisYear);
      setMonthCount(result.AppointmentCountThisMonth);
      setWeekCount(result.AppointmentCountThisWeek);
      console.log("Total result", result);
    } catch (error) {
      console.log(error);
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
                <Link to="/Dashboard">
                  <li className="Active">Dashboard</li>
                </Link>
                <Link to="/AdminHome">
                  <li>User Accounts</li>
                </Link>
                <Link to="/AdminCharges">
                  <li>Charges</li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <Button value="Account" />
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <div
        className="max-w-[1000px] mx-auto mt-[100px] pt-[50px]"
        ref={componentRef}
      >
        <Grid container spacing={0} className="">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="m-1 bg-white p-4 text-2xl font-bold rounded-sm flex justify-center">
              <p className="text-black">Appointment Revenue Data</p>
            </div>
          </Grid>
          {/* Appointment Count List */}
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className="m-1 bg-white p-4 pt-6 rounded-sm flex justify-between">
              <p className="text-black pt-1 ">Total Appointment Count</p>
              <p className="text-black font-bold text-2xl">{yearCount + 3}</p>
            </div>
            <div className="m-1 bg-white p-4 pt-6 rounded-sm flex justify-between">
              <p className="text-black pt-1 ">
                Total Appointment Count for This Year
              </p>
              <p className="text-black font-bold text-2xl">{yearCount}</p>
            </div>
            <div className="m-1 bg-white p-4 pt-6 rounded-sm flex justify-between">
              <p className="text-black pt-1 ">
                Total Appointment Count for This Month
              </p>
              <p className="text-black font-bold text-2xl">{monthCount}</p>
            </div>
            <div className="m-1 bg-white p-4 pt-6 rounded-sm flex justify-between">
              <p className="text-black pt-1 ">
                Total Appointment Count for This Week
              </p>
              <p className="text-black font-bold text-2xl">{weekCount}</p>
            </div>
          </Grid>
          {/* Appointment revenue List */}
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className="m-1 bg-white p-4 pt-6 rounded-sm flex justify-between">
              <p className="text-black pt-1 ">Total Appointment Revenue</p>
              <p className="text-black font-bold text-2xl">{totalRevenue}</p>
            </div>
            <div className="m-1 bg-white p-4 pt-6 rounded-sm flex justify-between">
              <p className="text-black pt-1 ">
                Total Appointment Revenue for This Year
              </p>
              <p className="text-black font-bold text-2xl">
                {totalAmountThisYear}
              </p>
            </div>
            <div className="m-1 bg-white p-4 pt-6 rounded-sm flex justify-between">
              <p className="text-black pt-1 ">
                Total Appointment Revenue for This Month
              </p>
              <p className="text-black font-bold text-2xl">
                {totalAmountThisMonth}
              </p>
            </div>
            <div className="m-1 bg-white p-4 pt-6 rounded-sm flex justify-between">
              <p className="text-black pt-1 ">
                Total Appointment Revenue for This Week
              </p>
              <p className="text-black font-bold text-2xl">
                {totalAmountThisWeek}
              </p>
            </div>
          </Grid>
          {/* Appointment revenue chart for last 7 days */}
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="m-1 bg-white p-4 rounded-sm">
              <RevenueChart
                height="400px"
                type="line"
                xData={lastWeek}
                yData={revenue}
              ></RevenueChart>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* Generate Report */}
      <div className="max-w-[1000px] mx-auto ">
        <div className="flex justify-end my-4">
          <Button
            className=""
            variant="contained"
            color="primary"
            onClick={handlePrint}
          >
            Generate Report
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
