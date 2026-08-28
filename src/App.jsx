import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Patients from './pages/Patients';
import Doctors from './pages/Doctor';
import DoctorDetails from './DoctorComponant/DoctorDetails';
import Appointments from './pages/Appointments';
import PatientDetails from './PatiantComponant/PatientDetails';
import AppointmentDetails from './AppointmentComponant/AppointmentDetails';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Patients" element={<Patients />} />
      <Route path="/patients/:id" element={<PatientDetails />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctordetails/:id" element={<DoctorDetails />} />
      <Route path="/Appointments" element={<Appointments />} />
      <Route path="/Appdetails/:id" element={<AppointmentDetails />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;