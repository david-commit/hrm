import "./landing.css";

import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../Components/Static/footer/footer";
import Header from "../../../Components/Static/header/header";
import { FiBox } from "react-icons/fi";
import { AiOutlineTool } from "react-icons/ai";
import { IoMdAnalytics } from "react-icons/io";

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
              Our platform offers a scalable HR system that streamlines your
              organization's processes, including automated salary management
              for increased efficiency and accuracy.
            </p>
            {/* <button id="landing-signup" onClick={handleSignup}>
              Register Organisation
            </button> */}

            <span id="landing-buttons">
              <Link to="/signup" id="get-started" className="buttons">
                Get Started
              </Link>
              <Link to="/signup" className="buttons" id="book-now">
                Book Demo
              </Link>
            </span>

            <p>Set up in less than 5 minutes no credit card required.</p>
            <span id="landing-review"></span>
          </div>
          <div id="landing-section-1-2">
            <div id="section-1-2-cont"></div>
          </div>
        </div>

        {/* <div id="landing-section2">
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
        </div> */}

        <section id="landing-section3">
          <div id="landing-section3-header">
            <h3>
              Traditional HR Solutions are <br />
              outdated
            </h3>
            <p>Why you should join HR Tech Int</p>
          </div>

          <div id="our-partners-container">
            <span className="section3-containers">
              <span>
                <FiBox />
              </span>
              <strong>Simplicity</strong>
              <h5>Focus On Things That Are Important</h5>
              <p>
                Our solution is easy to use and adaptive to teams needs and
                size. We also provide custoized solutons and its a pay as you go
                service.
              </p>
            </span>

            <span className="section3-containers">
              <span>
                <AiOutlineTool />
              </span>
              <strong>Flexibilty</strong>
              <h5>The Solutions That You Need Today</h5>
              <p>
                HRTech is adaptive to your organisations needs. You can pick the
                solution that you need and add ore features as your team grows
                and HR processes get more complex.
              </p>
            </span>

            <span className="section3-containers">
              <span>
                <IoMdAnalytics />
              </span>

              <strong>Productivity</strong>
              <h5>90% Increase In Planning Quality</h5>
              <p>
                Focus on developing your products and serices and let HRTech
                deal with team management. We monitor their performance and
                recomend on areas of improvement.
              </p>
            </span>
          </div>
        </section>

        <section id="landing-section4">
          <div id="landing-section4-header">
            <h3>
              Empower your employees and
              <br />
              Automate HR process
            </h3>
          </div>
          <div id="landing-section4-container">
            <div id="section4-container-1">
              <span id="container-1-header"></span>
              <span id="container-1-body"></span>
              <span id="container-1-foot"></span>
            </div>
            <div id="section4-container-2">
              <h4>Create a conducive experience for your employees and you.</h4>
              <p>
                Make a great first impression by configuring and scheduling
                everything that needs to happen for all your new hires
              </p>
              <Link to="/signup">Learn More</Link>
              <p>
                " With everything explained onboarding our organisation was
                impressive. HRTech went the extra mile by improving the product
                regulary and providing technical support."
              </p>
              <p>
                <strong>Enock Mokua</strong> - Senior HR Manager
              </p>
            </div>
          </div>
          <div id="landing-section4-footer">
            <span className="section4-footer-cont">
              <p>Time Attendance</p>
            </span>
            <span className="section4-footer-cont">
              <p>Payroll</p>
            </span>
            <span className="section4-footer-cont">
              <p>Performance</p>
            </span>
            <span className="section4-footer-cont">
              <p>Onboarding</p>
            </span>
          </div>
        </section>

        <section className="landing-container">
          <section id="landing-section5">
            <div id="landing-section5-header">
              <h3>Why most organisations partner with us.</h3>
              <p>
                Listen from our users own users reviews on why they prefer to
                partner with us. We pride ourselves in providing excelent
                srevices,read soe of the reviews left by world renowed
                organizations.
              </p>
            </div>
            <div id="landing-section5-cont">
              <span className="review-cont">
                <p className="quote"></p>
                <p className="review-quote">
                  It used to take one day to process payroll. Now I can
                  automatically set payments and invoices tahnks to HR Tech Int.
                </p>
                <p className="review-foot">
                  <strong>John Mose</strong>, CEO & Co-Founder
                </p>
              </span>

              <span className="review-cont">
                <p className="quote"></p>
                <p className="review-quote">
                  It used to take one day to process payroll. Now I can
                  automatically set payments and invoices tahnks to HR Tech Int.
                </p>
                <p className="review-foot">
                  <strong>John Mose</strong>, CEO & Co-Founder
                </p>
              </span>
            </div>
          </section>
        </section>

        <section id="landing-section6">
          <h3>Register your organisation.</h3>
          <p>
            Register your organnisation today on HR Tech and unleash the power
            of productivity in your organisation through proper people anagement
            and automation of processes or book a demo with our CMO.
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
