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
        <div id="landing-section1">
          <div id="landing-section-1-1">
            <h3>
              Powering organisations through <br /> proper people management
            </h3>
            <p>
              We provide a scalable human resource syste for your organisations
              and automate salaries for you.
            </p>
            <button id="landing-signup" onClick={handleSignup}>
              Register Organisation
            </button>
          </div>
          <div id="landing-section-1-2"></div>
        </div>

        <div id="landing-section2">
          <h3>Our Partners</h3>
          <div id="our-partners">
            <span>
              <img src="#" alt="partner" />
              <p>Partner 1</p>
            </span>
            <span>
              <img src="#" alt="partner" />
              <p>Partner 1</p>
            </span>
            <span>
              <img src="#" alt="partner" />
              <p>Partner 1</p>
            </span>
            <span>
              <img src="#" alt="partner" />
              <p>Partner 1</p>
            </span>
          </div>
        </div>

        <section id="landing-section3"></section>
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
