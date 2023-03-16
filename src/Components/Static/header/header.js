import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
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

        <button id="header-login">Login</button>
      </nav>
    </header>
  );
}
