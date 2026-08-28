export default function ModelAdd({ openmodel, CloseModel, AddPatient, form, HandleInput }) {
  return (
    <>
      {openmodel && (
        <div className="modal-overlay" onClick={CloseModel}>
          <div className="add-patient-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2>Add New Patient</h2>
                <p>Enter the patient's information below</p>
              </div>
              <button className="modal-close" onClick={CloseModel}>
                &times;
              </button>
            </div>

            <form className="patient-form" onSubmit={AddPatient}>
              <div className="avatar-section">
                <div className="avatar-preview">
                  <span>+</span>
                </div>
                <div>
                  <h4>Patient Avatar</h4>
                  <p>Upload a profile image</p>
                  <button type="button" className="upload-btn">
                    Upload Image
                  </button>
                </div>
              </div>

              <div className="form-group full-width">
                <label>Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={HandleInput}
                  type="text"
                  placeholder="Enter patient's full name"
                />
              </div>

              <div className="form-group">
                <label>Age</label>
                <input
                  name="age"
                  value={form.age}
                  onChange={HandleInput}
                  type="number"
                  placeholder="Enter age"
                />
              </div>

              <div className="form-group">
                <label>Gender</label>
                <select name="gender" value={form.gender} onChange={HandleInput}>
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="form-group">
                <label>Blood Group</label>
                <select name="blood" value={form.blood} onChange={HandleInput}>
                  <option value="">Select blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={HandleInput}
                  type="tel"
                  placeholder="+20 123 456 7890"
                />
              </div>

              <div className="form-group full-width">
                <label>Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={HandleInput}
                  type="email"
                  placeholder="patient@example.com"
                />
              </div>

              <div className="form-group full-width">
                <label>Status</label>
                <select name="Status" value={form.Status} onChange={HandleInput}>
                  <option value="">Select status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={CloseModel}>
                  Cancel
                </button>
                <button type="submit" className="add-patient-btn">
                  Add Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}