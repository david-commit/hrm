import ClientHeader from "../home/header";
import ClientBar from "../navbar/navbar";
import "./employee.css";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function ClientEmployee() {
  return (
    <section id="client-cont">
      <ClientBar />

      <section id="client-employee">
        <ClientHeader message="Welcome to Enock's profile." />
        <div id="client-employee-stats">
          <div id="client-employee-attendace">
            <h3>March in Stats</h3>
            <div id="client-employee-attendace-cont">
              <span className="attendace-cont">
                <p>Days present</p>
                <span>
                  <p>
                    25 <i>days</i>
                  </p>

                  <span className="att-up">
                    <FaArrowUp />
                    <p>10%</p>
                  </span>
                </span>
              </span>
              <span className="attendace-cont">
                <p>Days present</p>
                <span>
                  <p>
                    25 <i>days</i>
                  </p>

                  <span className="att-up">
                    <FaArrowUp />
                    <p>10%</p>
                  </span>
                </span>
              </span>
              <span className="attendace-cont">
                <p>Days present</p>
                <span>
                  <p>
                    25 <i>days</i>
                  </p>

                  <span className="att-up">
                    <FaArrowUp />
                    <p>10%</p>
                  </span>
                </span>
              </span>
              <span className="attendace-cont">
                <p>Days present</p>
                <span>
                  <p>
                    25 <i>days</i>
                  </p>

                  <span className="att-up">
                    <FaArrowUp />
                    <p>10%</p>
                  </span>
                </span>
              </span>
            </div>
          </div>
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
