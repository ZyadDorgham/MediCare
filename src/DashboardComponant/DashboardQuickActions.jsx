import { Link } from 'react-router-dom';
import { FaUserPlus, FaUserMd, FaCalendarPlus, FaChartLine } from 'react-icons/fa';

export default function DashboardQuickActions() {
  return (
    <div className="dashboard-actions">
      <h3>Quick Actions</h3>
      <div className="actions-grid">
        <Link to="/Patients" className="action-card">
          <FaUserPlus className="action-icon blue" />
          <span>Add Patient</span>
        </Link>
        <Link to="/doctors" className="action-card">
          <FaUserMd className="action-icon purple" />
          <span>Add Doctor</span>
        </Link>
        <Link to="/Appointments" className="action-card">
          <FaCalendarPlus className="action-icon teal" />
          <span>New Appointment</span>
        </Link>
        <Link to="/" className="action-card">
          <FaChartLine className="action-icon orange" />
          <span>View Reports</span>
        </Link>
      </div>
    </div>
  );
}