import {  useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DoctorDetails.css";

export default function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = useMemo(() => {
    const stored = localStorage.getItem("doctors");
    if (stored) {
      const doctors = JSON.parse(stored);
      return doctors.find((d) => d.id === Number(id)) || null;
    }
    return null;
  }, [id]);

  const getAddressString = (address) => {
    if (!address) return "Not provided";
    if (typeof address === "string") return address;
    if (typeof address === "object") {
      const parts = [];
      if (address.address) parts.push(address.address);
      if (address.city) parts.push(address.city);
      if (address.state) parts.push(address.state);
      if (address.country) parts.push(address.country);
      if (address.postalCode) parts.push(address.postalCode);
      return parts.length > 0 ? parts.join(", ") : "Not provided";
    }
    return "Not provided";
  };

  if (!doctor) {
    return (
      <div className="details-not-found">
        <h2>Doctor not found</h2>
        <button className="back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="details-card">
          <div className="details-header">
            <div className="details-avatar">
              <img
                src={doctor.image || "https://cdn-icons-png.flaticon.com/512/3774/3774299.png"}
                alt={`${doctor.firstName} ${doctor.lastName}`}
              />
            </div>
            <div className="details-title">
              <h1>Dr. {doctor.firstName} {doctor.lastName}</h1>
              <span className={`status-badge ${doctor.status || "available"}`}>
                {doctor.status || "Available"}
              </span>
            </div>
          </div>

          <div className="details-body">
            <div className="detail-row">
              <span className="detail-label">Email</span>
              <span className="detail-value">{doctor.email}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone</span>
              <span className="detail-value">{doctor.phone}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Specialty</span>
              <span className="detail-value">{doctor.specialty || "Cardiologist"}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Department</span>
              <span className="detail-value">{doctor.department || "Cardiology"}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Experience</span>
              <span className="detail-value">{doctor.experience || 5} Years</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Patients</span>
              <span className="detail-value">{doctor.patients || 42}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Rating</span>
              <span className="detail-value">⭐ {doctor.rating || 4.8}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Address</span>
              <span className="detail-value">{getAddressString(doctor.address)}</span>
            </div>
          </div>

          <div className="details-actions">
            <button className="edit-btn">Edit Profile</button>
            <button className="schedule-btn">Schedule Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}