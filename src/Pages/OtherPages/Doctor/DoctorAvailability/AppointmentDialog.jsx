// import React, { useState } from "react";
// import {
//   Box,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
//   Typography,
// } from "@material-ui/core";

// const TwoWeeks = () => {
//   const [selections, setSelections] = useState({});

//   const handleRadioChange = (event) => {
//     const { name, value } = event.target;
//     setSelections((prevSelections) => ({ ...prevSelections, [name]: value }));
//   };

//   const days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
//   const currentDate = new Date();
//   const twoWeeksFromNow = new Date(
//     currentDate.getTime() + 14 * 24 * 60 * 60 * 1000
//   ); // add 14 days in milliseconds
//   const allDates = [];
//   let currentDateIterator = new Date(currentDate);
//   while (currentDateIterator <= twoWeeksFromNow) {
//     allDates.push(new Date(currentDateIterator));
//     currentDateIterator.setDate(currentDateIterator.getDate() + 1);
//   }

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center">
//       <Typography variant="h6">Two Weeks</Typography>
//       <Box display="flex" justifyContent="space-around" width="100%">
//         {allDates.map((date) => (
//           <Box
//             key={date.toISOString()}
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//           >
//             <Typography variant="subtitle1">
//               {date.toLocaleDateString()}
//             </Typography>
//             <FormControl component="fieldset">
//               <FormLabel component="legend">Appointment Type</FormLabel>
//               <RadioGroup
//                 aria-label="appointment-type"
//                 name={date.toISOString()}
//                 value={selections[date.toISOString()]}
//                 onChange={handleRadioChange}
//               >
//                 <FormControlLabel
//                   value="virtual"
//                   control={<Radio />}
//                   label="Virtual"
//                 />
//                 <FormControlLabel
//                   value="physical"
//                   control={<Radio />}
//                   label="Physical"
//                 />
//                 <FormControlLabel
//                   value="leave"
//                   control={<Radio />}
//                   label="Leave"
//                 />
//               </RadioGroup>
//             </FormControl>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default TwoWeeks;
