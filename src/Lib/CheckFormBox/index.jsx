import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/MainButton";

function CheckFormBox(props) {
    return (
      <div>
        <div className="max-w-[1240px] mx-auto ">
          <p className={` p-4 pt-0 ${props.extratailwind} `}>{props.pTag}</p>
          <div className="bg-box-blue/30">
            <form className="md:flex w-[80%] m-auto py-8 ">
              <input
                className="w-full mb-4 md:mb-0 mr-4  "
                type="text"
                required={true}
                placeholder={props.placehoder}
              />
              {/* <Link to={`${props.linkTo}`}> */}
                <Button value={props.buttonName} extraTailwind="p-4" />
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    );
  }

  export default CheckFormBox;