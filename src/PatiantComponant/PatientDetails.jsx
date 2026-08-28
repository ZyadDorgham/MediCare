import { Link, useParams } from "react-router-dom";
import "./PatientDetails.css";

export default function PatientDetails() {
    const { id } = useParams();

    const savedData = localStorage.getItem("items");

    const patients = savedData
        ? JSON.parse(savedData)
        : [];

    const patient = patients.find(
        patient => patient.id === Number(id)
    );

    if (!patient) {
        return (
            <div className="patient-not-found">
                <h2>Patient not found</h2>

                <Link to="/patients" className="back-btn">
                    Back to Patients
                </Link>
            </div>
        );
    }

    return (
        <div className="patient-details-page">

            <div className="details-top">

                <Link to="/patients" className="back-btn">
                    ← Back to Patients
                </Link>

            </div>

            <div className="patient-details-card">

                {/* Header */}
                <div className="details-header">

                    <div className="patient-main-info">

                        <div className="details-avatar">
                            {patient.avatar ? (
                                <img
                                    src={patient.avatar}
                                    alt={patient.name}
                                />
                            ) : (
                                <span>
                                    {patient.name.charAt(0)}
                                </span>
                            )}
                        </div>

                        <div>
                            <h1>{patient.name}</h1>

                            <p className="patient-id">
                                Patient ID: #{patient.id}
                            </p>
                        </div>

                    </div>

                    <div
                        className={`status-badge ${patient.status?.toLowerCase()}`}
                    >
                        {patient.status}
                    </div>

                </div>

                {/* Information */}
                <div className="details-content">

                    <h2>Patient Information</h2>

                    <div className="details-grid">

                        <div className="detail-item">
                            <span className="detail-label">
                                Age
                            </span>

                            <span className="detail-value">
                                {patient.age} years
                            </span>
                        </div>

                        <div className="detail-item">
                            <span className="detail-label">
                                Gender
                            </span>

                            <span className="detail-value">
                                {patient.gender}
                            </span>
                        </div>

                        <div className="detail-item">
                            <span className="detail-label">
                                Blood Group
                            </span>

                            <span className="detail-value blood">
                                {patient.bloodGroup}
                            </span>
                        </div>

                        <div className="detail-item">
                            <span className="detail-label">
                                Phone
                            </span>

                            <span className="detail-value">
                                {patient.phone}
                            </span>
                        </div>

                        <div className="detail-item">
                            <span className="detail-label">
                                Email
                            </span>

                            <span className="detail-value">
                                {patient.email}
                            </span>
                        </div>

                        <div className="detail-item">
                            <span className="detail-label">
                                Status
                            </span>

                            <span className="detail-value">
                                {patient.status}
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}