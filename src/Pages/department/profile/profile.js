import "./profile.css";
import DepartmentHeader from "../header/header";
import DepartmentNav from "../navbar/navbar";

export default function DepartmentProfile() {
  return (
    <section className="department-cont">
      <DepartmentNav />
      <section id="department-home">
        <DepartmentHeader message={"Welcome to your profile."} />
      </section>
    </section>
  );
}
