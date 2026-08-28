import { FaTimes } from 'react-icons/fa';

export default function AppointmentModal({
  isOpen,
  onClose,
  form,
  onChange,
  onSave,
  isEditing
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{isEditing ? 'Edit Appointment' : 'New Appointment'}</h2>
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Patient</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Patient name"
            />
          </div>
          <div className="form-group">
            <label>Doctor</label>
            <input
              type="text"
              name="Doctor"
              value={form.Doctor}
              onChange={onChange}
              placeholder="Doctor name"
            />
          </div>
          <div className="form-group">
            <label>Specialty</label>
            <input
              type="text"
              name="Specialty"
              value={form.Specialty}
              onChange={onChange}
              placeholder="Specialty"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="Date"
                value={form.Date}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input
                type="time"
                name="Time"
                value={form.Time}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Type</label>
            <select name="Type" value={form.Type} onChange={onChange}>
              <option value="consultation">Consultation</option>
              <option value="follow-up">Follow-up</option>
              <option value="check-up">Check-up</option>
              <option value="emergency">Emergency</option>
            </select>
          </div>
          <div className="form-group">
            <label>Status</label>
            <select name="Status" value={form.Status} onChange={onChange}>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={onChange}
              rows="3"
              placeholder="Optional notes"
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-save" onClick={onSave}>
            {isEditing ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
}