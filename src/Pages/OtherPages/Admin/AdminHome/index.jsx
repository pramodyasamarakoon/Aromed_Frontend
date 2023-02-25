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

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const deleteUser = () => {
    window.alert("Delete");
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
        {/* <TableCell align="right">
          <Button
            variant="outlined"
            sx={{
              padding: "2px 4px",
              fontSize: "0.8rem",
            }}
            onClick={(row) => console.log({ row })}
            // type="submit"
          >
            Remove
          </Button>
        </TableCell> */}
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

function AdminHome() {
  // const [user, setUser] = useState(UserData);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [userType, setUserType] = useState();
  const [name, setName] = useState();
  const [mNumber, setMNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [nic, setNic] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [note, setNote] = useState("");
  const [charge, setCharge] = useState();
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/user/allUsers")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const checkUserName = async () => {
    window.alert("Found", userName);
  };

  const addUser = async () => {
    if (password === confirmPassword) {
      console.log("password match");
      toast.success("User Successfully Registered!", {
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
        .post("http://localhost:8080/user/addUser", {
          userType: userType,
          name: name,
          mNumber: mNumber,
          email: email,
          address: address,
          gender: gender,
          age: age,
          nic: nic,
          userName: userName,
          password: password,
          specialisation: specialisation,
          qualification: qualification,
          experience: experience,
          note: note,
          charge: charge,
        })
        .then(function (response) {
          console.log(response);
          // setData(response);
          if (response.status === 201) {
            console.log("Data Successfully Added", response.data.userId);
            // setBillHandler(true);
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
        });
      // window.location.reload();
    } else {
      console.log("password does not match");
      toast.error("Password does not match!", {
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
                  <li className="Active">User Accounts</li>
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
        <div className="w-[1000px] h-[50px] pl-40  mx-auto ">
          <ul className="flex gap-4 ">
            <a href="#1">
              <li>User Accounts</li>
            </a>
            <a href="#2">
              <li>User Details</li>
            </a>
          </ul>
        </div>
      </div>

      {/* User Accounts */}
      <div id="1" className="max-w-[1000px] mx-auto mt-[150px] ">
        <HeaderBox header="User Accounts" />
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
                  <p className="text-black">Search User By Name</p>
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
                    label="Search User"
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
        <HeaderBox header="New User" />
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
                    <InputLabel>User Types</InputLabel>
                    <Select
                      value={userType}
                      // label="Gender"
                      size="small"
                      required={true}
                      defaultValue={"Male"}
                      onChange={(e) => {
                        setUserType(e.target.value);
                      }}
                    >
                      <MenuItem value={"Admin"}>Admin</MenuItem>
                      <MenuItem value={"Doctor"}>Doctor</MenuItem>
                      <MenuItem value={"Receptionist"}>Receptionist</MenuItem>
                      <MenuItem value={"Pharmacist"}>Pharmacist</MenuItem>
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
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
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
                    fullWidth
                    type="password"
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
                    label="Confirm Password"
                    fullWidth
                    type="password"
                    variant="outlined"
                    size="small"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      // componentDidMount();
                    }}
                    validators={["required"]}
                    errorMessages={["This field is required"]}
                  />
                </Grid>

                {userType === "Doctor" ? (
                  <Grid
                    container
                    spacing={1}
                    style={{ marginLeft: "1px", marginTop: "1px" }}
                  >
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
                        label="Other Specializations"
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={specialisation}
                        onChange={(e) => {
                          setSpecialisation(e.target.value);
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
                      <TextValidator
                        // sx={{ width: "90%" }}
                        className="w-full mb-4 md:mb-0  "
                        label="Qualifications"
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={qualification}
                        onChange={(e) => {
                          setQualification(e.target.value);
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
                      <TextValidator
                        // sx={{ width: "90%" }}
                        className="w-full mb-4 md:mb-0  "
                        label="Experience"
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={experience}
                        onChange={(e) => {
                          setExperience(e.target.value);
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
                      <TextValidator
                        // sx={{ width: "90%" }}
                        className="w-full mb-4 md:mb-0  "
                        label="Special Note"
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={note}
                        onChange={(e) => {
                          setNote(e.target.value);
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
                      <TextValidator
                        // sx={{ width: "90%" }}
                        className="w-full mb-4 md:mb-0  "
                        label="Charge"
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={charge}
                        onChange={(e) => {
                          setCharge(e.target.value);
                        }}
                        validators={["isNumber"]}
                        errorMessages={["Charge should be Numeric"]}
                      />
                    </Grid>
                  </Grid>
                ) : null}

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
                    onClick={checkUserName}
                    // type="submit"
                  >
                    Add User
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

export default AdminHome;
