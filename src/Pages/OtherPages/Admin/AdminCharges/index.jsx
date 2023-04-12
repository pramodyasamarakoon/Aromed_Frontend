import {
  Collapse,
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
  Select,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import Footer from "../../../../Lib/Footer";

function AdminCharges() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [typeSearchPhrase, setTypeSearchPhrase] = useState("");
  const [users, setUsers] = useState([]);
  const [chargeType, setChargeType] = useState("Laboratory Charges");
  const [name, setName] = useState();
  const [fee, setFee] = useState(0);
  const [charges, setCharges] = useState([]);
  const [buttonHandle, setButtonHandle] = useState(true);
  const [clickedChargeId, setClickedChargeId] = useState();

  useEffect(() => {
    loadCharges();
  }, []);

  const rowClick = async (chargeId) => {
    setClickedChargeId(chargeId);
    try {
      axios
        .get(`http://localhost:8080/charges/getChargeById?chargeId=${chargeId}`)
        .then((res) => {
          let response = res.data;
          console.log("Charge", response);
          setChargeType(response.chargeType);
          setName(response.name);
          setFee(response.fee);
          setButtonHandle(false);
        })
        .catch((err) => {
          console.error(err);
          // Do something on error, e.g. show an error message
        });
    } catch (error) {
      console.log(error);
    }
  };

  const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow
          onClick={() => rowClick(row.chargeId)}
          sx={{ "& > *": { borderBottom: "unset", cursor: "pointer" } }}
        >
          <TableCell align="left" component="th" scope="row">
            {row.chargeId}
          </TableCell>
          <TableCell align="left" sx={{ paddingLeft: "20px" }}>
            {row.chargeType}
          </TableCell>
          <TableCell align="left">{row.name}</TableCell>
          <TableCell align="left">{row.fee}</TableCell>
          {/* <TableCell align="right">
            <Button
              variant="outlined"
              sx={{
                padding: "2px 4px",
                fontSize: "0.8rem",
              }}
              onClick={() => deleteUser(row.userId)}
              // type="submit"
            >
              Remove
            </Button>
          </TableCell> */}
        </TableRow>
      </React.Fragment>
    );
  };

  //  add charge
  const addCharge = async () => {
    try {
      axios
        .post(
          `http://localhost:8080/charges/addCharge?chargeType=${chargeType}&name=${name}&fee=${fee}`
        )
        .then((res) => {
          console.log("Charge", res.data);
          loadCharges();
          toast.success("Successfully Added the Charge", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          clearFields();
        })
        .catch((err) => {
          console.error(err);
          // Do something on error, e.g. show an error message
        });
    } catch (error) {
      console.log(error);
    }
  };

  // load all charges
  const loadCharges = async () => {
    try {
      axios
        .get("http://localhost:8080/charges/getAll")
        .then((res) => {
          console.log("All Charges", res.data);
          setCharges(res.data);
        })
        .catch((err) => {
          console.error(err);
          // Do something on error, e.g. show an error message
        });
    } catch (error) {
      console.log(error);
    }
  };

  //  search by name
  const searchByName = (event) => {
    const matchedUsers = charges.filter((charge) => {
      return `${charge.name}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setCharges(matchedUsers);
    setSearchPhrase(event.target.value);
  };

  //  search by type
  const searchByType = (event) => {
    const matchedUsers = charges.filter((charge) => {
      return `${charge.chargeType}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setCharges(matchedUsers);
    setTypeSearchPhrase(event.target.value);
  };

  const renderCharges = () => {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            <TableRow
              sx={{ "& > *": { borderBottom: "unset", cursor: "pointer" } }}
            >
              <TableCell align="left" component="th" scope="row">
                Charge Id
              </TableCell>
              <TableCell align="left" sx={{ paddingLeft: "20px" }}>
                Charge Type
              </TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Fee</TableCell>
            </TableRow>
            {charges.map((user) => (
              <Row row={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  // Update charges
  const updateCharges = async () => {
    try {
      axios
        .put(
          `http://localhost:8080/charges/updateChargeById?chargeId=${clickedChargeId}&chargeType=${chargeType}&name=${name}&fee=${fee}`
        )
        .then((res) => {
          console.log("Updated Charge", res.data);
          loadCharges();
          toast.success("Successfully Updated the Charge", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          clearFields();
        })
        .catch((err) => {
          console.error(err);
          // Do something on error, e.g. show an error message
        });
    } catch (error) {
      console.log(error);
    }
  };

  // Clear fields
  const clearFields = () => {
    setChargeType("Laboratory Charges");
    setName("");
    setFee(0);
    setButtonHandle(true);
    setClickedChargeId();
  };

  // delete charges
  const deleteChargeById = () => {
    axios
      .delete(
        `http://localhost:8080/charges/deleteChargeByChargeId?chargeId=${clickedChargeId}`
      )
      .then((response) => {
        console.log(response.data); // Successfully user removed
        toast.success("Successfully Charge Removed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        loadCharges();
        clearFields();
      })
      .catch((error) => {
        console.log(error.response.data); // Error
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
      });
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
                <Link to="/AdminHome">
                  <li>User Accounts</li>
                </Link>
                <Link to="/AdminCharges">
                  <li className="Active">Charges</li>
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
            <a href="#1">
              <li>Normal Charges</li>
            </a>
            <a href="#2">
              <li>Laboratory Charges</li>
            </a>
          </ul>
        </div>
      </div>

      {/* 01 Charges */}

      <div id="1" className="max-w-[1000px] mx-auto mt-[150px] ">
        <HeaderBox header="Charges" />
        {/* Filtering the date */}
        <div className="bg-white">
          <div className="p-2">
            <ValidatorForm className="md:flex w-[90%] m-auto py-2 ">
              <Grid container spacing={1}>
                <Grid
                  // className="flex items-center"
                  item
                  lg={6}
                  md={8}
                  sm={12}
                  xs={12}
                >
                  <TextValidator
                    // sx={{ width: "90%" }}
                    className="w-full md:mb-0  "
                    label="Search Charges By Name"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={searchPhrase}
                    onChange={searchByName}
                  />
                </Grid>
                <Grid
                  // className="flex items-center"
                  item
                  lg={6}
                  md={8}
                  sm={12}
                  xs={12}
                >
                  <TextValidator
                    // sx={{ width: "90%" }}
                    className="w-full md:mb-0  "
                    label="Search Charges By Charge Type"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={typeSearchPhrase}
                    onChange={searchByType}
                  />
                </Grid>
              </Grid>
            </ValidatorForm>
          </div>
        </div>

        <div className="bg-white">
          <div className="my-2">{renderCharges()}</div>
        </div>

        {/* User Details */}
        <HeaderBox header="Add Charge" />
        <div className="bg-white">
          <div className="p-4">
            <ValidatorForm
              className="md:flex w-full m-auto py-4 "
              onSubmit={addCharge}
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
                  <FormControl fullWidth>
                    <InputLabel>Charge Types</InputLabel>
                    <Select
                      value={chargeType}
                      // label="Gender"
                      size="small"
                      required={true}
                      onChange={(e) => {
                        setChargeType(e.target.value);
                      }}
                    >
                      <MenuItem value={"Laboratory Charges"}>
                        Laboratory Charges
                      </MenuItem>
                      <MenuItem value={"Deliver Charges - Short Run"}>
                        Deliver Charges - Short Run
                      </MenuItem>
                      <MenuItem value={"Deliver Charges - Long Run"}>
                        Deliver Charges - Long Run
                      </MenuItem>
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
                    label="Fee"
                    fullWidth
                    variant="outlined"
                    size="small"
                    type="number"
                    value={fee}
                    onChange={(e) => {
                      setFee(e.target.value);
                    }}
                    validators={["required"]}
                    errorMessages={["This field is required"]}
                  />
                </Grid>

                {/* Submit */}
                <Grid
                  className="flex justify-end"
                  item
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                ></Grid>
                {buttonHandle ? (
                  <Grid
                    className="flex justify-end"
                    item
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <Button
                      variant="contained"
                      // onClick={addUser}
                      type="submit"
                    >
                      Add Charge
                    </Button>
                  </Grid>
                ) : (
                  <Grid
                    className="flex justify-end"
                    item
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <Button
                      variant="contained"
                      onClick={updateCharges}
                      // type="submit"
                    >
                      Update
                    </Button>
                  </Grid>
                )}

                <Grid
                  className="flex justify-start"
                  item
                  lg={4}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <Button variant="contained" onClick={clearFields}>
                    Clear
                  </Button>
                </Grid>

                {buttonHandle ? null : (
                  <Grid
                    className="flex justify-end"
                    item
                    lg={2}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <Button
                      variant="contained"
                      onClick={deleteChargeById}
                      // type="submit"
                    >
                      Delete
                    </Button>
                  </Grid>
                )}
              </Grid>
            </ValidatorForm>
          </div>
          <div className="flex justify-center text-black">
            {/* <Popup trigger={<button> Trigger</button>} position="center">
              <div className="bg-back-blue p-4 w-full mx-auto">
                <p className="flex justify-center text-center">
                  Password Does not match!!!
                </p>
              </div>
            </Popup> */}
            {/* <Button onClick={notify}>Notify!</Button> */}
            <ToastContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminCharges;
