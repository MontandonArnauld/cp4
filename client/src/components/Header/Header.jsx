import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/home">
          <img
            src="../../public/logo/elden-ring-wiki-logo.webp"
            alt="logo du site"
            className="logo"
          />
        </Link>

        <ul className="navbar-menu">
          <Link to="/bossdisplay" className="navbar-link">
            <li className="navbar-item">Bosses</li>
          </Link>
          <li className="navbar-item">Map</li>
          <li className="navbar-item">Gallery</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
