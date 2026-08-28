import './PatientAvatar.css';

const PatientAvatar = ({ name, avatar }) => {
  return (
    <div className="patient-avatar">
      {avatar ? (
        <img src={avatar} alt={name} />
      ) : (
        <span className="avatar-placeholder">{name?.charAt(0)?.toUpperCase()}</span>
      )}
    </div>
  );
};

export default PatientAvatar;