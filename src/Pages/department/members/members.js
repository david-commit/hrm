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

        <form id="member-search">
          <h3>Search for members in your department</h3>
          <p>Use either their name or employee number</p>
          <span>
            <button type="submit">Search</button>
            <input type="search" />
          </span>
        </form>
      </section>
    </section>
  );
}
