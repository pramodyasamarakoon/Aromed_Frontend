import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="">
      <div className=" w-[200px] text-center text-white">
        <a href="/">
          <h1 className="text-4xl font-bold pt-2 px-4 font-[Poppins] underline underline-offset-1 ">
            Aromed
          </h1>
          <p className="font-[Finlandica]">Medical Center</p>
        </a>
      </div>
    </Link>
  );
}

export default Logo;
