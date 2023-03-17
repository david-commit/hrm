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

        <div id="employee-money-cont1">
          <p>This week</p>
          <div id="employee-money-week">
            <span className="employee-money-week-stats"></span>
            <span className="employee-money-week-stats"></span>
            <span className="employee-money-week-stats"></span>
            <span className="employee-money-week-stats"></span>
          </div>
        </div>

        <div id="employee-money-cont2"></div>
        <div id="employee-money-cont3"></div>
      </section>
      <aside id="employee-payroll"></aside>
    </section>
  );
}
