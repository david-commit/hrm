import "./signup.css";
import ClientBar from "../navbar/navbar";
export default function ClientSignup() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-signup">
        <header id="client-signup-header">
          <span className="client-signup-header-span">
            Hello there please fill in your organizations details.
          </span>
        </header>

        <div id="client-signup-download">
          <p>Download this form and fill out your employees data</p>
          <button id="download-excel" type="download">
            Download data
          </button>
        </div>

        <form id="client-signup-form">
          <div class="upload-btn-wrapper">
            <button class="btn">Upload a file</button>
            <input type="file" name="myfile" />
          </div>
        </form>

        
      </section>
    </section>
  );
}
