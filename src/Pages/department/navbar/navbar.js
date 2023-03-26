import { Link } from "react-router-dom";
import "./navbar.css";

export default function DepartmentNav() {
  return (
    <aside id="department-nav">
      <span id="department-nav-head">
        <Link to="/">HRTech Int.</Link>
      </span>
      <span id="department-nav-body">
        <Link to="/department/apps">Apps</Link>
        <Link to="/department/home">Home</Link>
        <Link to="/department/members">Members</Link>
        <Link to="/department/profile">Profile</Link>
      </span>
      <span id="department-nav-foot">Logout</span>
    </aside>
  );
}
