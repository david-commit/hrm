import ClientHeader from "../home/header";
import ClientBar from "../navbar/navbar";
import "./money.css";

export default function ClientMoney() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-money">
        <ClientHeader message="Add new employees to your organisation" />
        <div>
          <h2>Add new employee to your organisation</h2>
          <button type="download">Download excel sheet</button>
        </div>
        <form>
          <h4>Mass add employees for your organisation.</h4>
          <p>
            Download the excel sheet, fill out your employees details then
            upload it.
          </p>
          <input type="file" />
          <button type="submit">Add employees</button>
        </form>

        <form>
          <h4>Add a single employee</h4>
          <div>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Second name" />
            <input type="text" placeholder="Third name" />
            <input type="number" placeholder="Id number" />
          </div>
          <button type="submit">Register employee</button>
        </form>
        
      </section>
    </section>
  );
}
