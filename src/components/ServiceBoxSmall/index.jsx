import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function ServiceBoxSmall(props) {
  return (
    <Link to={props.path}>
      <Card className="mx-auto bg-sky-900 my-2 w-96 border-2 border-light-blue py-4 rounded-3xl cursor-pointer hover:drop-shadow-[0_5px_5px_rgba(56,212,241,0.5)] ">
        <CardHeader color="blue" className="relative h-24 p-4 ">
          <Icon className="w-full h-full text-light-blue " icon={props.icon} />
        </CardHeader>
        <CardBody className="text-center px-4 ">
          <Typography variant="h5" className="mb-2">
            {props.topic}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
}

export default ServiceBoxSmall;
