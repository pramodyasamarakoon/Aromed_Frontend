import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage'
import OrderMedicine from './Pages/Customer/OrderMedicinePage'
import VideoConference from "./Pages/Customer/VideoConferencePage";
import MeetDoctor from "./Pages/Customer/MeetDoctor";
import ForgotPassword01 from "./Pages/Customer/ForgotPassword01";
import ForgotPassword02 from "./Pages/Customer/ForgotPassword02";
import LaboratoryFees from "./Pages/Customer/LaboratoryFees";
import PayByCard from "./Pages/Customer/PayByCard";
import AppointmentConfirmation from "./Pages/Customer/AppointmentConfirmation";
import WaitingForAppointment from "./Pages/Customer/WaitingForAppointment";
import MyTurnAppointment from "./Pages/Customer/MyTurnAppointment";
import BeforeLoginAppointment from "./Pages/Customer/BeforeLoginAppointment";
import SuccessfulOrderRequest from "./Pages/Customer/OrderMedicineProcess/SuccessfulOrderRequest";
import OrderProcessing from "./Pages/Customer/OrderMedicineProcess/OrderProcessing";
import CompletedOrder from "./Pages/Customer/OrderMedicineProcess/CompletedOrder";
import OrderSuccessful from "./Pages/Customer/OrderMedicineProcess/OrderSuccessfull";
import ReceptionistHome from "./Pages/OtherPages/Receptionist/HomePage";
import ReceptionistLab from "./Pages/OtherPages/Receptionist/Lab";
import PharmacistHome from "./Pages/OtherPages/Pharmacist/PharmacistHome";
import DoctorHome from "./Pages/OtherPages/Doctor/DoctorHome";
import DoctorAvailability from "./Pages/OtherPages/Doctor/DoctorAvailability";
import DoctorMeeting from "./Pages/OtherPages/Doctor/DoctorMeeting";
import AdminHome from "./Pages/OtherPages/Admin/AdminHome";
import Dashboard from "./Pages/OtherPages/Admin/Dashboard";
import AdminCharges from "./Pages/OtherPages/Admin/AdminCharges";
import AccountPage from "./Pages/OtherPages/AccountPage";
import NotTodayAppointment from "./Pages/Customer/NotTodayAppointment";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Customer */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/orderMedicine" element={<OrderMedicine />} />
          <Route path="/customer/videoConference" element={<VideoConference />} />
          <Route path="/customer/meetDoctor" element={<MeetDoctor />} />
          <Route path="/LaboratoryFees" element={<LaboratoryFees />} />
          <Route path="/ForgotPassword01" element={<ForgotPassword01 />} />
          <Route path="/ForgotPassword02" element={<ForgotPassword02 />} />
          <Route path="/PayByCard" element={<PayByCard />} />
          <Route
            path="/customer/AppointmentConfirmation"
            element={<AppointmentConfirmation />}
          />
          <Route
            path="/WaitingForAppointment"
            element={<WaitingForAppointment />}
          />
          <Route
            path="/NotTodayAppointment"
            element={<NotTodayAppointment />}
          />
          <Route path="/MyTurnAppointment" element={<MyTurnAppointment />} />
          <Route
            path="/BeforeLoginAppointment"
            element={<BeforeLoginAppointment />}
          />
          <Route
            path="/orderMedicine/SuccessfulOrderRequest"
            element={<SuccessfulOrderRequest />}
          />
          <Route path="/OrderProcessing" element={<OrderProcessing />} />
          <Route path="/CompletedOrder" element={<CompletedOrder />} />
          <Route path="/OrderSuccessful" element={<OrderSuccessful />} />

          {/* Receptionist */}
          <Route path="/ReceptionistHome" element={<ReceptionistHome />} />
          <Route path="/ReceptionistLab" element={<ReceptionistLab />} />

          {/* Pharmacist */}
          <Route path="/PharmacistHome" element={<PharmacistHome />} />

          {/* Doctor */}
          <Route path="/DoctorHome" element={<DoctorHome />} />
          <Route path="/DoctorAvailability" element={<DoctorAvailability />} />
          <Route path="/DoctorMeeting" element={<DoctorMeeting />} />

          {/* Admin */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/AdminCharges" element={<AdminCharges />} />
          
          {/* Account Page */}
          <Route path="/AccountPage" element={<AccountPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
