import DepartmentHeader from "../header/header";
import DepartmentNav from "../navbar/navbar";
import "./embers.css";

export default function DepartmentMembers() {
  return (
    <section className="department-cont">
      <DepartmentNav />
      <section id="department-member">
        <DepartmentHeader
          message={"You can see all the information about your members"}
        />
      </section>
    </section>
  );
}
