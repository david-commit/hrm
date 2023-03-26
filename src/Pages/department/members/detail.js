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

  function handleChange(event) {
    const { name, value } = event.target;
    setAttendanceData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function checkIn(timeIn) {
    const nineAm = new Date();
    nineAm.setHours(9, 0, 0, 0); // set to 9:00am

    const timeInDate = new Date(timeIn); // convert time in to a Date object
    const timeDiffMs = timeInDate - nineAm; // subtract 9:00am from time in in milliseconds
    const timeDiffHrs = timeDiffMs / (1000 * 60 * 60); // convert to hours

    return timeDiffHrs;
  }

  function checkOut(timeOut) {
    const nineAm = new Date();
    nineAm.setHours(9, 0, 0, 0); // set to 9:00am

    const timeInDate = new Date(timeOut); // convert time in to a Date object
    const timeDiffMs = timeInDate - nineAm; // subtract 9:00am from time in in milliseconds
    const timeDiffHrs = timeDiffMs / (1000 * 60 * 60); // convert to hours

    return timeDiffHrs;
  }

  function handleAttendance(event) {
    event.preventDefault();

    console.log(checkIn(attendanceData.timeIn));
    // fetch("/api/attendance", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(attendanceData),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     console.log("Form data posted successfully");
    //     checkLate(attendanceData.timeIn);
    //     // other code here
    //   })
    //   .catch((error) => {
    //     console.error("Error posting form data:", error);
    //   });
  }

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
              type="datetime-local"
              name="timeIn"
              value={attendanceData.timeIn}
              onChange={handleChange}
            />
          </span>

          <span>
            <label>Time out:</label>
            <input
              type="datetime-local"
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
