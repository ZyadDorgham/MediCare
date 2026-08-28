
export default function DoctorCard({loading,error,Searched,handleDelete,handleView})
{
    return(

        <>
                  <div className="doctor-cards">

            {loading && (
              <div className="doctor-loading">
                Loading...
              </div>
            )}

            {error && (
              <div className="doctor-error">
                {error}
              </div>
            )}

            {!loading &&
              !error &&
              Searched.map((doctor) => (

                <div
                  className="doctor-card"
                  key={doctor.id}
                >

                  <div className="card-header">

                    <div className="doctor-avatar">

                      <img
                        src={
                          doctor.image ||
                          "https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                        }
                        alt={`${doctor.firstName} ${doctor.lastName}`}
                      />

                    </div>

                    <div className="card-doctor-info">

                      <div className="doctor-name">
                        Dr. {doctor.firstName}{" "}
                        {doctor.lastName}
                      </div>

                      <div className="doctor-email">
                        {doctor.email}
                      </div>

                    </div>

                    <span
                      className={`status-badge ${doctor.status || "available"}`}
                    >
                      {doctor.status || "Available"}
                    </span>

                  </div>

                  <div className="card-body">

                    <div className="card-row">

                      <span className="card-label">
                        Specialty
                      </span>

                      <span className="card-value">
                        {doctor.specialty}
                      </span>

                    </div>

                    <div className="card-row">

                      <span className="card-label">
                        Department
                      </span>

                      <span className="card-value">
                        {doctor.department}
                      </span>

                    </div>

                    <div className="card-row">

                      <span className="card-label">
                        Experience
                      </span>

                      <span className="card-value">
                        {doctor.experience} Years
                      </span>

                    </div>

                    <div className="card-row">

                      <span className="card-label">
                        Phone
                      </span>

                      <span className="card-value">
                        {doctor.phone}
                      </span>

                    </div>

                  </div>

                  <div className="card-actions">

                    <button
                      className="btn-action view"
                      onClick={() =>
                        handleView(doctor.id)
                      }
                    >
                      View
                    </button>

                    <button className="btn-action edit">
                      Edit
                    </button>

                    <button
                      className="btn-action delete"
                      onClick={() =>
                        handleDelete(doctor.id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

          </div>

        </>
    )
}