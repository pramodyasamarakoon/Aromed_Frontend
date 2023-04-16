// Add delete button to the user list
import React, { useEffect, useState } from "react";
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

function Dashboard() {
  useEffect(() => {}, []);

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

        <div className="max-w-[1000px] mx-auto mt-[50px] ">
          <Grid container spacing={1}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              Hello
            </Grid>
          </Grid>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
