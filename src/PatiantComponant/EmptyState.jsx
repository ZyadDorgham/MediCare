import './EmptyState.css';

const EmptyState = () => (
  <div className="empty-state">
    <div className="empty-icon">🫥</div>
    <h3>No patients found</h3>
    <p>Try changing your search or filter criteria.</p>
  </div>
);

export default EmptyState;