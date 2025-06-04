import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/libri-in-giro">Libri in giro</Link></li>
      <li><Link to="/registra-prestito">Registra un prestito</Link></li>
    </ul>
  </nav>
);

export default Navbar;
