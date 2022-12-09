import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../components/HeaderBox";
import Button from "../../../components/MainButton";
import Footer from "../../../Lib/Footer";
import NavBar from "../../../Lib/NavBar";
import * as appConst from "../../../Lib/Const/const";
import axios, * as others from "axios";

function MeetDoctor() {
  const [name, setName] = useState("");
  const [mNumber, setMNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [nic, setNic] = useState();
  const [doctor, setDoctor] = useState();
  const [appointmentFee, setAppointmentFee] = useState(1500);
  const [date, setDate] = useState();
  const [message, setMessage] = useState();
  const [snackBar, setSnackBar] = useState(false);
  const videoConference = false;
  // const [data, setData] = useState();
  const [billHandler, setBillHandler] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(true);
  const [tempAppointmentId, setTempAppointmentId] = useState();
  const [data, setData] = useState();

  const onSubmit = async () => {
    // window.alert('Data Successfully Saved')
    setSnackBar(true);
    let res = await axios
      .post("http://localhost:8080/customer/videoConference", {
        name: name,
        mNumber: mNumber,
        email: email,
        address: address,
        gender: gender,
        age: age,
        nic: nic,
        doctor: doctor,
        date: date,
        message: message,
        videoConference: videoConference,
      })
      .then(function (response) {
        // console.log(response);
        setData(response);
        if (response.status === 201) {
          console.log(response.data);
          setBillHandler(true);
          // appConst.doctors.forEach((element, index) => {
          //   if (doctor === appConst.doctors.find(doctor)) {
          //     console.log("Success");
          //   }
          //   console.log("Error");
          // });
        }
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  const bookAnAppointment = async () => {
    let res = await axios
      .post("http://localhost:8080/customer/meetAppointment", {
        appointmentId: tempAppointmentId,
        paymentStatus: false,
      })
      .then(function (response) {
        // console.log(response);
        setData(response);
        // if(response.status === 201 ){
        //   console.log("Succesfull");
        // }
      })
      .catch(function (error) {
        // console.log(error);
      });
    // if ( tempAppointmentId === data.data.appointmentId ){
    //   setPaymentStatus(false);
    //   // console.log(paymentStatus);
    // }
    // else{
    //   console.log(paymentStatus);
    // }
  };

  return (
    <div>
      <div className="bg-back-blue">
        <NavBar />
        <div className="max-w-[1000px] mx-auto pt-28 ">
          {/* Introduction */}

          <HeaderBox
            header="Meet a Doctor"
            backIcon=""
            extraTailwind="mt-0"
            backPath="/"
          />
          <div className="p-4">
            <p className="md:hidden">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              atque id fugiat recusandae doloribus obcaecati molestiae aut?
              Fugit iste nulla architecto doloremque eligendi suscipit fuga
              nobis dicta optio magni rem quo, qui ullam, vero incidunt repellat
              nam sapiente dolorem tenetur quod amet quis beatae?
            </p>
            <p className="hidden md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              autem impedit perspiciatis delectus officia architecto dolores
              incidunt voluptates sequi deleniti? Corporis necessitatibus sit
              molestiae error tempora nisi animi eum. Quaerat praesentium nihil,
              fugiat delectus quidem, a deserunt, quisquam eveniet animi numquam
              cumque qui molestias excepturi natus repudiandae ducimus officia
              aut amet. Repellendus saepe, alias debitis consectetur, excepturi
              cum voluptatibus laborum commodi quibusdam quae qui doloribus
              doloremque quia, provident ipsam aliquid nulla sint mollitia sit
              delectus voluptatum laboriosam magnam maiores. Suscipit
              accusantium odio dolorem asperiores consectetur, labore, illo, sit
              in quam cupiditate perferendis mollitia sapiente explicabo. Hic,
              dolores nostrum consectetur illo culpa asperiores?
            </p>
            <div className="flex justify-center pt-4 ">
              <p className="px-4">Or you can arrange video conference</p>
              <Link to="/customer/videoConference">
                <button
                  className="p-4 py-0 rounded-lg bg-light-blue "
                  type="button"
                >
                  Click Here
                </button>
              </Link>
            </div>
          </div>

          {/* Booking Form */}
          <HeaderBox header="Book Now" />
          <div className="bg-box-blue/20">
            <div className="p-4">
              <div className="w-full md:flex justify-between md:my-2 ">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="w-full md:w-[49%]"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  type="number"
                  name="mNumber"
                  id=""
                  placeholder="Mobile Number"
                  className="w-full md:w-[49%] "
                  onChange={(e) => {
                    setMNumber(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:flex justify-between md:my-2">
                <input
                  name="email"
                  type="email"
                  placeholder="E mail"
                  className="md:w-[49%] "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="text"
                  name="address"
                  id=""
                  placeholder="Address"
                  className="md:w-[49%] "
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:flex justify-between md:my-2">
                <select
                  name="gender"
                  className="w-full md:w-[49%]"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option value="gender">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <input
                  type="number"
                  name="age"
                  id=""
                  placeholder="Age"
                  className="w-full md:w-[49%] "
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:flex justify-between md:my-2 ">
                <input
                  name="nic"
                  type="text"
                  placeholder="NIC Number"
                  className="w-full md:w-[49%] "
                  onChange={(e) => {
                    setNic(e.target.value);
                  }}
                />
                <select
                  name="doctor"
                  className="w-full md:w-[49%] "
                  onChange={(e) => {
                    setDoctor(e.target.value);
                  }}
                >
                  <option value="doctor">Select Doctor</option>
                  {appConst.doctors.map((data) => (
                    <option value={data.name}>{data.name}</option>
                  ))}
                </select>
              </div>
              <div className="w-full md:my-2">
                <input
                  name="date"
                  type="date"
                  placeholder="Select a Date"
                  className="md:w-[49%] "
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:my-2 pb-4">
                <input
                  type="text"
                  name="message"
                  placeholder="If Any Message?"
                  className="w-full "
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <Button
                onClick={onSubmit}
                extraTailwind="flex justify-center"
                value="Submit"
              />
            </div>
          </div>

          {/* Bill */}
          {billHandler === true ? (
            <div className="w-full h-auto py-10 my-5 bg-box-blue/20">
              {/* Bill inner box */}
              <div className="w-[340px] mx-auto py-10 px-8 bg-white font-bold rounded-xl ">
                {/* Bill items */}
                <div className="pb-10 border-b border-slate-500  ">
                  <div className="flex justify-between ">
                    <p className="text-black">Appointment Fee</p>
                    <p className="text-black">600.00</p>
                  </div>
                  <div className="flex justify-between ">
                    <p className="text-black">Doctor Fee</p>
                    <p className="text-black">1700.00</p>
                  </div>
                </div>
                {/* Bill total */}
                <div className="flex justify-between pt-4 pb-4 font-semi-bold text-xl ">
                  <p className="text-black">Total</p>
                  <p className="text-lime-500">2300.00</p>
                </div>
                <div className="w-full flex-col justify-between md:my-2 pb-2 ">
                  <p className="text-black font-semibold pb-2">
                    Check Your E mail and Please Enter the Appointment ID Here
                  </p>
                  <input
                    name="appointmentId"
                    type="text"
                    placeholder="Appointment ID"
                    className="w-full md:w-[100%]"
                    onChange={(e) => {
                      setTempAppointmentId(e.target.value);
                    }}
                  />
                </div>
                <Button onClick={bookAnAppointment} value="Pay on Door" />
              </div>
            </div>
          ) : null}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MeetDoctor;
