import "./signup.css";
import ClientBar from "../navbar/navbar";
import ClientHeader from "../home/header";
import { Link, useNavigate } from "react-router-dom";

let data = [
  {
    department_id: "1001",
    department_name: "Sales",
  },
  {
    department_id: "1002",
    department_name: "Marketing",
  },
  {
    department_id: "1003",
    department_name: "Finance",
  },
  {
    department_id: "1004",
    department_name: "Human Resources",
  },
  {
    department_id: "1005",
    department_name: "Information Technology",
  },
];

export default function ClientSignup() {
  let navigate = useNavigate();

  function redrectToDepartment() {
    navigate("/client/signup/:id");
  }

  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-signup">
        <ClientHeader message="Its payday approve payments" />
        <section id="client-payment-cont">
          <div id="client-payment-cont1">
            <h3>Release Employees Salaries</h3>
            {data.map((department) => (
              <Link
                className="payment-list"
                key={department.department_id}
                to={`client/signup/${department.department_id}`}
              >
                <span className="payment-list-head">
                  {department.department_id}
                </span>
                <span className="payment-list-body">
                  <p>{department.department_name}</p>
                  {/* <button onClick={() => redirectToDepartment(department.department_id)}>Sign up</button> */}
                </span>
              </Link>
            ))}
          </div>
          <aside id="client-payment-cont2"></aside>
        </section>
      </section>
    </section>
  );
}
