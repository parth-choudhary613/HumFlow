// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f5f5f5' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
