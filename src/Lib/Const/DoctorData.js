import axios from "axios";
import Doc1 from "../../assets/Doc1.jpg";
import Doc2 from "../../assets/Doc2.jpg";
import Doc3 from "../../assets/Doc3.jpg";
import Doc4 from "../../assets/Doc4.jpg";
import Doc5 from "../../assets/Doc5.jpg";

export const DoctorData = [
    {
        id: 1,
        image: Doc1,
        res: "Mr.",
        name: "AJITH KARAVITA ",
        special: "Dermatology",
        qualifications: "MBBS, DNB, MD",
        experience: "8 years",
      },
      {
        id: 2,
        image: Doc2,
        res: "Mr.",
        name: "AJITH ATHTHANAYAKE",
        special: "VENEREOLOGIST CONSULTANT IN SEXUAL MEDICINE",
        otherSpecialization: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        qualifications: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        experience: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        specialNote: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
      },
      {
        id: 3,
        image: Doc3,
        res: "Mr.",
        name: "A A KASUN ADHIKARI",
        special: "NEUROLOGIST",
        otherSpecialization: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        qualifications: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        experience: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        specialNote: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
      },
      {
        id: 4,
        image: Doc4,
        res: "Mr.",
        name: "AJANTHA KESHAVARAJ",
        special: "Pediatrics",
        otherSpecialization: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        qualifications: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        experience: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        specialNote: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
      },
      {
        id: 5,
        image: Doc5,
        res: "Mr.",
        name: "A.P. MAYURESAN",
        special: "MAYURESANPHYSICIAN",
        otherSpecialization: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        qualifications: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        experience: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        specialNote: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
      },
      {
        id: 6,
        image: Doc1,
        res: "Mr.",
        name: "Mitchel Barly",
        special: "Neurology",
        otherSpecialization: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        qualifications: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        experience: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
        specialNote: "Loremfbhdgndfjb dnab nb gfngfb nb nfdv sd",
      },
]

// function DoctorData () {
//   const data = async () => {
//     let res = await axios
//       .get("http://localhost:8080/customer/videoConference", {
//         name: name,
//         pName: pName,
//         mNumber: mNumber,
//         email: email,
//         address: address,
//         gender: gender,
//         age: age,
//         nic: nic,
//         doctor: doctor,
//         date: date,
//         message: message,
//         videoConference: videoConference,
//       })
//       .then(function (response) {
//         console.log(response);
//         setData(response);
//         if (response.status === 201) {
//           console.log(response.data.appointmentId);
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// }

// export default DoctorData;