import "./home.css";
import EmployeeNavBar from "../navbar/navbar";
import EmployeeProfile from "../profile/profile";

export default function EmployeeHome() {
  return (
    <section id="employee-cont">
      <EmployeeNavBar />
      <section id="employee-home">
        <header id="employee-home-header"></header>
      </section>
      <EmployeeProfile />
    </section>
  );
}
