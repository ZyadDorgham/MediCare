import './LoadingSkeleton.css';

const LoadingSkeleton = () => (
  <div className="skeleton-wrapper">
    {[...Array(5)].map((_, i) => (
      <div className="skeleton-row" key={i}>
        <div className="skeleton-avatar"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-badge"></div>
        <div className="skeleton-button"></div>
      </div>
    ))}
  </div>
);

export default LoadingSkeleton;