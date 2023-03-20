import "./landing.css";

import { useNavigate } from "react-router-dom";
import Footer from "../../../Components/Static/footer/footer";
import Header from "../../../Components/Static/header/header";

export default function Landing() {
  let navigate = useNavigate();

  function handleSignup() {
    navigate("/signup");
  }

  function Landing() {
    return (
      <main id="landing">
        <section id="landing-section1">
          <h3>Powering organisations through proper people management</h3>
          <p>
            We provide a scalable human resource syste for your organisations
            and automate salaries for you.
          </p>
          <button id="landing-signup" onClick={handleSignup}>
            Register Organisation
          </button>
        </section>
      </main>
    );
  }
  return (
    <>
      <Header />
      <Landing />
      <Footer />
    </>
  );
}
