import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => (
  <div className="home">
    <h1>Benvenuto nella Biblioteca</h1>
    <p>Gestisci i tuoi prestiti e consulta i libri disponibili.</p>
    <Link to="/registra-prestito" className="cta-button">
      Registra un prestito
    </Link>
  </div>
);

export default Home;
