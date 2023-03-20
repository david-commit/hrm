import "./landing.css";

import { Link, useNavigate } from "react-router-dom";
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

        <section id="landing-section3">
          <div id="landing-section3-header">
            <h3>Traditionsl H.R Solutions are outdated.</h3>
            <p>Why you should join HR Tech Int.</p>
          </div>

          <div id="our-partners-container">
            <span>
              <h4>Automated</h4>
            </span>
            <span></span>
            <span></span>
          </div>
        </section>

        <section id="landing-section4">
          <div id="landing-section4-header"></div>
          <div id="landing-section4-container"></div>
          <div id="landing-section4-footer"></div>
        </section>

        <section id="landing-section5">
          <div id="landing-section5-header"></div>
          <div id="landing-section5-cont"></div>
        </section>

        <section id="landing-section6">
          <h3>Register your organisation.</h3>
          <p>
            Register your organnisation today on HR Tech and unleash the power
            of productivity in your organisation through proper people anagement
            and automation of processes or book a demo with one of our CMO.
          </p>

          <span>
            <Link to="/signup" className="book-link" id="book-link1">
              Join Us
            </Link>
            <Link to="/signup" className="book-link" id="book-link2">
              Book a Demo
            </Link>
          </span>
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
