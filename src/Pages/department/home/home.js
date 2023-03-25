import DepartmentHeader from "../header/header";
import DepartmentNav from "../navbar/navbar";
import "./home.css";

export default function DepartmentHome() {
  return (
    <section className="department-cont">
      <DepartmentNav />
      <section id="department-home">
        <DepartmentHeader />
      </section>
    </section>
  );
}
