import EmployeeNavBar from "../navbar/navbar";
import "./oney.css";
import React from "react";
import { FaDownload } from "react-icons/fa";

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

        <div id="employee-money-cont2">
          <div id="employee-money-cont2-1">
            <p>Last weeks overview</p>
            <div id="employee-last-chart"></div>
          </div>

          <div id="employee-money-cont2-2">
            <p>Wages comparison</p>
          </div>
        </div>
        <div id="employee-money-cont3">
          <div id="employee-money-cont3-1">
            <p>2 Weekly payroll</p>
          </div>
          <div id="employee-money-cont3-2">
            <p>Monthly payroll</p>
          </div>
        </div>
      </section>
      <aside id="employee-payroll">
        <button id="button-payslip">
          <FaDownload />
          <p>Download Payslip</p>
        </button>
      </aside>
    </section>
  );
}
