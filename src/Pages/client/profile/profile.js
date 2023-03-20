import ClientBar from "../navbar/navbar";
import "./profile.css";
import ClientHeader from "../home/header";

export default function ClientProfile() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-profile">
        <ClientHeader message="Update your organisations details." />

        <section id="client-profile-1">
          <form>
            <h3>Update general details</h3>
            <span>
              <input type="text" placeholder="Organisations name" />
              <input type="text" placeholder="Organisations number" />
              <input
                type="text"
                placeholder="Organisations incoporation date"
              />
              <input
                type="text"
                placeholder="Organisations brief description"
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
            <button type="submit">Update</button>
          </form>
        </section>
      </section>
    </section>
  );
}
