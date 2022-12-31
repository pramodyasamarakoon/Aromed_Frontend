import React, { useState } from "react";
import { Card, CardHeader } from "@material-tailwind/react";
import DoctorPopUp from "../../Lib/DoctorPopUp";

function DoctorCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={togglePopup}
        className="flex justify-center"
      >
        <Card className=" my-2 w-[237px] h-[281px] group cursor-pointer">
          <img
            className="h-full w-full object-cover rounded-xl absolute top-0 left-0"
            src={props.image}
            alt=""
          />
          <CardHeader
            color="blue"
            className="relative flex flex-col justify-center text-center w-full bg-back-blue/80 top-[190px] ml-0 h-[76px] group-hover:top-[0] group-hover:h-full transition-[1000ms] "
          >
            <div className="">
              <p className="text-xl p-2 pb-0 font-bold ">{props.name}</p>
              <p className="px-2 text-[14px] ">{props.special}</p>
            </div>
          </CardHeader>
        </Card>
      </button>
      <DoctorPopUp
        image={props.image}
        name={props.name}
        state={isOpen}
        closeHandler={() => setIsOpen(false)}
      />
    </>
  );
}

export default DoctorCard;
