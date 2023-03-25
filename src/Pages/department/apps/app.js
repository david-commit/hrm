import "./apps.css";
import DepartmentHeader from "../header/header";
import DepartmentNav from "../navbar/navbar";
import { Link } from "react-router-dom";

export default function DepartmentApps() {
  return (
    <section className="department-cont">
      <DepartmentNav />
      <section id="department-home">
        <DepartmentHeader
          message={"Press any link to navigate to a new page"}
        />
        <section id="department-apps">
          <div className="dept-apps-cont">
            <span></span>
            <Link to="/department/home">Home</Link>
          </div>

          <div className="dept-apps-cont">
            <span></span>
            <Link to="/department/members">Members</Link>
          </div>

          <div className="dept-apps-cont">
            <span></span>
            <Link to="/department/profile">Profile</Link>
          </div>
        </section>
      </section>
    </section>
  );
}
