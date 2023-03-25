import { useParams } from "react-router-dom";
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
          <span className="member-home-cont"></span>
          <span className="member-home-cont"></span>
          <span className="member-home-cont"></span>
          <span className="member-home-cont"></span>
        </section>

        <section id="member-body">
          <div id="member-body-head"></div>
          <div id="member-body-body">
            
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
        <section id="member-foot"></section>
      </section>
    </section>
  );
}
