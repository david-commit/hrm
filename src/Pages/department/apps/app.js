import "./apps.css";
import DepartmentHeader from "../header/header";
import DepartmentNav from "../navbar/navbar";

export default function DepartmentApps() {
  return (
    <section className="department-cont">
      <DepartmentNav />
      <section id="department-home">
        <DepartmentHeader />
      </section>
    </section>
  );
}
