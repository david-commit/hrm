import "./signup.css";
import ClientBar from "../navbar/navbar";
import ClientHeader from "../home/header";
export default function ClientSignup() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-signup">
        <ClientHeader message="Its payday approve payments" />
        <form>
          <h3>Set up dates for payment</h3>
          <span></span>
          <button type="submit">Update</button>
        </form>

        <div>
          <h3>Approve payment</h3>
          <span>
            <p>Approve payment for casual employees</p>
            <button>Approve</button>
          </span>

          <span>
            <p>Approve payment for permanent employees</p>
            <button>Approve</button>
          </span>

          <span>
            <p>Approve payment for seasonal employees</p>
            <button>Approve</button>
          </span>

          <span>
            <p>Approve payment for casual employees</p>
            <button>Approve</button>
          </span>
        </div>
      </section>
    </section>
  );
}
