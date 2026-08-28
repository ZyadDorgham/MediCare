import { FaCalendarAlt, FaClock, FaCheckCircle, FaSpinner } from 'react-icons/fa';

export default function AppointmentStats({ stats }) {
  const items = [
    { icon: <FaCalendarAlt />, label: 'Total', value: stats.total, color: 'blue' },
    { icon: <FaClock />, label: 'Today', value: stats.todayCount, color: 'teal' },
    { icon: <FaSpinner />, label: 'Pending', value: stats.pending, color: 'yellow' },
    { icon: <FaCheckCircle />, label: 'Completed', value: stats.completed, color: 'green' }
  ];

  return (
    <div className="appointment-stats">
      {items.map((item, idx) => (
        <div className={`stat-card stat-${item.color}`} key={idx}>
          <div className="stat-icon">{item.icon}</div>
          <div className="stat-info">
            <span className="stat-value">{item.value}</span>
            <span className="stat-label">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}