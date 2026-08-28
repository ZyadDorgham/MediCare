import { Link } from 'react-router-dom';
import { FaEye, FaEdit, FaTrash, FaCalendarAlt, FaClock } from 'react-icons/fa';
import AppointmentStatusBadge from './AppointmentStatusBadge';

export default function AppointmentCard({ appointment, onEdit, onDelete }) {
  return (
    <div className="appointment-card">
      <div className="card-header">
        <div>
          <h3>{appointment.name}</h3>
          <p className="card-subtitle">{appointment.Doctor} • {appointment.Specialty}</p>
        </div>
        <AppointmentStatusBadge status={appointment.Status} />
      </div>
      <div className="card-body">
        <div className="card-row">
          <FaCalendarAlt />
          <span>{appointment.Date}</span>
        </div>
        <div className="card-row">
          <FaClock />
          <span>{appointment.Time}</span>
        </div>
      </div>
      <div className="card-actions">
        <Link to={`/Appdetails/${appointment.id}`} className="action-btn view">
          <FaEye /> View
        </Link>
        <button className="action-btn edit" onClick={() => onEdit(appointment.id)}>
          <FaEdit /> Edit
        </button>
        <button className="action-btn delete" onClick={() => onDelete(appointment.id)}>
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}