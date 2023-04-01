import "./signup.css";
import ClientBar from "../navbar/navbar";
import ClientHeader from "../home/header";
import { useNavigate } from "react-router-dom";

export default function ClientSignup() {
  let navigate = useNavigate();

  function redrectDepartment() {
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
            <div className="payment-list">
              <span className="payment-list-head">1</span>
              <span className="payment-list-body">
                <p>Engineering Department</p>
              </span>
            </div>
          </div>
          <aside id="client-payment-cont2"></aside>
        </section>
      </section>
    </section>
  );
}
