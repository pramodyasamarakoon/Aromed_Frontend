import React from "react";

function Button(props) {
  return (
    // <div
    //   onClick={props.onClick}
    //   className={`bg-light-blue border-solid border-2 border-light-blue max-w-[150px] min-w-[150px] cursor-pointer py-2 px-6 mx-auto rounded-full hover:bg-back-blue hover:text-light-blue hover:transition hover:duration-500 ${props.extraTailwind} `}
    // >
    //   <p className="text-center">{props.value}</p>
      <button
        onClick={props.onClick}
        type="submit"
        className={`bg-light-blue flex justify-center border-solid border-2 border-light-blue max-w-[150px] min-w-[150px] cursor-pointer py-2 px-6 mx-auto rounded-full hover:bg-back-blue hover:text-light-blue hover:transition hover:duration-500 ${props.extraTailwind} `} 
        >
          {props.value}
        </button>
    // </div>
  );
}

export default Button;