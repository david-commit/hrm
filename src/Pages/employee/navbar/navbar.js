import { Link } from "react-router-dom";
import "./navbar.css";

export default function EmployeeNavBar() {
  return (
    <nav id="employee-nav">
      <p>HRTech Int.</p>
      <Link to="/employee/home">Home</Link>
      <Link to="/employee/profile">Profile</Link>
      <Link to="/employee/money">Money</Link>
      <Link to="/employee/schedule">Schedule</Link>
    </nav>
  );
}
