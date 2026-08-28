import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaUserMd } from 'react-icons/fa';

export default function DashboardRecent({ appointments }) {
  const getStatusClass = (status) => {
    const classes = {
      pending: 'status-pending',
      confirmed: 'status-confirmed',
      completed: 'status-completed',
      cancelled: 'status-cancelled'
    };
    return classes[status] || '';
  };

  return (
    <div className="dashboard-recent">
      <div className="recent-header">
        <h3>Recent Appointments</h3>
        <Link to="/Appointments" className="view-all">View All</Link>
      </div>
      <div className="recent-list">
        {appointments.length === 0 ? (
          <p className="recent-empty">No appointments found</p>
        ) : (
          appointments.map((app) => (
            <div className="recent-item" key={app.id}>
              <div className="recent-info">
                <span className="recent-name">{app.name}</span>
                <div className="recent-details">
                  <span><FaUserMd /> {app.Doctor}</span>
                  <span><FaCalendarAlt /> {app.Date}</span>
                  <span><FaClock /> {app.Time}</span>
                </div>
              </div>
              <span className={`recent-status ${getStatusClass(app.Status)}`}>
                {app.Status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}