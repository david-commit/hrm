import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header id="header">
      <nav>
        <Link id="nav-logo" to="/">
          Logo
        </Link>

        <span id="nav-cont">
          <Link to="">Home</Link>
          <Link to="">About Us</Link>
          <Link to="">Contact Us</Link>
        </span>

        <button id="header-login">Login</button>
      </nav>
    </header>
  );
}
