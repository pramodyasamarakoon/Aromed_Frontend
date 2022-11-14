import React from "react";
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
      <div className="max-w-[1240px] mx-auto mt-[100px] ">
        <HeaderBox header="Appointments" />
        {/* Filtering the date */}
        <div className="bg-box-blue/30 flex px-20 py-12 justify-center ">
          <p className="w-[160px] my-auto ">Select the Date</p>
          <input className="w-[60%]" type="date" />
        </div>
        {/* Appointments Table */}
        {/* Inner box */}
        <div className="w-full mx-auto pt-24 pb-16 px-8 my-8 bg-white font-bold rounded-xl ">
          {/* Bill items */}
          <div className="pb-16   ">
            <table className="table-auto w-full border-collapse border border-slate-500 ">
              <thead>
                <th className=" border border-slate-600 bg-slate-400 ">
                  Appointment ID
                </th>

                <th className=" border border-slate-600 bg-slate-400">
                  Patient Name
                </th>
                <th className=" border border-slate-600 bg-slate-400">
                  Gender
                </th>
                <th className=" border border-slate-600 bg-slate-400">Age</th>
                <th className=" border border-slate-600 bg-slate-400">
                  Prescription
                </th>
              </thead>
              <tbody>
                {APPOINTMENT_DETAILS.map(
                  ({ AppointmentID, PName, Gender, Age, Prescription }) => (
                    <tr className="trHover">
                      <td className="text-center border border-slate-700">
                        {AppointmentID}
                      </td>
                      <td className="text-center border border-slate-700">
                        {PName}
                      </td>
                      <td className="text-center border border-slate-700">
                        {Gender}
                      </td>
                      <td className="text-center border border-slate-700">
                        {Age}
                      </td>
                      <td className="text-center border border-slate-700">
                        {Prescription}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
          <Link to="/DoctorMeeting">
            <Button value="Start" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DoctorHome;
