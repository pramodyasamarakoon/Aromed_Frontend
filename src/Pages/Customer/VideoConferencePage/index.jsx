import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../components/HeaderBox";
import Button from "../../../components/MainButton";
import Footer from "../../../Lib/Footer";
import NavBar from "../../../Lib/NavBar";

import axios, * as others from 'axios';


function VideoConference() {
  const [name, setName] = useState('');
  const [mNumber, setMNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [nic, setNic] = useState();
  const [doctor, setDoctor] = useState();
  const [date, setDate] = useState();
  const [message, setMessage] = useState();
  const [snackBar, setSnackBar] = useState(false);
  const videoConference = true;
  // const data = {
  //   name: '',
  //   mNumber: null,
  //   email: '',
  //   address:'',
  //   gender: null,
  //   age: null,
  //   nic: null,
  //   doctor: '',
  //   date: null,
  //   message: ''
  //   }

    const onSubmit = async () => {
      // window.alert('Data Successfully Saved')
      setSnackBar(true);
      let res = await axios.post('http://localhost:8080/customer/videoConference', {
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
        videoConference: videoConference
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  return (
    <div className="bg-back-blue">
      <NavBar />
      <div className="max-w-[1240px] mx-auto pt-28 ">
        {/* Introduction */}

        <HeaderBox
          header="Video Conference"
          backIcon=""
          extraTailwind="mt-0"
          backPath="/"
        />
        <div className="p-4">
          <p className="md:hidden">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            atque id fugiat recusandae doloribus obcaecati molestiae aut? Fugit
            iste nulla architecto doloremque eligendi suscipit fuga nobis dicta
            optio magni rem quo, qui ullam, vero incidunt repellat nam sapiente
            dolorem tenetur quod amet quis beatae?
          </p>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem
            impedit perspiciatis delectus officia architecto dolores incidunt
            voluptates sequi deleniti? Corporis necessitatibus sit molestiae
            error tempora nisi animi eum. Quaerat praesentium nihil, fugiat
            delectus quidem, a deserunt, quisquam eveniet animi numquam cumque
            qui molestias excepturi natus repudiandae ducimus officia aut amet.
            Repellendus saepe, alias debitis consectetur, excepturi cum
            voluptatibus laborum commodi quibusdam quae qui doloribus doloremque
            quia, provident ipsam aliquid nulla sint mollitia sit delectus
            voluptatum laboriosam magnam maiores. Suscipit accusantium odio
            dolorem asperiores consectetur, labore, illo, sit in quam cupiditate
            perferendis mollitia sapiente explicabo. Hic, dolores nostrum
            consectetur illo culpa asperiores?
          </p>
          <div className="flex justify-center pt-4 ">
            <p className="px-4">Or you can meet a doctor</p>
            <Link to="/customer/meetDoctor">
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
                type="text"
                name='name'
                placeholder="Name"
                className="w-full md:w-[49%]"
                onChange={(e) =>
                  {setName(e.target.value)}
                }
              />
              <input
                type="number"
                name="mNumber"
                id=""
                placeholder="Mobile Number"
                className="w-full md:w-[49%] "
                onChange={(e)=>
                {setMNumber(e.target.value)}}
              />
            </div>
            <div className="w-full md:flex justify-between md:my-2">
              <input
                type="email"
                name='email'
                placeholder="E mail"
                className="md:w-[49%] "
                onChange={ (e) =>
                  { setEmail(e.target.value) }
                }
              />
              <input
                type="text"
                name="address"
                id=""
                placeholder="Address"
                className="md:w-[49%] "
                onChange={ (e) =>
                  { setAddress(e.target.value) }
                }
              />
            </div>
            <div className="w-full md:flex justify-between md:my-2 ">
              <select
                name="gender"
                className="w-full md:w-[49%]"
                onChange={ (e) =>
                  { setGender(e.target.value) }
                }
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
                onChange={ (e) =>
                  { setAge(e.target.value) }
                }
              />
            </div>
            <div className="w-full md:flex justify-between md:my-2 ">
              <input
                name="nic"
                type="text"
                placeholder="NIC Number"
                className="w-full md:w-[49%] "
                onChange={ (e) =>
                  { setNic(e.target.value) }
                }
              />
              <select
                name="doctor"
                className="w-full md:w-[49%] "
                onChange={ (e) =>
                  { setDoctor(e.target.value) }
                }
              >
                <option value="doctor">Select Doctor</option>
                 <option value="doc01">Doc01</option>
                <option value="doc02">Doc02</option>
              </select>
            </div>
            <div className="w-full md:my-2">
              <input
                type="date"
                name="date"
                placeholder="Select a Date"
                className="md:w-[49%] "
                onChange={ (e) =>
                  { setDate(e.target.value) }
                }
              />
            </div>
            <div className="w-full md:my-2 pb-4">
              <input
                type="text"
                name="message"
                placeholder="If Any Message?"
                className="w-full "
                onChange={ (e) =>
                  { setMessage(e.target.value) }
                }
              />
            </div>
            <Link to="/PayByCard">
              <Button extraTailwind='flex justify-center'
              // onClick={ onSubmit } 
              value="Submit" />
            </Link>
            
          </div>
        </div>

        {/* Bill */}
        <div className="w-full h-auto py-20 my-12 bg-box-blue/20 ">
          {/* Bill inner box */}
          <div className="w-[340px] mx-auto pt-24 pb-16 px-8 bg-white font-bold rounded-xl ">
            {/* Bill items */}
            <div className="pb-16 border-b border-slate-500  ">
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
            <div className="flex justify-between pt-4 pb-12 font-semi-bold text-xl ">
              <p className="text-black">Total</p>
              <p className="text-lime-500">2300.00</p>
            </div>
            <Link to="/PayByCard">
              <Button value="Pay By Card" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-gray-500">
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">gray!</b> This is a gray alert - check it out!
          </span>
          <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
            <span>×</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VideoConference;
