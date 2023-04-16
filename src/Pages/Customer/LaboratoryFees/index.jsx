import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../components/HeaderBox";
import Footer from "../../../Lib/Footer";
import NavBar from "../../../Lib/NavBar";
import axios from "axios";
import Button from "@mui/material/Button";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

const LaboratoryFees = () => {
  const [labCharges, setLabCharges] = useState([]);
  useEffect(() => {
    loadLaboratoryFees();
  }, []);

  const loadLaboratoryFees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/charges/getChargesByChargeType?chargeType=Laboratory Charges"
      );
      setLabCharges(response.data);
      console.log("labCharges", labCharges);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-back-blue">
      <NavBar />
      <div className="max-w-[1000px] mx-auto pt-12 ">
        <HeaderBox header="Laboratory Charges" backIcon="true" backPath="/" />
        {/* LIST */}
        <div className="w-full h-auto py-5 my-5 bg-box-blue/20 ">
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
                      Name
                    </TableCell>
                    <TableCell className="font-bold" align="center">
                      Fee
                    </TableCell>
                  </TableRow>
                  {labCharges.map(({ name, fee }) => (
                    <TableRow
                      // onClick={() => setOpen(!open)}
                      sx={{
                        "& > *": { borderBottom: "unset", cursor: "pointer" },
                      }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell align="center">{fee}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="flex justify-center mt-4">
              <Link to={"/"}>
                <Button variant="contained">Back</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LaboratoryFees;
