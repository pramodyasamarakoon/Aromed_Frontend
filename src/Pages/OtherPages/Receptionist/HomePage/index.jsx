import React from "react";
import { Link } from "react-router-dom";
// import NavBar from "../../Lib/NavBar";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import Button from "../../../../components/MainButton";
import CheckFormBox from "../../../../Lib/CheckFormBox";
import Footer from "../../../../Lib/Footer";

/* Data for Appointment List */
const APPOINTMENT_LIST = [
  {
    id: 15442,
    number: 15,
    pName: "Pramodya Samarakoon",
    nic: "990491402v",
    gender: "Male",
    age: 20,
    mobile: 770891382,
  },
  {
    id: 15442,
    number: 15,
    pName: "Pramodya Samarakoon",
    nic: "990491402v",
    gender: "Male",
    age: 20,
    mobile: 770891382,
  },
  {
    id: 15442,
    number: 15,
    pName: "Pramodya Samarakoon",
    nic: "990491402v",
    gender: "Male",
    age: 20,
    mobile: 770891382,
  },
  {
    id: 15442,
    number: 15,
    pName: "Pramodya Samarakoon",
    nic: "990491402v",
    gender: "Male",
    age: 20,
    mobile: 770891382,
  },
  {
    id: 15442,
    number: 15,
    pName: "Pramodya Samarakoon",
    nic: "990491402v",
    gender: "Male",
    age: 20,
    mobile: 770891382,
  },
];

/* Data for the doctor */
const DOCTOR_NAMES = [
  {
    name: "Mr.Mitchel Barly",
  },
  {
    name: "Mr.Mitchel Barly",
  },
  {
    name: "Mr.Mitchel Barly",
  },
  {
    name: "Mr.Mitchel Barly",
  },
];

function ReceptionistHome() {
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
                <Link to="/ReceptionistHome">
                  <li className="Active">Appointments</li>
                </Link>
                <Link to="/ReceptionistLab">
                  <li>Availability</li>
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
            <li>Current</li>
            <li>Check</li>
            <li>Booking Now</li>
            <li>List</li>
          </ul>
        </div>
      </div>

      {/* Check Current Appointment Number */}
      <div className="max-w-[1240px] mx-auto mt-[150px] ">
        <HeaderBox header="Current Appointment Number" />
        <div className="bg-box-blue/30 flex justify-between p-4 ">
          <div className="p-8 w-[50%] ">
            <select name="" id="" className="">
              {DOCTOR_NAMES.map(({ name }) => (
                <option value={`${name}`}>{name}</option>
              ))}
            </select>
          </div>
          {/* eslint-disable-next-line */}
          <div className=" w-[40%] flex flex-col justify-center text-center border-2 border-slate-800 bg-back-blue/30 ">
            <p className="text-6xl">15</p>
          </div>
        </div>

        {/* Check Appointments */}
        <HeaderBox header="Check Appointment" />
        <CheckFormBox
          pTag="Do you want to check about your previous order? You can enter your
          Appointment ID and get updated about your order."
          placehoder="Appointment ID"
          buttonName="Check"
          extratailwind=""
          linkTo="/WaitingForAppointment"
        />

        <HeaderBox header="Book Now" />
        <div className="bg-box-blue/20">
          <div className="p-4">
            <div className="w-full flex justify-between mt-4 ">
              <input type="text" placeholder="Name" className="w-[49%]" />
              <input
                type="number"
                name=""
                id=""
                placeholder="Mobile Number"
                className="w-[49%] "
              />
            </div>
            <div className="w-full flex justify-between mt-4">
              <input type="email" placeholder="E mail" className="w-[49%] " />
              <input
                type="text"
                name=""
                id=""
                placeholder="Address"
                className="w-[49%] "
              />
            </div>
            <div className="w-full flex justify-between mt-4 ">
              <select className="w-[49%]">
                <option value="gender">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                type="number"
                name=""
                id=""
                placeholder="Age"
                className="w-[49%] "
              />
            </div>
            <div className="w-full flex justify-between mt-4 ">
              <input
                type="text"
                placeholder="NIC Number"
                className="w-[49%] "
              />
              <select className="w-[49%] ">
                <option value="doctor">Select Doctor</option>
                <option value="doc01">Doc01</option>
                <option value="doc02">Doc02</option>
              </select>
            </div>
            <div className="w-full mt-4">
              <input
                type="date"
                placeholder="Select a Date"
                className="w-[49%] "
              />
            </div>
            <div className="w-full mt-4 pb-4">
              <input
                type="text"
                placeholder="If Any Message?"
                className="w-full "
              />
            </div>
          </div>
        </div>

        {/* Bill */}
        <div className="w-full h-auto py-20 my-12 bg-box-blue/20 ">
          {/* Bill inner box */}
          <div className="w-[340px] mx-auto pt-24 pb-16 px-8 bg-white font-bold rounded-xl ">
            {/* Bill items */}
            <div className="pb-16 border-b border-slate-500  ">
              <div className="flex justify-between ">
                <p className="text-black">Appointment Fee</p>
                <p className="text-black">600.00</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-black">Doctor Fee</p>
                <p className="text-black">1700.00</p>
              </div>
            </div>
            {/* Bill total */}
            <div className="flex justify-between pt-4 pb-12 font-semi-bold text-xl ">
              <p className="text-black">Total</p>
              <p className="text-lime-500">2300.00</p>
            </div>
            <Link to="/AppointmentConfirmation">
              <Button value="Confirm" />
            </Link>
          </div>
        </div>

        {/* Appointment List */}
        <HeaderBox header="Appointment List" />
        <div className="w-full h-auto py-20 my-12 bg-box-blue/20 px-2 ">
          <div className="flex w-full pb-12 ">
            <div className="w-full p-2">
              <p className="pb-2 px-4">Select the Doctor</p>
              <select name="" id="">
                {DOCTOR_NAMES.map(({ name }) => (
                  <option value={`${name}`}>{name}</option>
                ))}
              </select>
            </div>
            <div className="w-full p-2">
              <p className="pb-2 px-4">Select Date</p>
              <input type="date" />
            </div>
          </div>
          {/* Inner box */}
          <div className="w-full mx-auto pt-24 pb-16 px-8 bg-white font-bold rounded-xl ">
            {/* Bill items */}
            <div className="pb-16   ">
              <table className="table-auto w-full border-collapse border border-slate-500 ">
                <thead>
                  <th className=" border border-slate-600 bg-slate-400 ">ID</th>
                  <th className=" border border-slate-600 bg-slate-400 ">
                    Number
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Patient Name
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">NIC</th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Gender
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">Age</th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Mobile Number
                  </th>
                </thead>
                <tbody>
                  {APPOINTMENT_LIST.map(
                    ({ id, number, pName, nic, gender, age, mobile }) => (
                      <tr>
                        <td className="text-center border border-slate-700">
                          {id}
                        </td>
                        <td className="text-center border border-slate-700">
                          {number}
                        </td>
                        <td className="text-center border border-slate-700">
                          {pName}
                        </td>
                        <td className="text-center border border-slate-700">
                          {nic}
                        </td>
                        <td className="text-center border border-slate-700">
                          {gender}
                        </td>
                        <td className="text-center border border-slate-700">
                          {age}
                        </td>
                        <td className="text-center border border-slate-700">
                          {mobile}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReceptionistHome;
