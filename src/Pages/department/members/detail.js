import { useParams } from "react-router-dom";
import { useState } from "react";

import "./details.css";
import DepartmentHeader from "../header/header";
import DepartmentNav from "../navbar/navbar";

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
];

export function MemberDetail() {
  let { userId } = useParams();
  const [attendanceData, setAttendanceData] = useState({
    timeIn: "",
    timeOut: "",
    reason: "",
  });

  // create fnction to handle change
  function handleChange(event) {
    const { name, value } = event.target;
    setAttendanceData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // create function to post attendace data
  function handleAttendance(e) {
    e.preventDefault();
    let nairobiDate = new Date().toLocaleDateString("en-Us", {
      timeZone: "Africa/Nairobi",
    });

    let data = {
      employee_id: 1,
      date: nairobiDate,
      time_in: attendanceData.timeIn,
      time_out: attendanceData.timeOut,
    };

    fetch("http://localhost:3000/attendances", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // handle user not found
  const user = users.find((u) => u.id === Number(userId));
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <section className="department-cont">
      <DepartmentNav />
      <section id="department-member" className="member-cont">
        <DepartmentHeader message={`Welcome to ${user.name}'s profile.`} />

        <section id="member-home">
          <div id="member-home-stats">
            <span className="member-home-cont">
              <p>Days attended</p>
              <span>25</span>
            </span>
            <span className="member-home-cont"></span>
            <span className="member-home-cont"></span>
            <span className="member-home-cont"></span>
          </div>

          <div id="member-chart">
            <h3>Attendance records</h3>
          </div>

          <form id="member-home-cont">
            <h4>Report disciplinary case</h4>
            <span>
              <label for="disciplinary-cases">
                Select type of disciplinary case:
              </label>
              <select id="disciplinary-cases" name="disciplinary-cases">
                <option value="misconduct">Misconduct</option>
                <option value="attendance">Attendance</option>
                <option value="performance">Performance</option>
                <option value="safety">Safety</option>
                <option value="policy-violations">Policy Violations</option>
                <option value="conflict-of-interest">
                  Conflict of Interest
                </option>
                <option value="code-of-conduct">Code of Conduct</option>
              </select>
            </span>

            <span>
              <label>Detailed description of case</label>
              <textarea type="text" placeholder="Enter description" />
            </span>
            <button type="submit">Submit</button>
          </form>
        </section>

        <section id="member-body">
          <div id="member-body-head">
            <h3>{user.name}'s requests</h3>
            <span className="member-requests">
              <p>
                Leave request <br />
                10-2-2022 - 14-5-2023
              </p>
              <span>
                <button>Allow</button>
                <button>Deny</button>
              </span>
            </span>
          </div>
          <div id="member-body-body">
            <h3>{user.name}'s upcoming tasks</h3>
            <span className="schedule-cont">Clean the toilet</span>
            <span className="schedule-cont">Clean the toilet</span>
            <span className="schedule-cont">Clean the toilet</span>
            <span className="schedule-cont">Clean the toilet</span>
          </div>
          <form id="member-body-objectives">
            <h4>Assign new task.</h4>

            <span>
              <label>Enter task name</label>
              <input type="text" placeholder="Task name" />
            </span>

            <span>
              <label>Enter task description</label>
              <input text="text" placeholder="Task description" />
            </span>

            <span>
              <label>Enter deadline</label>
              <input type="calendar" placeholder="Datetime" />
            </span>

            <button type="submit">Assign task</button>
          </form>
        </section>

        <form id="member-attendance" onSubmit={handleAttendance}>
          <h3>Register Attendance</h3>
          <span>
            <label>Time in:</label>
            <input
              type="time"
              name="timeIn"
              value={attendanceData.timeIn}
              onChange={handleChange}
            />
          </span>

          <span>
            <label>Time out:</label>
            <input
              type="time"
              name="timeOut"
              value={attendanceData.timeOut}
              onChange={handleChange}
            />
          </span>

          <span>
            <label>Reason:</label>
            <textarea
              type="text"
              name="reason"
              value={attendanceData.reason}
              onChange={handleChange}
            />
          </span>

          <button type="submit">Register</button>
        </form>
      </section>
    </section>
  );
}
