import AppointmentRow from './AppointmentRow';

export default function AppointmentTable({ appointments, onEdit, onDelete }) {
  if (appointments.length === 0) {
    return (
      <div className="appointment-empty">
        <p>No appointments found.</p>
      </div>
    );
  }

  return (
    <div className="appointment-table-wrapper">
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Specialty</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((app) => (
            <AppointmentRow
              key={app.id}
              appointment={app}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}