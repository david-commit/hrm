import { Link } from "react-router-dom";
import "./navbar.css";

export default function ClientBar() {
  return (
    <aside id="client-nav-bar">
      <span id="client-bar-head">HrTech Int.</span>
      <span id="client-bar-info">
        <Link to="/client/home">Home</Link>
        <Link to="/client/profile">Profile</Link>
        <Link to="/client/money">Money</Link>
        <Link to="/client/employee">Employees</Link>
        <Link to="/client/signup">Signup</Link>
      </span>
      <span id="client-bar-foot"></span>
    </aside>
  );
}
