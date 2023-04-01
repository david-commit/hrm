import React from "react";
import { useParams } from "react-router-dom";
import ClientBar from "../navbar/navbar";
import ClientHeader from "../home/header";

export default function DepartmentPay() {
  let { id } = useParams();

  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-signup">
        <ClientHeader message="Its payday approve payments" />
        <section id="client-payment-cont">
          <div id="client-payment-cont1">
            <h3>Release Employees Salaries</h3>
          </div>
          <aside id="client-payment-cont2"></aside>
        </section>
      </section>
    </section>
  );
}
