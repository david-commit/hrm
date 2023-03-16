import "./home.css";
import EmployeeNavBar from "../navbar/navbar";
import EmployeeProfile from "../profile/profile";

export default function EmployeeHome() {
  return (
    <section id="employee-cont">
      <EmployeeNavBar />
      <section id="employee-home">
        <header id="employee-home-header">
          <p>Hello there Enock Mokua</p>
          <form>
            <button type="submit">Submit</button>
            <input type="text" placeholder="Search for anything" />
          </form>
        </header>
      </section>
      <EmployeeProfile />
    </section>
  );
}
