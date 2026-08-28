import {
  FaUsers,
  FaUserMd,
  FaCalendarCheck,
  FaCalendarDay,
  FaClock,
  FaCheckCircle,
  FaUserPlus,
  FaHospital
} from 'react-icons/fa';

export default function DashboardStats({ stats }) {
  const cards = [
    { icon: <FaUsers />, label: 'Total Patients', value: stats.totalPatients, color: 'blue' },
    { icon: <FaUserMd />, label: 'Total Doctors', value: stats.totalDoctors, color: 'purple' },
    { icon: <FaCalendarCheck />, label: 'Total Appointments', value: stats.totalAppointments, color: 'teal' },
    { icon: <FaCalendarDay />, label: "Today's Appointments", value: stats.todayAppointments, color: 'orange' },
    { icon: <FaClock />, label: 'Pending Appointments', value: stats.pendingAppointments, color: 'yellow' },
    { icon: <FaCheckCircle />, label: 'Completed Appointments', value: stats.completedAppointments, color: 'green' },
    { icon: <FaUserPlus />, label: 'Active Patients', value: stats.activePatients, color: 'indigo' },
    { icon: <FaHospital />, label: 'Departments', value: stats.departments, color: 'pink' }
  ];

  return (
    <div className="dashboard-stats">
      {cards.map((card, idx) => (
        <div className={`stat-card stat-${card.color}`} key={idx}>
          <div className="stat-icon">{card.icon}</div>
          <div className="stat-info">
            <span className="stat-value">{card.value}</span>
            <span className="stat-label">{card.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}