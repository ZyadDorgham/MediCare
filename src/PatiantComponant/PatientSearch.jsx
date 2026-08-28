import { FaSearch } from 'react-icons/fa';
import './PatientSearch.css';
const PatientSearch = ({ value, onChange }) => {
  return (
    <div className="search-wrapper">
      <FaSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search patients..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default PatientSearch;