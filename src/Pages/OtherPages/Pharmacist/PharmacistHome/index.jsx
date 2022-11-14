import React from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../../components/HeaderBox";
import Button from "../../../../components/MainButton";
import CheckFormBox from "../../../../Lib/CheckFormBox";
import Footer from "../../../../Lib/Footer";

/* Data for Appointment List */
const APPOINTMENT_LIST = [
  {
    id: 15442,
    cName: "Pramodya Samarakoon",
    Email: "pramodyasamarakoon2516@gmail.com",
    mobile: 770891382,
    prescription: "Download",
    paymentStatus: "Paid",
  },
  {
    id: 15442,
    cName: "Pramodya Samarakoon",
    Email: "pramodyasamarakoon2516@gmail.com",
    mobile: 770891382,
    prescription: "Download",
    paymentStatus: "On Door",
  },
  {
    id: 15442,
    cName: "Pramodya Samarakoon",
    Email: "pramodyasamarakoon2516@gmail.com",
    mobile: 770891382,
    prescription: "Download",
    paymentStatus: "Paid",
  },
  {
    id: 15442,
    cName: "Pramodya Samarakoon",
    Email: "pramodyasamarakoon2516@gmail.com",
    mobile: 770891382,
    prescription: "Download",
    paymentStatus: "On Door",
  },
  {
    id: 15442,
    cName: "Pramodya Samarakoon",
    Email: "pramodyasamarakoon2516@gmail.com",
    mobile: 770891382,
    prescription: "Download",
    paymentStatus: "Paid",
  },
];

function PharmacistHome() {
  return (
    <div className="bg-back-blue ">
      {/* <NavBar/> */}

      <div className="max-w-[1240px] mx-auto ">
        <HeaderBox header="Requested Orders" />
        <CheckFormBox
          placehoder="Order ID"
          buttonName="Check"
          linkTo="/PharmacistHome"
        />

        {/* Order Table */}
        <div className="bg-box-blue/30 p-4 my-8 ">
          <div className="w-full mx-auto pt-24 pb-16 px-8 bg-white font-bold rounded-xl ">
            {/* Bill items */}
            <div className="pb-16   ">
              <table className="table-auto w-full border-collapse border border-slate-500 ">
                <thead>
                  <th className=" border border-slate-600 bg-slate-400 ">
                    Order ID
                  </th>

                  <th className=" border border-slate-600 bg-slate-400">
                    Customer Name
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">
                    E mail
                  </th>

                  <th className=" border border-slate-600 bg-slate-400">
                    Mobile Number
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Prescription
                  </th>
                </thead>
                <tbody>
                  {APPOINTMENT_LIST.map(
                    ({ id, cName, Email, mobile, prescription }) => (
                      <tr>
                        <td className="text-center border border-slate-700">
                          {id}
                        </td>

                        <td className="text-center border border-slate-700">
                          {cName}
                        </td>
                        <td className="text-center border border-slate-700">
                          {Email}
                        </td>

                        <td className="text-center border border-slate-700">
                          {mobile}
                        </td>
                        <td className="text-center border border-slate-700">
                          {prescription}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Adding Lab Reports */}
        <div className="bg-box-blue/20 pb-12 ">
          <div className="py-8 px-4 pb-12 ">
            <div className="flex w-full gap-2 ">
              <input type="number" placeholder="Order ID" className="w-[50%]" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Medicine"
                className="w-[120%]"
              />
              <input
                type="number"
                name=""
                id=""
                placeholder="Price"
                className="w-[60%]"
              />
            </div>
          </div>
          <Button extraTailwind="mb-8" value="Add" />
        </div>

        {/* Bill */}
        <div className="w-full h-auto py-20 my-12 bg-box-blue/20 ">
          {/* Bill inner box */}
          <div className="w-[340px] mx-auto pt-24 pb-16 px-8 bg-white font-bold rounded-xl ">
            {/* Bill items */}
            <div className="pb-16 border-b border-slate-500  ">
              <div className="flex justify-between ">
                <p className="text-black">Medicine</p>
                <p className="text-black">600.00</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-black">Medidine</p>
                <p className="text-black">1700.00</p>
              </div>
            </div>
            {/* Bill total */}
            <div className="flex justify-between pt-4 pb-12 font-semi-bold text-xl ">
              <p className="text-black">Total</p>
              <p className="text-lime-500">2300.00</p>
            </div>
            <div className="flex justify-between gap-2 px-4 ">
              <Link to="/">
                <Button extraTailwind="min-w-[80px]" value="Confirm" />
              </Link>
              <Link to="/">
                <Button extraTailwind="min-w-[80px]" value="Cancel" />
              </Link>
            </div>
          </div>
        </div>

        {/* Placed Orders */}
        <HeaderBox header="Placed Orders" />
        <CheckFormBox
          placehoder="Order ID"
          buttonName="Check"
          linkTo="/PharmacistHome"
        />
        {/* Order Table */}
        <div className="bg-box-blue/30 p-4 my-8 ">
          <div className="w-full mx-auto pt-24 pb-16 px-8 bg-white font-bold rounded-xl ">
            {/* Bill items */}
            <div className="pb-16   ">
              <table className="table-auto w-full border-collapse border border-slate-500 ">
                <thead>
                  <th className=" border border-slate-600 bg-slate-400 ">
                    Order ID
                  </th>

                  <th className=" border border-slate-600 bg-slate-400">
                    Customer Name
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">
                    E mail
                  </th>

                  <th className=" border border-slate-600 bg-slate-400">
                    Mobile Number
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Payment Status
                  </th>
                </thead>
                <tbody>
                  {APPOINTMENT_LIST.map(
                    ({ id, cName, Email, mobile, paymentStatus }) => (
                      <tr>
                        <td className="text-center border border-slate-700">
                          {id}
                        </td>

                        <td className="text-center border border-slate-700">
                          {cName}
                        </td>
                        <td className="text-center border border-slate-700">
                          {Email}
                        </td>

                        <td className="text-center border border-slate-700">
                          {mobile}
                        </td>
                        <td className="text-center border border-slate-700">
                          {paymentStatus}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="w-full h-auto py-20 my-12 bg-box-blue/20 ">
          {/* Bill inner box */}
          <div className="w-[340px] mx-auto pt-24 pb-16 px-8 bg-white font-bold rounded-xl ">
            {/* Bill items */}
            <div className="pb-16 border-b border-slate-500  ">
              <div className="flex justify-between ">
                <p className="text-black">Medicine</p>
                <p className="text-black">600.00</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-black">Medidine</p>
                <p className="text-black">1700.00</p>
              </div>
            </div>
            {/* Bill total */}
            <div className="flex justify-between pt-4 pb-12 font-semi-bold text-xl ">
              <p className="text-black">Total</p>
              <p className="text-lime-500">2300.00</p>
            </div>
            <Link to="/">
              <Button value="Confirm" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PharmacistHome;
