import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./header.css";

export default function Header() {
  let navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }
  return (
    <header id="header">
      <nav>
        <Link id="nav-logo" to="/">
          HRTech Int.
        </Link>

        <span id="nav-cont">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </span>

        <button id="menu-button">Menu</button>

        <button id="header-login" onClick={handleLogin}>
          Login
        </button>
      </nav>
    </header>
  );
}
