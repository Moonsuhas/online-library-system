import { Link, useLocation } from 'react-router-dom';

// NotFound component displays for undefined routes (404)
const NotFound = () => {
  const location = useLocation(); // Get the current URL path

  return (
    <div className="not-found-page">
      {/* Main 404 heading */}
      <h1 className="not-found-title">🚫 404 - Oops! Page Not Found</h1>

      {/* Display the invalid route */}
      <p className="not-found-message">
        The page <code>{location.pathname}</code> you are looking for does not exist.
      </p>

      {/* Back to home button */}
      <Link to="/" className="back-home-button">
        ← Take Me Home
      </Link>
    </div>
  );
};

export default NotFound;
