import React from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import Button from "../../../../components/MainButton";
import SuperButton from "../../../../components/SuperButton";
import Footer from "../../../../Lib/Footer";

function DoctorAvailability() {
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

      {/* Select Dates */}
      <div className="max-w-[1240px] mx-auto mt-[100px] ">
        <HeaderBox header="Availability for this week" />
        <div className="bg-box-blue/30 py-12 ">
          <div className="flex justify-evenly ">
            <div className="w-[800px] px-8 py-8 text-xl bg-box-blue rounded-lg ">
              <table className="auto w-full ">
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Monday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Tuesday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Wednesday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Thursday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Friday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Saturday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Sunday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
              </table>
              <Button extraTailwind="mt-12" value="Save" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-box-blue/30 mt-12 py-12 px-32 ">
          <div className="w-full mx-auto pt-24 pb-16 px-8 my-8 bg-white font-bold rounded-xl ">
            <div className="pb-16   ">
              <table className="table-auto w-full border-collapse border border-slate-500 ">
                <thead>
                  <th className=" border border-slate-600 bg-slate-400 ">
                    Date
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Availability
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>Video Conference</td>
                  </tr>
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

export default DoctorAvailability;
