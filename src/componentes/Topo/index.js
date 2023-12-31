import { Link } from "react-router-dom";

import './styles.css';

export default function Topo() {
  return (
    <header>
      <div className="limitar-secao">
        <img src="asstes/logo.png" alt="logomarca"/>
        <nav>
          <Link className="link-topo" to="/">Home</Link>
          <Link className="link-topo" to="/sabores">Sabores</Link>
          <Link className="link-topo" to="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}