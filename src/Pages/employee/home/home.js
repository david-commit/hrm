import "./home.css";
import EmployeeNavBar from "../navbar/navbar";
export default function EmployeeHome() {
  return (
    <section id="employee-cont">
      <EmployeeNavBar />
      <section id="employee-home">This is the employee home</section>
    </section>
  );
}
