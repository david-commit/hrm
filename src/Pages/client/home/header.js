import "./home.css";
import { FaBell } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ClientHeader(props) {
  return (
    <header id="client-home-header">
      <div>
        <h3>Good morning, Enock</h3>
        <p>{props.message}</p>
      </div>

      <span>
        <form id="header-search">
          <FaSearch id="search-icon" />
          <input type="text" placeholder="Search" />
        </form>

        <Link to="/client/notifications" className="notifications">
          <FaBell />
        </Link>

        <Link to="/client/messages" className="notifications">
          <FaComment />
        </Link>
      </span>
    </header>
  );
}
