import "./apps.css";
import DepartmentHeader from "../header/header";
import DepartmentNav from "../navbar/navbar";

export default function DepartmentApps() {
  return (
    <section className="department-cont">
      <DepartmentNav />
      <section id="department-home">
        <DepartmentHeader
          message={"Press any link to navigate to a new page"}
        />
        <section id="department-apps">department apps</section>
      </section>
    </section>
  );
}
