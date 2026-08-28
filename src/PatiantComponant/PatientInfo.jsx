import './PatientInfo.css';

const PatientInfo = ({ name, id }) => {
  return (
    <div className="patient-info">
      <div className="patient-name">{name}</div>
      <div className="patient-id">ID: {id}</div>
    </div>
  );
};

export default PatientInfo;