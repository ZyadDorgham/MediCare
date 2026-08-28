import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AppointmentStatusBadge from './AppointmentStatusBadge';

export default function AppointmentRow({ appointment, onEdit, onDelete }) {
  return (
    <tr>
      <td>{appointment.name}</td>
      <td>{appointment.Doctor}</td>
      <td>{appointment.Specialty}</td>
      <td>{appointment.Date}</td>
      <td>{appointment.Time}</td>
      <td><AppointmentStatusBadge status={appointment.Status} /></td>
      <td>
        <div className="row-actions">
          <Link to={`/Appdetails/${appointment.id}`} className="action-btn view">
            <FaEye />
          </Link>
          <button className="action-btn edit" onClick={() => onEdit(appointment.id)}>
            <FaEdit />
          </button>
          <button className="action-btn delete" onClick={() => onDelete(appointment.id)}>
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}