import { FaMale, FaFemale, FaUserCheck, FaUserTimes } from 'react-icons/fa';

export default function DashboardCharts({ statusDistribution, stats }) {
  const total = statusDistribution.pending + statusDistribution.confirmed + statusDistribution.completed + statusDistribution.cancelled;
  const totalStatus = total || 1;

  const getPercentage = (value) => Math.round((value / totalStatus) * 100);

  return (
    <div className="dashboard-charts">
      <div className="chart-card">
        <h3>Appointment Status</h3>
        <div className="status-bars">
          <div className="status-bar-item">
            <div className="status-bar-label">
              <span>Pending</span>
              <span>{statusDistribution.pending}</span>
            </div>
            <div className="status-bar-track">
              <div
                className="status-bar-fill pending"
                style={{ width: `${getPercentage(statusDistribution.pending)}%` }}
              />
            </div>
          </div>
          <div className="status-bar-item">
            <div className="status-bar-label">
              <span>Confirmed</span>
              <span>{statusDistribution.confirmed}</span>
            </div>
            <div className="status-bar-track">
              <div
                className="status-bar-fill confirmed"
                style={{ width: `${getPercentage(statusDistribution.confirmed)}%` }}
              />
            </div>
          </div>
          <div className="status-bar-item">
            <div className="status-bar-label">
              <span>Completed</span>
              <span>{statusDistribution.completed}</span>
            </div>
            <div className="status-bar-track">
              <div
                className="status-bar-fill completed"
                style={{ width: `${getPercentage(statusDistribution.completed)}%` }}
              />
            </div>
          </div>
          <div className="status-bar-item">
            <div className="status-bar-label">
              <span>Cancelled</span>
              <span>{statusDistribution.cancelled}</span>
            </div>
            <div className="status-bar-track">
              <div
                className="status-bar-fill cancelled"
                style={{ width: `${getPercentage(statusDistribution.cancelled)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="chart-card">
        <h3>Patient Overview</h3>
        <div className="patient-stats-grid">
          <div className="patient-stat-mini">
            <FaMale className="mini-icon male" />
            <div>
              <span className="mini-value">{stats.malePatients}</span>
              <span className="mini-label">Male</span>
            </div>
          </div>
          <div className="patient-stat-mini">
            <FaFemale className="mini-icon female" />
            <div>
              <span className="mini-value">{stats.femalePatients}</span>
              <span className="mini-label">Female</span>
            </div>
          </div>
          <div className="patient-stat-mini">
            <FaUserCheck className="mini-icon active" />
            <div>
              <span className="mini-value">{stats.activePatients}</span>
              <span className="mini-label">Active</span>
            </div>
          </div>
          <div className="patient-stat-mini">
            <FaUserTimes className="mini-icon inactive" />
            <div>
              <span className="mini-value">{stats.inactivePatients}</span>
              <span className="mini-label">Inactive</span>
            </div>
          </div>
        </div>
      </div>

      <div className="chart-card">
        <h3>Doctor Summary</h3>
        <div className="doctor-summary-grid">
          <div className="doctor-summary-item">
            <span className="summary-value">{stats.totalDoctors}</span>
            <span className="summary-label">Total Doctors</span>
          </div>
          <div className="doctor-summary-item">
            <span className="summary-value">{stats.availableDoctors}</span>
            <span className="summary-label">Available Now</span>
          </div>
          <div className="doctor-summary-item">
            <span className="summary-value">{stats.specialties}</span>
            <span className="summary-label">Specialties</span>
          </div>
          <div className="doctor-summary-item">
            <span className="summary-value">{stats.departments}</span>
            <span className="summary-label">Departments</span>
          </div>
        </div>
      </div>
    </div>
  );
}