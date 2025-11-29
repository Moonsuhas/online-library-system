import { Link } from 'react-router-dom';
import './Navbar.css';

// Navbar components for the Online Library System website
// Contains site logo/brand and navigation links to main pages
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Brand/logo section */}
      <div className="navbar-brand">
        <Link to="/" className="brand-link">📚MyLibrary Cloud</Link>
      </div>

      {/* Navigation links */}
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-item">Home</Link>
        </li>
        <li>
          <Link to="/books" className="nav-item">Browse Books</Link>
        </li>
        <li>
          <Link to="/add-book" className="nav-item">Add Book</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
