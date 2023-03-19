import ClientHeader from "../home/header";
import ClientBar from "../navbar/navbar";
import "./employee.css";

export default function ClientEmployee() {
  return (
    <section id="client-cont">
      <ClientBar />

      <section id="client-employee">
        <ClientHeader />
        <div id="client-employee-stats">
          <div id="client-employee-attendace"></div>
          <div id="client-employee-payroll"></div>
        </div>

        <div id="client-employee-info">
          <div id="client-employee-cases"></div>
          <div id="client-employee-location"></div>
        </div>
      </section>
    </section>
  );
}
