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

// Data for Charges
const CHARGE_DETAILS = [
  {
    ID: 123456,
    Name: "Doctor 01 - Appointment Fee",
    Category: "Appointment Fee",
    Fee: 1600,
  },
  {
    ID: 123456,
    Name: "Doctor 01 - Appointment Fee",
    Category: "Appointment Fee",
    Fee: 1600,
  },
  {
    ID: 123456,
    Name: "Doctor 01 - Appointment Fee",
    Category: "Appointment Fee",
    Fee: 1600,
  },
  {
    ID: 123456,
    Name: "Doctor 01 - Appointment Fee",
    Category: "Appointment Fee",
    Fee: 1600,
  },
  {
    ID: 123456,
    Name: "Doctor 01 - Appointment Fee",
    Category: "Appointment Fee",
    Fee: 1600,
  },
];

// Data for Laboratory Charges
const LABORATORY_CHARGE_DETAILS = [
  {
    LID: 123456,
    LName: "Blood Test",
    LFee: 950,
  },
  {
    LID: 123456,
    LName: "Blood Test",
    LFee: 950,
  },
  {
    LID: 123456,
    LName: "Blood Test",
    LFee: 950,
  },
  {
    LID: 123456,
    LName: "Blood Test",
    LFee: 950,
  },
  {
    LID: 123456,
    LName: "Blood Test",
    LFee: 950,
  },
];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const deleteUser = (userId) => {
    console.log(userId);
    axios
      .delete(`http://localhost:8080/user/${userId}`)
      .then((response) => {
        console.log(response.data); // Successfully user removed
        // perform any additional actions you need after the user is deleted
        toast.success("Successfully User Removed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
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
    window.location.reload();
  };

  return (
    <React.Fragment>
      <TableRow
        // onClick={() => setOpen(!open)}
        sx={{ "& > *": { borderBottom: "unset", cursor: "pointer" } }}
      >
        <TableCell align="center" component="th" scope="row">
          {row.userId}
        </TableCell>
        <TableCell align="left" sx={{ paddingLeft: "20px" }}>
          {row.name}
        </TableCell>
        <TableCell align="center">{row.userType}</TableCell>
        <TableCell align="right">
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
        </TableCell>
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
                  <div className="flex justify-around">
                    <p className="text-back-blue font-semibold">NIC</p>
                    <p className="text-black">{row.nic}</p>
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
                  <div className="flex justify-around">
                    <p className="text-back-blue font-semibold">Address</p>
                    <p className="text-black">{row.address}</p>
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

function AdminCharges() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [users, setUsers] = useState([]);
  const [chargeType, setChargeType] = useState();
  const [name, setName] = useState();
  const [fee, setFee] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/user/allUsers")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const addUser = async () => {
    const charge = {
      chargeType: chargeType,
      name: name,
      fee: fee,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/user/addUser",
        charge
      );
      console.log("Add user Res", response);
      if (response.status === 200) {
        toast.success("User created successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        window.location.reload();
      }
    } catch (error) {
      console.error(error.response.data);
      if (error.response.data == "UserName already exists") {
        toast.error("UserName already exists", {
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
      if (error.response.data == "Password doesn't match") {
        toast.error("Password doesn't match", {
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
    }

    // window.alert(password);
  };

  const search = (event) => {
    const matchedUsers = users.filter((user) => {
      return `${user.name}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setUsers(matchedUsers);
    setSearchPhrase(event.target.value);
  };

  const renderUsers = () => {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            {users.map((user) => (
              <Row row={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
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
            <ValidatorForm
              className="md:flex w-[90%] m-auto py-4 "
              // onSubmit={signIn}
              // onError={() => null}
            >
              <Grid container spacing={1}>
                <Grid
                  className="flex items-center"
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                >
                  <p className="text-black">Search Charge By Name</p>
                </Grid>
                <Grid
                  // className="flex items-center"
                  item
                  lg={8}
                  md={8}
                  sm={12}
                  xs={12}
                >
                  <TextValidator
                    // sx={{ width: "90%" }}
                    className="w-full md:mb-0  "
                    label="Search Charge"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={searchPhrase}
                    onChange={search}
                  />
                </Grid>
              </Grid>
            </ValidatorForm>
          </div>
        </div>

        <div className="bg-white">
          <div className="my-2">{renderUsers()}</div>
        </div>

        {/* User Details */}
        <HeaderBox header="Add Charge" />
        <div className="bg-white">
          <div className="p-4">
            <ValidatorForm
              className="md:flex w-full m-auto py-4 "
              onSubmit={addUser}
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
                      defaultValue={"Male"}
                      onChange={(e) => {
                        setChargeType(e.target.value);
                      }}
                    >
                      <MenuItem value={"Doctor Charges"}>
                        Doctor Charges
                      </MenuItem>
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
                  className="flex justify-center"
                  item
                  lg={12}
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
