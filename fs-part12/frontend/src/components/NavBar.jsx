import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/history">History</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;