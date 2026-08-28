import './PatientFilters.css';

const PatientFilters = ({ onFilterChange, onSortChange }) => {
    return (
        <div className="filter-group">

            <select
                className="filter-select"
                onChange={(e) =>
                    onFilterChange("gender", e.target.value)
                }
            >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <select
                className="filter-select"
                onChange={(e) =>
                    onFilterChange("blood", e.target.value)
                }
            >
                <option value="">Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>

            <select
                className="filter-select"
                onChange={(e) =>
                    onFilterChange("age", e.target.value)
                }
            >
                <option value="">Age</option>
                <option value="0-18">0-18</option>
                <option value="19-35">19-35</option>
                <option value="36-50">36-50</option>
                <option value="50+">50+</option>
            </select>

            <select
                className="filter-select sort-select"
                onChange={onSortChange}
            >
                <option value="">Sort by</option>
                <option value="name">Name</option>
                <option value="age">Age</option>
                <option value="date">Date added</option>
            </select>

        </div>
    );
};

export default PatientFilters;