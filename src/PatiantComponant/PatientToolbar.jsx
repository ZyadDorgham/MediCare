import PatientSearch from './PatientSearch';
import PatientFilters from './PatientFilters';
import './PatientToolbar.css';

const PatientToolbar = ({
    searchValue,
    onSearchChange,
    onFilterChange,
    onSortChange
}) => {
    return (
        <div className="toolbar">

            <PatientSearch
                value={searchValue}
                onChange={onSearchChange}
            />

            <PatientFilters
                onFilterChange={onFilterChange}
                onSortChange={onSortChange}
            />

        </div>
    );
};

export default PatientToolbar;