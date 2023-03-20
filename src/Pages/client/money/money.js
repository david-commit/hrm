import ClientHeader from "../home/header";
import ClientBar from "../navbar/navbar";
import "./money.css";

export default function ClientMoney() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-money">
        <ClientHeader />
        <h3>Add new employee to your organisation</h3>
        <form>
          <h4>Mass add employees for your organisation.</h4>
          <input type="file" />
          <button type="submit">Add employees</button>
        </form>
        <form>
          <h4>Add a single employee</h4>
          <span>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Second name" />
            <input type="text" placeholder="Third name" />
            <input type="number" placeholder="Id number" />
          </span>

          <button type="submit">Register employee</button>
        </form>
      </section>
    </section>
  );
}
