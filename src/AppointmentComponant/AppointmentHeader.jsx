import { FaPlus } from 'react-icons/fa';

export default function AppointmentHeader({ onAdd }) {
  return (
    <div className="appointment-header">
      <div>
        <h1>Appointments</h1>
        <p>Manage and track all patient appointments</p>
      </div>
      <button className="btn-primary" onClick={onAdd}>
        <FaPlus /> New Appointment
      </button>
    </div>
  );
}