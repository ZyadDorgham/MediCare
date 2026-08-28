import { FaEye, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import PatientAvatar from './PatientAvatar';
import PatientInfo from './PatientInfo';
import PatientStatus from './PatientStatus';

import './PatientRow.css';

const PatientRow = ({ patient, onDelete }) => {

    return (

        <tr>

            <td className="patient-cell">

                <PatientAvatar
                    name={patient.name}
                    avatar={patient.avatar}
                />

                <PatientInfo
                    name={patient.name}
                    id={patient.id}
                />

            </td>

            <td>{patient.age}</td>

            <td>{patient.gender}</td>

            <td>{patient.bloodGroup}</td>

            <td>{patient.phone}</td>

            <td>{patient.email}</td>

            <td>
                <PatientStatus
                    status={patient.status}
                />
            </td>

            <td>

                <div className="row-actions">

                    <Link
                        to={`/patients/${patient.id}`}
                        className="btn-view"
                    >
                        <FaEye />
                        View
                    </Link>

                    <button
                        className="btn-delete"
                        onClick={() => onDelete(patient.id)}
                    >
                        <FaTrash />
                        Delete
                    </button>

                </div>

            </td>

        </tr>

    );
};

export default PatientRow;