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
        
          <span id="client-signup-form-upload">
            <p>Upload the data sheet here</p>
            <input
              className="custom-file-upload"
              type="file"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            />
          </span>

          <span>
            <label>Organisation name</label>
            <input type="text" placeholder="Organisation name." />
          </span>

          <span>
            <label> Brief description of organisation</label>
            <input
              type="text"
              placeholder="Brief descritpion of your organisation"
            />
          </span>

          <span>
            <label for="org-type">Select organization type:</label>
            <select id="org-type" name="org-type">
              <option value="sole-proprietorship">Sole Proprietorship</option>
              <option value="partnership">Partnership</option>
              <option value="corporation">Corporation</option>
              <option value="limited-liability-company">
                Limited Liability Company (LLC)
              </option>
              <option value="nonprofit-organization">
                Nonprofit Organization
              </option>
              <option value="cooperative">Cooperative</option>
              <option value="franchise">Franchise</option>
              <option value="joint-venture">Joint Venture</option>
              <option value="government-agency">Government Agency</option>
              <option value="international-organization">
                International Organization
              </option>
            </select>
          </span>

          <button type="submit" id="submit-client-signup">
            Submit
          </button>
        </form>

        <form type=""></form>
      </section>
    </section>
  );
}
