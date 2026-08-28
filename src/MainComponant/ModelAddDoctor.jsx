
export default function ModelAddDoctor({ModLAddDoctor,CloseModLAddDoctor,formaddDoctor,HandelAddDoctor,AddDoctor})
{
    return(

        <>
{ModLAddDoctor && <div className="doctor-modal-overlay">

  <div className="doctor-modal">

    <div className="doctor-modal-header">

      <div>
        <h2>Add New Doctor</h2>
        <p>Enter the doctor information below.</p>
      </div>

      <button className="doctor-modal-close" onClick={CloseModLAddDoctor}>
        ×
      </button>

    </div>

    <div className="doctor-modal-body">

      <div className="doctor-avatar-upload">

        <div className="doctor-avatar-preview">
          <span>👨‍⚕️</span>
        </div>

        <div>
          <h4>Doctor Photo</h4>
          <p>Upload a professional photo</p>
          <button className="doctor-upload-btn">
            Upload Photo
          </button>
        </div>

      </div>

      <div className="doctor-form">

        <div className="doctor-form-group">
          <label>First Name</label>
          <input name="fname" value={formaddDoctor.fname} onChange={HandelAddDoctor}
            type="text"
            placeholder="Enter first name"
          />
        </div>

        <div className="doctor-form-group">
          <label>Last Name</label>
          <input name="lname" value={formaddDoctor.lname} onChange={HandelAddDoctor}
            type="text"
            placeholder="Enter last name"
          />
        </div>

        <div className="doctor-form-group">
          <label>Email</label>
          <input name="email" value={formaddDoctor.email} onChange={HandelAddDoctor}
            type="email"
            placeholder="Enter email address"
          />
        </div>

        <div className="doctor-form-group">
          <label>Phone</label>
          <input name="phone" value={formaddDoctor.phone} onChange={HandelAddDoctor}
            type="tel"
            placeholder="Enter phone number"
          />
        </div>

        <div className="doctor-form-group">
          <label>Specialty</label>
          <select name="Specialty" value={formaddDoctor.Specialty} onChange={HandelAddDoctor}>
            <option value="">Select specialty</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="neurologist">Neurologist</option>
            <option value="pediatrician">Pediatrician</option>
            <option value="orthopedic">Orthopedic Surgeon</option>
            <option value="dermatologist">Dermatologist</option>
            <option value="psychiatrist">Psychiatrist</option>
            <option value="endocrinologist">Endocrinologist</option>
          </select>
        </div>

        <div className="doctor-form-group">
          <label>Department</label>
          <select name="Department" value={formaddDoctor.Department} onChange={HandelAddDoctor}>
            <option value="">Select department</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="dermatology">Dermatology</option>
            <option value="psychiatry">Psychiatry</option>
            <option value="endocrinology">Endocrinology</option>
          </select>
        </div>

        <div className="doctor-form-group">
          <label>Experience</label>
          <input name="Experience" value={formaddDoctor.Experience} onChange={HandelAddDoctor}
            type="number"
            placeholder="Years of experience"
          />
        </div>

        <div className="doctor-form-group">
          <label>Status</label>
          <select name="Status" value={formaddDoctor.Status} onChange={HandelAddDoctor}>
            <option value="">Select status</option>
            <option value="available">Available</option>
            <option value="busy">Busy</option>
            <option value="offline">Offline</option>
          </select>
        </div>

        <div className="doctor-form-group full-width">
          <label>Address</label>
          <input name="Address" value={formaddDoctor.Address} onChange={HandelAddDoctor}
            type="text"
            placeholder="Enter address"
          />
        </div>

      </div>

    </div>

    <div className="doctor-modal-actions">

      <button className="doctor-cancel-btn" onClick={CloseModLAddDoctor}>
        Cancel
      </button>

      <button className="doctor-submit-btn" onClick={AddDoctor}>
        Add Doctor
      </button>

    </div>

  </div>

</div>

}
        </>
    )
}