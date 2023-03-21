import ClientHeader from "../home/header";
import ClientBar from "../navbar/navbar";
import "./employee.css";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import DeviceMap from "./map";

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

                  <span className="att-down">
                    <FaArrowDown />
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

                  <span className="att-down">
                    <FaArrowDown />
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

          <div id="client-employee-payroll">
            <h3>View reports for Enock</h3>

            <span>
              <label>Select period for the report.</label>
              <select>
                <option value="2 week">1 month</option>
                <option value="1 month">1 month</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
              </select>
            </span>
            <div id="report-buttons">
              <button className="report-button">View payroll</button>
              <button className="report-button">Disciplinary report</button>
              <button className="report-button">Attendance report</button>
            </div>
          </div>
        </div>

        <div id="client-employee-info">
          <div id="client-employee-cases">
            <p className="container-title">Enock's Schedule</p>
            <div id="client-employee-schedule">
              <span className="client-employee-schedule-span">ssss</span>{" "}
              <span className="client-employee-schedule-span">ssss</span>{" "}
              <span className="client-employee-schedule-span">ssss</span>{" "}
              <span className="client-employee-schedule-span">ssss</span>
            </div>
          </div>
          <div id="client-employee-location">
            <p>Recent locations</p>
            <DeviceMap />
          </div>
        </div>
      </section>
    </section>
  );
}
