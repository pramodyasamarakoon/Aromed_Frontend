

import axios from 'axios';

export const getAllDoctors = async () => {
  try {
    const response = await axios.get('http://localhost:8080/user/allDoctors');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const charges = [
  {
    name: "Appointment Fee",
    charge: 800
  }
]

export const deliveryChargers = [
    {
        name: "In District",
        charge: 350,
    },
    {
        name: "Out District",
        charge: 500,
    }
]