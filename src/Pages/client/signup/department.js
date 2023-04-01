import React from "react";
import { useParams } from "react-router-dom";
import ClientBar from "../navbar/navbar";
import ClientHeader from "../home/header";
import "./dept.css";

export default function DepartmentPay() {
  let { id } = useParams();

  console.log(id);
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-signup">
        <ClientHeader message="Its payday approve payments" />
        <section id="client-payment-cont">
          <div id="client-payment-cont1">
            <h4>Engineering department</h4>
            <div id="client-payment-cont-1-1">
              <span className="client-payment-cont-1-1"></span>
              <span className="client-payment-cont-1-1"></span>
              <span className="client-payment-cont-1-1"></span>
              <span className="client-payment-cont-1-1"></span>
            </div>

            <h5>Top Earners</h5>

            <div id="client-payment-cont-1-2-head">
              <span>Name</span>
              <span>Days Present</span>
              <span>Rating</span>
              <span>Gross Pay</span>
            </div>
            <ol id="client-payment-cont-1-2">
              <li className="client-payment-cont-1-2"></li>
            </ol>
          </div>

          <aside id="client-payment-cont2">
            <h4>Summary for this week</h4>
            <button id="client-payment-button">Release Salary</button>
          </aside>
        </section>
      </section>
    </section>
  );
}
