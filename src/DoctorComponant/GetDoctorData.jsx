import "./GetDoctorData.css";

export default function GetDoctorData({
  data,
  loading,
  error,
  onView,
  onDelete
}) {

  if (loading) {
    return (
      <tr>
        <td colSpan="8" className="doctor-loading">
          Loading...
        </td>
      </tr>
    );
  }

  if (error) {
    return (
      <tr>
        <td colSpan="8" className="doctor-error">
          {error}
        </td>
      </tr>
    );
  }

  return data.map((doctor) => (
    <tr key={doctor.id}>
      <td>
        <div className="doctor-info">
          <img
            src={
              doctor.image ||
              "https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
            }
            alt={`${doctor.firstName} ${doctor.lastName}`}
            className="doctor-avatar"
          />

          <div>
            <strong>
              Dr. {doctor.firstName} {doctor.lastName}
            </strong>

            <span>
              {doctor.email}
            </span>
          </div>
        </div>
      </td>

      <td>
        {doctor.specialty || "Cardiologist"}
      </td>

      <td>
        {doctor.department || "Cardiology"}
      </td>

      <td>
        {doctor.experience || 5} Years
      </td>

      <td>
        {doctor.patients || 42}
      </td>

      <td>
        ⭐ {doctor.rating || 4.8}
      </td>

      <td>
        <span
          className={`status-badge ${doctor.status || "available"}`}
        >
          {doctor.status || "Available"}
        </span>
      </td>

      <td>
        <div className="table-actions">

          <button
            className="action-view"
            onClick={() => onView(doctor.id)}
          >
            View
          </button>

          <button className="action-edit">
            Edit
          </button>

          <button
            className="action-delete"
            onClick={() => onDelete(doctor.id)}
          >
            Delete
          </button>

        </div>
      </td>
    </tr>
  ));
}