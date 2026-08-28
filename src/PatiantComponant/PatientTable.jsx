import PatientRow from './PatientRow';
import './PatientTable.css';

const PatientTable = ({ patients, onDelete }) => {

    return (

        <table className="patient-table">

            <thead>

                <tr>
                    <th>Patient</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Blood Group</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>

            </thead>

            <tbody>

                {patients.map((patient) => (

                    <PatientRow
                        key={patient.id}
                        patient={patient}
                        onDelete={onDelete}
                    />

                ))}

            </tbody>

        </table>

    );
};

export default PatientTable;