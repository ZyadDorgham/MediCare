export default function AppointmentStatusBadge({ status }) {
  const classes = {
    pending: 'status-pending',
    confirmed: 'status-confirmed',
    completed: 'status-completed',
    cancelled: 'status-cancelled'
  };
  return <span className={`status-badge ${classes[status] || ''}`}>{status}</span>;
}