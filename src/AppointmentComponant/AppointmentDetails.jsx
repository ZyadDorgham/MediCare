import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaUser, FaUserMd, FaStethoscope, FaCalendarAlt, FaClock, FaTag, FaInfoCircle, FaClipboardCheck } from 'react-icons/fa';
import AppointmentStatusBadge from './AppointmentStatusBadge';
import './AppointmentDetails.css';

export default function AppointmentDetails() {
  const { id } = useParams();

  const stored = localStorage.getItem('Appointment');
  let appointments = [];
  if (stored) {
    try {
      appointments = JSON.parse(stored);
    } catch (e) {
      console.warn(`Failed to parse Appointment data : ${e.message}`);
    }
  }

  const appointment = appointments.find(a => a.id === Number(id));

  if (!appointment) {
    return (
      <div className="details-not-found">
        <h2>Appointment not found</h2>
        <Link to="/Appointments" className="back-btn">Back to Appointments</Link>
      </div>
    );
  }

  return (
    <div className="appointment-details-page">
      <div className="details-container">
        <Link to="/Appointments" className="back-btn">
          <FaArrowLeft /> Back to Appointments
        </Link>

        <div className="details-card">
          <div className="details-header">
            <div className="details-title">
              <h1>{appointment.name}</h1>
              <div className="details-meta">
                <span className="meta-item">
                  <FaUserMd /> {appointment.Doctor}
                </span>
                <span className="meta-item">
                  <FaStethoscope /> {appointment.Specialty}
                </span>
                <AppointmentStatusBadge status={appointment.Status} />
              </div>
            </div>
          </div>

          <div className="details-body">
            <div className="details-grid">
              <div className="detail-item">
                <div className="detail-icon"><FaUser /></div>
                <div className="detail-content">
                  <span className="detail-label">Patient</span>
                  <span className="detail-value">{appointment.name}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon"><FaUserMd /></div>
                <div className="detail-content">
                  <span className="detail-label">Doctor</span>
                  <span className="detail-value">{appointment.Doctor}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon"><FaStethoscope /></div>
                <div className="detail-content">
                  <span className="detail-label">Specialty</span>
                  <span className="detail-value">{appointment.Specialty}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon"><FaCalendarAlt /></div>
                <div className="detail-content">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{appointment.Date}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon"><FaClock /></div>
                <div className="detail-content">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">{appointment.Time}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon"><FaTag /></div>
                <div className="detail-content">
                  <span className="detail-label">Type</span>
                  <span className="detail-value">{appointment.Type}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon"><FaClipboardCheck /></div>
                <div className="detail-content">
                  <span className="detail-label">Status</span>
                  <span className="detail-value">
                    <AppointmentStatusBadge status={appointment.Status} />
                  </span>
                </div>
              </div>

              <div className="detail-item full-width">
                <div className="detail-icon"><FaInfoCircle /></div>
                <div className="detail-content">
                  <span className="detail-label">Notes</span>
                  <span className="detail-value notes">
                    {appointment.notes || 'No additional notes'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}