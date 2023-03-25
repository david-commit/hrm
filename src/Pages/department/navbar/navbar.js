import { Link } from "react-router-dom";
import "./navbar.css";

export default function DepartmentNav() {
  return (
    <aside id="department-nav">
      <span id="department-nav-head">
        <Link to="/">HRTech Int.</Link>
      </span>
      <span id="department-nav-body">
        <Link to="">Apps</Link>
        <Link to="">Home</Link>
        <Link to="">Members</Link>
        <Link to="">Profile</Link>
      </span>
      <span id="department-nav-foot">Logout</span>
    </aside>
  );
}
