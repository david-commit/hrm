import ClientHeader from "../home/header";
import ClientBar from "../navbar/navbar";
import "./money.css";
import { FaDownload } from "react-icons/fa";

export default function ClientMoney() {
  let handleDownload = () => {
    let fileUrl = "http://localhost:3000/workers.xlsx";

    let link = document.createElement("a");
    link.href = fileUrl;
    link.download = "workers.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-money">
        <ClientHeader message="Add new employees to your organisation" />

        <div id="client-money-section1">
          <h2>Add new employee to your organisation</h2>
          <button onClick={handleDownload}>
            <FaDownload />
            <p>Download Sheet</p>
          </button>
        </div>

        <form id="client-money-section2">
          <h4>Mass add employees to your organisation.</h4>
          <p>
            Download the excel sheet, fill out your employees details then
            upload it.
          </p>
          <input type="file"  accept=".xlsx" className="file-upload-input" />
          <button type="submit">Add employees</button>
        </form>

        <form id="client-money-section3">
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
