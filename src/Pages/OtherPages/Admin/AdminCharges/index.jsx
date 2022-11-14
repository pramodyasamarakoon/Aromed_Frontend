import React from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import Button from "../../../../components/MainButton";
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

function AdminCharges() {
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
      <div id="1" className="max-w-[1240px] mx-auto mt-[150px] ">
        <HeaderBox header="Charges" />
        {/* Filtering the name */}
        <div className="bg-box-blue/30 flex px-20 py-12 justify-center ">
          <input className="w-[60%]" type="text" placeholder="Search by Name" />
          <Button value="Search" />
        </div>

        {/* Charges Table */}
        {/* Inner box */}
        <div className="bg-box-blue/30 mt-12 py-12 px-32 ">
          <div className="w-full mx-auto pt-24 pb-16 px-8 my-8 bg-white font-bold rounded-xl ">
            <div className="pb-16   ">
              <table className="table-auto w-full border-collapse border border-slate-500 ">
                <thead>
                  <th className=" border border-slate-600 bg-slate-400 ">
                    Fee ID
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Name
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Category
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">Fee</th>
                </thead>
                <tbody>
                  {CHARGE_DETAILS.map(({ ID, Name, Category, Fee }) => (
                    <tr className="trHover">
                      <td className="text-center border border-slate-700">
                        {ID}
                      </td>
                      <td className="text-center border border-slate-700">
                        {Name}
                      </td>
                      <td className="text-center border border-slate-700">
                        {Category}
                      </td>
                      <td className="text-center border border-slate-700">
                        {Fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex w-[500px] mx-auto ">
              <Button value="Add New" />
              <Button value="Update" />
              <Button value="Remove" />
            </div>
          </div>
        </div>

        {/* Fee Details */}
        <HeaderBox header="Fee Details" />
        <div className="bg-box-blue/20">
          <div className="p-4">
            {/* ID and Category */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">ID</p>
                <input type="number" className="w-full" />
              </div>
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Category</p>
                <select name="" id="" className="w-[75%] ">
                  <option value="">Appointment Fee</option>
                  <option value="">Delivery Fee - In the Town</option>
                  <option value="">Delivery Fee - Out </option>
                </select>
              </div>
            </div>
            {/* Name and Fee */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Name</p>
                <input type="email" className="w-full" />
              </div>
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Fee</p>
                <input type="number" className="w-[75%]" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-evenly w-[400px] mx-auto py-12 ">
              <Button value="Submit" />
            </div>
          </div>
        </div>
      </div>

      {/* 02 Laboratory Charges */}
      <div id="2" className="max-w-[1240px] mx-auto mt-[100px] ">
        <HeaderBox header="Laboratory Charges" />
        {/* Filtering the name */}
        <div className="bg-box-blue/30 flex px-20 py-12 justify-center ">
          <input className="w-[60%]" type="text" placeholder="Search by Name" />
          <Button value="Search" />
        </div>

        {/* Charges Table */}
        {/* Inner box */}
        <div className="bg-box-blue/30 mt-12 py-12 px-32 ">
          <div className="w-full mx-auto pt-24 pb-16 px-8 my-8 bg-white font-bold rounded-xl ">
            <div className="pb-16   ">
              <table className="table-auto w-full border-collapse border border-slate-500 ">
                <thead>
                  <th className=" border border-slate-600 bg-slate-400 ">
                    Fee ID
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Name
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">Fee</th>
                </thead>
                <tbody>
                  {LABORATORY_CHARGE_DETAILS.map(({ LID, LName, LFee }) => (
                    <tr className="trHover">
                      <td className="text-center border border-slate-700">
                        {LID}
                      </td>
                      <td className="text-center border border-slate-700">
                        {LName}
                      </td>
                      <td className="text-center border border-slate-700">
                        {LFee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex w-[500px] mx-auto ">
              <Button value="Add New" />
              <Button value="Update" />
              <Button value="Remove" />
            </div>
          </div>
        </div>

        {/* Fee Details */}
        <HeaderBox header="Fee Details" />
        <div className="bg-box-blue/20">
          <div className="p-4">
            {/* ID and Name */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">ID</p>
                <input type="number" className="w-full" />
              </div>
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Name</p>
                <input type="text" className="w-full" />
              </div>
            </div>
            {/* Fee and Fee */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Fee</p>
                <input type="number" className="w-full" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-evenly w-[400px] mx-auto py-12 ">
              <Button value="Submit" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminCharges;
