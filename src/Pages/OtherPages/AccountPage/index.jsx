import React, { useState } from "react";
import HeaderBox from "../../../components/HeaderBox";
import Logo from "../../../components/Logo";
import AccountImg from "../../../assets/AccountImg.jpg";
import Button from "../../../components/MainButton";
import Footer from "../../../Lib/Footer";



function AccountPage() {
  const [ id, setId ] = useState();
  const [ role, setRole ] = useState();
  const [ password, setPassword ] = useState();
  const [ username, setUsername ] = useState();
  const [ name, setName ] = useState();
  const [ age, setAge ] = useState();
  const [ gender, setGender ] = useState();
  const [ email, setEmail ] = useState();
  const [ mobile, setMobile ] = useState();
  const [ nic, setNic ] = useState();
  const [ address, setAddress ] = useState();
  const [ description, setDescription ] = useState();
  const [ specialization, setSpecialization ] = useState();
  const [ mbbs, setMbbs ] = useState();

  function onSubmit() {
    window.alert('Data saved successfully')
  }

  return (
    <div className="bg-back-blue ">
      {/* <NavBar/> */}
      <div className="w-full  bg-back-blue  text-white fixed z-10 top-0 ">
        {/* Current NavBar */}
        <div className="max-w-[1500px] h-[100px] mx-auto px-4 flex items-center justify-between ">
          <div>
            <Logo />
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto mt-[100px] ">
        <HeaderBox header="Your Account" backIcon="true" />
        {/* Image */}
        <div className="flex justify-center py-2 ">
          <div>
            <img
              className="h-[150px] w-[150px] object-cover rounded-full "
              src={AccountImg}
              alt=""
            />
          </div>
        </div>

        {/* Account Details */}
        <div id="2" className="bg-box-blue/20">
          <div className="p-4">
            {/* User ID and Role */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">User ID</p>
                <input type="number" className="w-full" onChange={ (e) => { setId(e.target.value) }} required />
              </div>
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Role</p>
                <input type="text" className="w-[75%]" onChange={ (e) => { setRole(e.target.value) }} />
              </div>
            </div>
            {/* User Name and Password */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">User Name</p>
                <input type="text" className="w-full" onChange={ (e) => { setUsername(e.target.value) }} />
              </div>
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Password</p>
                <input type="password" className="w-[75%]" onChange={ (e) => { setPassword(e.target.value) }} />
              </div>
            </div>
            {/* Name */}
            <div className="w-full flex justify-between my-2 ">
              <p className="my-auto w-[175px] pl-12 ">Name</p>
              <input type="text" className="w-full"  onChange={ (e) => { setName(e.target.value) }}/>
            </div>
            {/* Age and Gender */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Age</p>
                <input type="number" className="w-full" onChange={ (e) => { setAge(e.target.value) }}/>
              </div>
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Gender</p>
                <select name="" id="" className="w-[75%]" onChange={ (e) => { setGender(e.target.value) }}>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
            </div>
            {/* E mail and Mobile */}
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">E mail</p>
                <input type="email" className="w-full" onChange={ (e) => { setEmail(e.target.value) }}/>
              </div>
              <div className="w-full flex justify-between my-2 ">
                <p className="my-auto w-[200px] pl-12 ">Mobile</p>
                <input type="number" className="w-[75%]" onChange={ (e) => { setMobile(e.target.value) }}/>
              </div>
            </div>
            {/* NIC */}
            <div className="w-full flex justify-between my-2 ">
              <p className="my-auto w-[175px] pl-12 ">NIC</p>
              <input type="number" className="w-full" onChange={ (e) => { setNic(e.target.value) }}/>
            </div>
            {/* Address */}
            <div className="w-full flex justify-between my-2 ">
              <p className="my-auto w-[175px] pl-12 ">Address</p>
              <input type="text" className="w-full" onChange={ (e) => { setAddress(e.target.value) }}/>
            </div>
            {/* Description */}
            <div className="w-full flex justify-between my-2 ">
              <p className="my-auto w-[175px] pl-12 ">Description</p>
              <textarea
                name=""
                id=""
                className="min-h-[70px] w-full bg-box-blue rounded-xl px-4 py-4 "
                onChange={ (e) => { setDescription(e.target.value) }}
              />
            </div>
            {/* Specialization and MBBS Number */}
            <div>
              <p className="px-20 mt-12 mb-4">*Only for Doctors</p>
              <div className="grid grid-cols-2 gap-8 ">
                <div className="w-full flex justify-between my-2 ">
                  <p className="my-auto w-[200px] pl-12 ">Specialization</p>
                  <input type="text" className="w-full" onChange={ (e) => { setSpecialization(e.target.value) }}/>
                </div>
                <div className="w-full flex justify-between my-2 ">
                  <p className="my-auto w-[200px] pl-12 ">MBBS Number</p>
                  <input type="number" className="w-[75%]" onChange={ (e) => { setMbbs(e.target.value) }}/>
                </div>
              </div>
            </div>

            {/* Buttons */}
            {/* <div className="flex justify-evenly w-[400px] mx-auto py-12 ">
              <Button value="Save" />
            </div> */}
            <Button value='Check' onClick={ onSubmit } extraTailwind="p-4 my-4" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AccountPage;
