import ClientBar from "../navbar/navbar";
import "./profile.css";
import ClientHeader from "../home/header";

export default function ClientProfile() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-profile">
        <ClientHeader message="Update your organisations details." />

        <span className="client-profile-head">
          <h3>General information</h3>
          <p>Update the general details of your organisation</p>
        </span>

        <form id="client-profile-1-1">
          <label>
            <p>Organisation name</p>
            <input type="text" placeholder="Organisations name" />
          </label>

          <label>
            <p>Date of incoporation</p>
            <input type="text" placeholder="Organisations name" />
          </label>

          <label>
            <p>organisation name</p>
            <input type="text" placeholder="Organisations name" />
          </label>

          <label>
            <p>organisation name</p>
            <input type="text" placeholder="Organisations name" />
          </label>

          <label>
            <p>organisation name</p>
            <input type="text" placeholder="Organisations name" />
          </label>

          <label>
            <p>Select organization type:</p>
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
          </label>

          <span>
            <button type="submit">Update</button>
          </span>
          
        </form>

        <form>
          <h3>Financial details</h3>
          <span>
            <input type="text" placeholder="KRA pin" />
            <input type="text" placeholder="NSSF number" />
            <input type="text" placeholder="NHIF number" />
            <input type="text" placeholder="Bank name" />
            <input type="text" placeholder="Bank branch" />
            <input type="text" placeholder="Bank account number" />
          </span>
          <button type="submit">Update details</button>
        </form>

        <form>
          <h3>Salaries and Renumerations</h3>
          <span>
            <label>Set payment range for permanent employees.</label>
            <select>
              <option value="one-week">One week</option>
              <option value="two-week">Two weeks</option>
              <option value="one-month">One month</option>
            </select>
          </span>
          <button type="submit">Update details</button>
        </form>
      </section>
    </section>
  );
}
