import { FaUsers, FaUserPlus, FaMale, FaFemale } from 'react-icons/fa';
import PatientStatCard from './PatientStatCard';
import './PatientStats.css';

const PatientStats = ({ totalPatients, newPatients, malePatients, femalePatients }) => {
  return (
    <div className="stats-grid">
      <PatientStatCard icon={<FaUsers />} label="Total Patients" value={totalPatients} color="blue" />
      <PatientStatCard icon={<FaUserPlus />} label="New Patients" value={newPatients} color="teal" />
      <PatientStatCard icon={<FaMale />} label="Male Patients" value={malePatients} color="indigo" />
      <PatientStatCard icon={<FaFemale />} label="Female Patients" value={femalePatients} color="pink" />
    </div>
  );
};

export default PatientStats;