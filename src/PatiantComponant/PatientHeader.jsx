import { FaPlus } from 'react-icons/fa';
import './PatientHeader.css';

const PatientHeader = ({AddPatient}) => {
  return (
    <div className="page-header">
      <div className="header-left">
        <h1>Patients</h1>
        <p className="subtitle">Manage and view patient information</p>
      </div>
      <button className="btn btn-primary btn-add" onClick={AddPatient}>
        <FaPlus /> Add Patient
      </button>
    </div>
  );
};

export default PatientHeader;