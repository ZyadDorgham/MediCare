import './PatientStatus.css';

const PatientStatus = ({ status }) => {
  const statusClass = status?.toLowerCase() === 'active' ? 'status-active' : 'status-inactive';
  return <span className={`status-badge ${statusClass}`}>{status}</span>;
};

export default PatientStatus;