import EmployeeNavBar from "../navbar/navbar";
import "./oney.css";

export default function EmployeeMoney() {
  return (
    <section id="employee-cont">
      <EmployeeNavBar />
      <section id="employee-money">
        <header id="employee-money-header">
          <p>Hello Enock lets crunch the numbers.</p>
          <form id="employee-money-search">
            <button type="submit">Search</button>
            <input type="search" placeholder="Search for anything ..." />
          </form>
        </header>


      </section>
      <aside id="employee-payroll"></aside>
    </section>
  );
}
