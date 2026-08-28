import './ErrorState.css';

const ErrorState = ({ onRetry }) => (
  <div className="error-state">
    <div className="error-icon">⚠️</div>
    <h3>Unable to load patients</h3>
    <p>Something went wrong while loading patient data.</p>
    <button className="btn btn-primary btn-retry" onClick={onRetry}>
      Try Again
    </button>
  </div>
);

export default ErrorState;