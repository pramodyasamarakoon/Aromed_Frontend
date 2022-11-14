import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function ServiceBox(props) {
  return (
    <Link to={props.path} className="">
      <Card className="bg-black h-[350px] flex flex-col justify-center my-6 w-72 group py-4 pb-8 rounded-3xl cursor-pointer hover:drop-shadow-[0_5px_5px_rgba(5,42,80,0.2)] hover:border hover:border-white transition-[1000ms] ">
        <CardHeader color="blue" className="relative h-12  ">
          <Icon className="w-full h-full text-light-blue " icon={props.icon} />
        </CardHeader>
        <CardBody className="text-center px-8 py-4 ">
          <Typography variant="h5" className="mb-2">
            {props.topic}
          </Typography>
          <Typography className="hidden group-hover:block ">{props.text}</Typography>
        </CardBody>
      </Card>
    </Link>
  );
}

export default ServiceBox;
