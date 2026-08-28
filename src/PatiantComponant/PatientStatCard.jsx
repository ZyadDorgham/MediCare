import './PatientStatCard.css';

const PatientStatCard = ({ icon, label, value, color }) => {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>{icon}</div>
      <div className="stat-info">
        <span className="stat-value">{value}</span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  );
};

export default PatientStatCard;