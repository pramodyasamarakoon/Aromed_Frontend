import React from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import Button from "../../../../components/MainButton";
import Footer from "../../../../Lib/Footer";

const USER_ACCOUNT_DETAILS = [
  {
    UserID: 123456,
    Name: "Pramodya Samarakoon",
    Role: "Receptionist",
  },
  {
    UserID: 123456,
    Name: "Pramodya Samarakoon",
    Role: "Receptionist",
  },
  {
    UserID: 123456,
    Name: "Pramodya Samarakoon",
    Role: "Receptionist",
  },
  {
    UserID: 123456,
    Name: "Pramodya Samarakoon",
    Role: "Receptionist",
  },
  {
    UserID: 123456,
    Name: "Pramodya Samarakoon",
    Role: "Receptionist",
  },
];

function AdminHome() {
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
      <div id="1" className="max-w-[1240px] mx-auto mt-[150px] ">
        <HeaderBox header="User Accounts" />
        {/* Filtering the date */}
        <div className="bg-box-blue/30 flex px-20 py-12 justify-center ">
          <input className="w-[60%]" type="text" placeholder="Search by Name" />

          <Button value="Search" />
        </div>

        {/* Appointments Table */}
        {/* Inner box */}
        <div className="bg-box-blue/30 mt-12 py-12 px-32 ">
          <div className="w-full mx-auto pt-24 pb-16 px-8 my-8 bg-white font-bold rounded-xl ">
            {/* Bill items */}
            <div className="pb-16   ">
              <table className="table-auto w-full border-collapse border border-slate-500 ">
                <thead>
                  <th className=" border border-slate-600 bg-slate-400 ">
                    User ID
                  </th>

                  <th className=" border border-slate-600 bg-slate-400">
                    Name
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Role
                  </th>
                </thead>
                <tbody>
                  {USER_ACCOUNT_DETAILS.map(({ UserID, Name, Role }) => (
                    <tr className="trHover">
                      <td className="text-center border border-slate-700">
                        {UserID}
                      </td>
                      <td className="text-center border border-slate-700">
                        {Name}
                      </td>
                      <td className="text-center border border-slate-700">
                        {Role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex w-[400px] mx-auto ">
              <Button value="Add New" />
              <Button value="Remove" />
            </div>
          </div>
        </div>

        {/* User Details */}
        <HeaderBox header="User Details" />
        <div id="2" className="bg-box-blue/20">
          <div className="p-4">
            {/* Name */}
            <div className="w-full flex justify-between my-2 ">
              <p className="my-auto w-[175px] pl-12 ">Name</p>
              <input type="text" className="w-full" />
            </div>
            {/* Age and Gender */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Age</p>
                <input type="number" className="w-full" />
              </div>
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Gender</p>
                <input type="text" className="w-[75%]" />
              </div>
            </div>
            {/* Email and Mobile */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">E mail</p>
                <input type="email" className="w-full" />
              </div>
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Mobile</p>
                <input type="number" className="w-[75%]" />
              </div>
            </div>
            {/* User Name and Password */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">User Name</p>
                <input type="text" className="w-full" />
              </div>
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Password</p>
                <input type="password" className="w-[75%]" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-evenly w-[400px] mx-auto py-12 ">
              <Button value="Add" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminHome;
