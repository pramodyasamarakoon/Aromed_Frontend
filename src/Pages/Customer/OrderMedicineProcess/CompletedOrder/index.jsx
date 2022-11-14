import React from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import Button from "../../../../components/MainButton";
import Footer from "../../../../Lib/Footer";

const ORDER_DETAILS = [
  {
    Medicine: "Acdef",
    Qty: 20,
    Qty_Price: 100,
  },
  {
    Medicine: "Acdef",
    Qty: 20,
    Qty_Price: 100,
  },
  {
    Medicine: "Acdef",
    Qty: 20,
    Qty_Price: 100,
  },
  {
    Medicine: "Acdef",
    Qty: 20,
    Qty_Price: 100,
  },
  {
    Medicine: "Acdef",
    Qty: 20,
    Qty_Price: 100,
  },
  {
    Medicine: "Acdef",
    Qty: 50,
    Qty_Price: 100,
  },
  {
    Medicine: "Acdef",
    Qty: 20,
    Qty_Price: 100,
  },
];

function CompletedOrder() {
  return (
    <div className="bg-back-blue">
      <div className="max-w-[1240px] mx-auto ">
        {/* Logo */}
        <div className="py-4 ">
          <Logo />
        </div>

        {/* Processing Message */}
        <HeaderBox
          extraTailwind="my-4"
          header="Your Order"
          backIcon="true"
          backPath="/orderMedicine"
        />

        {/* Table */}
        <div className="w-full h-auto py-20 my-12 bg-box-blue/20 ">
          {/* Bill inner box */}
          <div className="w-[90%] mx-auto pt-24 pb-16 px-8 bg-white font-bold rounded-xl ">
            {/* Bill items */}
            <div className="pb-16   ">
              <table className="table-fixed w-full border-collapse border border-slate-500 ">
                <thead>
                  <th className=" border bg-box-blue/50 border-slate-600">
                    {" "}
                    Medicine
                  </th>
                  <th className=" border bg-box-blue/50 border-slate-600">
                    Qty
                  </th>
                  <th className=" border bg-box-blue/50 border-slate-600">
                    Qty_Price
                  </th>
                  <th className=" border bg-box-blue/50 border-slate-600">
                    Total
                  </th>
                </thead>
                <tbody>
                  {ORDER_DETAILS.map(({ Medicine, Qty, Qty_Price }) => (
                    <tr>
                      <td className="text-center border border-slate-700">
                        {Medicine}
                      </td>
                      <td className="text-center border border-slate-700">
                        {Qty}
                      </td>
                      <td className="text-center border border-slate-700">
                        {Qty_Price}
                      </td>
                      <td className="text-center border border-slate-700">
                        {Qty * Qty_Price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex border border-slate-700 border-t-0 justify-between text-center ">
                <p className="text-black w-[262px] p-2 text-xl ">
                  Delivery Fee
                </p>
                <p className="text-black w-[262px] p-2 text-xl">200</p>
              </div>
              <div className="flex border border-slate-700 border-t-0 justify-between text-center ">
                <p className="text-black w-[262px] p-2 text-xl ">Total</p>
                <p className="text-[#23B65E] w-[262px] p-2 text-xl">12500</p>
              </div>
            </div>

            <div className="flex justify-between px-60 ">
              <Link to="/">
                <Button value="Cancel" />
              </Link>
              <Link to="/OrderSuccessful">
                <Button value="Pay On Door" />
              </Link>
              <Link to="/PayByCard">
                <Button value="Pay By Card" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CompletedOrder;
