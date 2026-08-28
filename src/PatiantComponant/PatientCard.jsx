import {
    FaUser,
    FaPhone,
    FaEnvelope,
    FaTint,
    FaCalendarAlt,
    FaEye,
    FaTrash
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

import PatientAvatar from './PatientAvatar';
import PatientInfo from './PatientInfo';
import PatientStatus from './PatientStatus';

import './PatientCard.css';

const PatientCard = ({ patient, onDelete }) => {

    return (
        <div className="patient-card">

            <div className="card-header">

                <PatientAvatar
                    name={patient.name}
                    avatar={patient.avatar}
                />

                <PatientInfo
                    name={patient.name}
                    id={patient.id}
                />

                <PatientStatus
                    status={patient.status}
                />

            </div>

            <div className="card-body">

                <div className="card-row">
                    <FaCalendarAlt />
                    <span>
                        Age: {patient.age}
                    </span>
                </div>

                <div className="card-row">
                    <FaUser />
                    <span>
                        Gender: {patient.gender}
                    </span>
                </div>

                <div className="card-row">
                    <FaTint />
                    <span>
                        Blood: {patient.bloodGroup}
                    </span>
                </div>

                <div className="card-row">
                    <FaPhone />
                    <span>
                        {patient.phone}
                    </span>
                </div>

                <div className="card-row">
                    <FaEnvelope />
                    <span>
                        {patient.email}
                    </span>
                </div>

            </div>

            <div className="card-actions">

                <Link
                    to={`/patients/${patient.id}`}
                    className="btn-view"
                >
                    <FaEye />
                    View Details
                </Link>

                <button
                    className="btn-delete"
                    onClick={() => onDelete(patient.id)}
                >
                    <FaTrash />
                    Delete
                </button>

            </div>

        </div>
    );
};

export default PatientCard;