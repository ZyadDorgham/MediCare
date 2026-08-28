import AppointmentCard from './AppointmentCard';

export default function AppointmentCardList({ appointments, onEdit, onDelete }) {
  if (appointments.length === 0) {
    return (
      <div className="appointment-empty">
        <p>No appointments found.</p>
      </div>
    );
  }

  return (
    <div className="appointment-cards">
      {appointments.map((app) => (
        <AppointmentCard
          key={app.id}
          appointment={app}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}