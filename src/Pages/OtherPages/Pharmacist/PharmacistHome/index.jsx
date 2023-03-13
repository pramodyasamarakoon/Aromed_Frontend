import React, { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import CheckFormBox from "../../../../Lib/CheckFormBox";
import Footer from "../../../../Lib/Footer";
import NavBar from "../../../../Lib/NavBar";
import {
  Button,
  Box,
  Paper,
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
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function PharmacistHome() {
  const [requestedOrders, setRequestedOrders] = useState([]);
  const [confirmedOrders, setConfirmedOrders] = useState([]);
  const [currentOrderId, setCurrentOrderId] = useState();
  const [medicine, setMedicine] = useState({
    medicine: "",
    price: 0,
  });
  const [billData, setBillData] = useState([]);
  const [total, setTotal] = useState(0);
  const [reqbillHandler, setReqBillHandler] = useState(false);
  const [plabillHandler, setPlaBillHandler] = useState(false);
  const [PlacedCurrentOrderId, setPlacedCurrentOrderId] = useState();
  const [placedBillData, setPlacedBillData] = useState([]);
  const [placedTotal, setPlacedTotal] = useState(0);

  useEffect(() => {
    loadRequestedOrders();
    loadConfirmedOrders();
  }, []);

  // load requested orders
  const loadRequestedOrders = async () => {
    let requestStatus = false;
    let placedStatus = false;
    let confirmedStatus = false;
    try {
      const response = await axios.get(
        `http://localhost:8080/order/getOrders?requestStatus=${requestStatus}&placedStatus=${placedStatus}&confirmedStatus=${confirmedStatus}`
      );
      setRequestedOrders(response.data);
      console.log("Result", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // load confirmed orders
  const loadConfirmedOrders = async () => {
    let requestStatus = true;
    let placedStatus = true;
    let confirmedStatus = false;
    try {
      const response = await axios.get(
        `http://localhost:8080/order/getOrders?requestStatus=${requestStatus}&placedStatus=${placedStatus}&confirmedStatus=${confirmedStatus}`
      );
      setConfirmedOrders(response.data);
      console.log("Confirmed Result", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //  Table Row onclick function
  const rowClick = async (orderId) => {
    setCurrentOrderId(orderId);
    getOrderByOrderId(orderId);
    setReqBillHandler(true);
  };

  // Palced Table Row onclick function
  const placedRowClick = async (orderId) => {
    setPlacedCurrentOrderId(orderId);
    getPlacedOrderByOrderId(orderId);
    setPlaBillHandler(true);
  };

  // Add medicines
  const addMedicineData = async () => {
    console.log(currentOrderId);
    if (currentOrderId !== null) {
      try {
        axios
          .post(
            `http://localhost:8080/order/addMedicine?orderId=${currentOrderId}`,
            medicine
          )
          .then((res) => {
            console.log(res.data);
            setMedicine({ medicine: "", price: 0 });
            getOrderByOrderId(currentOrderId);
            // setBillHandler(true);
          })
          .catch((err) => {
            console.error(err);
            // Do something on error, e.g. show an error message
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("First choose any order", {
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
    console.log("Bill", billData);
  };

  // Get order by order id
  const getOrderByOrderId = async (orderId) => {
    console.log("Order ID", orderId);
    try {
      axios
        .get(`http://localhost:8080/order/getOrderId?orderId=${orderId}`)
        .then((res) => {
          setBillData(res.data.medicineList);
          if (res.data.medicineList !== null) {
            console.log("Bill Data", billData);
            // set total
            let totalPrice = res.data.medicineList.reduce((total, data) => {
              return total + data.price + 500;
            }, 0);
            setTotal(totalPrice);
            console.log("Total", totalPrice);
          } else {
            setTotal(0);
          }
        })
        .catch((err) => {
          console.error(err);
          // Do something on error, e.g. show an error message
        });
    } catch (error) {
      console.log(error);
    }
  };

  // Get placed order by order id
  const getPlacedOrderByOrderId = async (orderId) => {
    try {
      axios
        .get(`http://localhost:8080/order/getOrderId?orderId=${orderId}`)
        .then((res) => {
          setPlacedBillData(res.data.medicineList);
          if (res.data.medicineList !== null) {
            console.log("placedBillData", placedBillData);
            // set total
            let totalPrice = res.data.medicineList.reduce((total, data) => {
              return total + data.price;
            }, 0);
            setPlacedTotal(totalPrice);
            console.log("Total", totalPrice);
          } else {
            setPlacedTotal(0);
          }
        })
        .catch((err) => {
          console.error(err);
          // Do something on error, e.g. show an error message
        });
    } catch (error) {
      console.log(error);
    }
  };

  // submit medicines
  const submitMedicines = async () => {
    if (total !== 0) {
      try {
        axios
          .put(
            `http://localhost:8080/order/updateMedicines?orderId=${currentOrderId}&total=${total}&requestStatus=true`
          )
          .then((res) => {
            loadRequestedOrders();
            toast.success("Successfully Submitted", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setReqBillHandler(false);
          })
          .catch((err) => {
            console.error(err);
            // Do something on error, e.g. show an error message
          });
      } catch (error) {
        console.log(error);
        toast.error(
          { error },
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      }
    } else {
      toast.error("Please add medicines", {
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

  // confirm order
  const placingOrder = async () => {
    try {
      axios
        .put(
          `http://localhost:8080/order/confirmingOrders?orderId=${PlacedCurrentOrderId}&confirmedStatus=true`
        )
        .then((res) => {
          loadConfirmedOrders();
          toast.success("Successfully Submitted", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setPlaBillHandler(false);
        })
        .catch((err) => {
          console.error(err);
          // Do something on error, e.g. show an error message
        });
    } catch (error) {
      console.log(error);
      toast.error(
        { error },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
  };

  return (
    <div className="bg-back-blue ">
      {/* NavBar  */}
      <div className="w-full  bg-back-blue  text-white fixed z-10 top-0 ">
        {/* Current NavBar */}
        <div className="max-w-[1200px] h-[100px] mx-auto px-4 flex items-center justify-between ">
          <div>
            <Logo />
          </div>
          <div className="w-[50%] text-[18px] ">
            <div className="uppercase">
              <ul className="flex gap-4 ">
                <Link to="/PharmacistHome">
                  <li className="Active">Requested Orders</li>
                </Link>
                <Link to="/DoctorAvailability">
                  <li>Placed Orders</li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <Button value="Account" />
          </div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto pt-14 ">
        <HeaderBox header="Requested Orders" />
        <div>
          <p className={` p-4 pt-0 `}>
            This is the list of the requested orders by the customers. You can
            click on one of this order and accept the request.
          </p>
        </div>

        {/* requested order table */}
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
                    Order ID
                  </TableCell>
                  <TableCell className="font-bold" align="center">
                    Customer Name
                  </TableCell>
                  <TableCell className="font-bold" align="center">
                    E-Mail
                  </TableCell>
                  <TableCell className="font-bold" align="center">
                    Prescription
                  </TableCell>
                </TableRow>
                {requestedOrders.map((data) => (
                  <TableRow
                    onClick={() => rowClick(data.orderMedicineId)}
                    sx={{
                      "& > *": { borderBottom: "unset", cursor: "pointer" },
                    }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {data.orderMedicineId}
                    </TableCell>
                    <TableCell align="center">{data.name}</TableCell>
                    <TableCell align="center">{data.email}</TableCell>
                    <TableCell align="center">
                      <Button variant="outlined" size="small">
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* Adding Medicine to the bill */}
        <div className="bg-box-blue/20 mt-8 mb-2 ">
          <Grid container>
            <Grid
              className="flex items-center justify-center py-4 pt-12"
              item
              lg={12}
              md={6}
              sm={12}
              xs={12}
            >
              <p className="px-4">Order ID :</p>
              <p className="px-4">{currentOrderId}</p>
            </Grid>
          </Grid>
          <div className="bg-white ">
            <div className="p-1">
              <ValidatorForm
                className="md:flex w-[95%] m-auto py-4 "
                onSubmit={() => addMedicineData()}
              >
                <Grid container spacing={1}>
                  <Grid item lg={5} md={6} sm={12} xs={12}>
                    <TextValidator
                      className="w-full md:mb-0  "
                      label="Medicine"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={medicine.medicine}
                      onChange={(e) =>
                        setMedicine({ ...medicine, medicine: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item lg={5} md={6} sm={12} xs={12}>
                    <TextValidator
                      type="number"
                      className="w-full md:mb-0  "
                      label="Amount"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={medicine.price}
                      onChange={(e) =>
                        setMedicine({ ...medicine, price: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid
                    className="flex justify-center"
                    item
                    lg={2}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <Button type="submit" variant="contained" size="small">
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </ValidatorForm>
            </div>
          </div>
        </div>

        {/* Bill */}
        {reqbillHandler ? (
          <div className="w-full h-auto py-4 my-12 mt-2 bg-box-blue/20 ">
            {/* Bill inner box */}
            <div className="w-[340px] mx-auto pt-8 px-8 bg-white font-bold rounded-xl ">
              {/* Bill items */}
              <div className="pb-8 border-b border-slate-500  ">
                {billData !== null
                  ? billData.map((data, index) => {
                      return (
                        <div key={index} className="flex justify-between ">
                          <p className="text-black">{data.medicine}</p>
                          <p className="text-black">{data.price}</p>
                        </div>
                      );
                    })
                  : null}
                <div className="flex justify-between ">
                  <p className="text-black">Delivery Charges</p>
                  <p className="text-black">500</p>
                </div>
              </div>
              {/* Bill total */}
              <div className="flex justify-between pt-4 pb-12 font-semi-bold text-xl ">
                <p className="text-black">Total</p>
                <p className="text-lime-500">{total}</p>
              </div>
              <div className="flex justify-center gap-2 px-4 pb-8 pt-4 ">
                <Button variant="contained" onClick={submitMedicines}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        ) : null}

        {/* Placed Orders */}
        <HeaderBox header="Placed Orders" />

        {/* Placed Order Table */}
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
                    Order ID
                  </TableCell>
                  <TableCell className="font-bold" align="center">
                    Customer Name
                  </TableCell>
                  <TableCell className="font-bold" align="center">
                    E-Mail
                  </TableCell>
                  <TableCell className="font-bold" align="center">
                    Total Bill
                  </TableCell>
                  <TableCell className="font-bold" align="center">
                    Payment Status
                  </TableCell>
                </TableRow>
                {confirmedOrders.map((data) => (
                  <TableRow
                    onClick={() => placedRowClick(data.orderMedicineId)}
                    sx={{
                      "& > *": { borderBottom: "unset", cursor: "pointer" },
                    }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {data.orderMedicineId}
                    </TableCell>
                    <TableCell align="center">{data.name}</TableCell>
                    <TableCell align="center">{data.email}</TableCell>
                    <TableCell align="center">{data.total}</TableCell>
                    <TableCell align="center">Done</TableCell>
                    {/* <TableCell align="center">
                      <Button variant="outlined" size="small">
                        Place Order
                      </Button>
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* Placed Bill */}
        {plabillHandler ? (
          <div className="w-full h-auto py-4 my-12 mt-2 bg-box-blue/20 ">
            {/* Bill inner box */}
            <div className="w-[340px] mx-auto pt-8 px-8 bg-white font-bold rounded-xl ">
              {/* Bill items */}
              <div className="pb-8 border-b border-slate-500  ">
                {placedBillData.map((data, index) => {
                  return (
                    <div key={index} className="flex justify-between ">
                      <p className="text-black">{data.medicine}</p>
                      <p className="text-black">{data.price}</p>
                    </div>
                  );
                })}
              </div>
              {/* Bill total */}
              {/* <div className="flex justify-between pt-4 pb-12 font-semi-bold text-xl ">
                <p className="text-black">Total</p>
                <p className="text-lime-500">{placedTotal}</p>
              </div> */}
              <div className="flex justify-center gap-2 px-4 pb-8 pt-4 ">
                <Button variant="contained" onClick={placingOrder}>
                  Confirm Order
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default PharmacistHome;
