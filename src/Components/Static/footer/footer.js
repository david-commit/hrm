import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div id="footer-cont">
        <span>
          <h4>HrTech Int.</h4>
          <p>
            Our ission is to assist our clients in achieving their startegic
            goals by providing them with customized HR services that align with
            their buiness objectives.
          </p>
        </span>

        <span>
          <h4>Who we are</h4>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/team">Our Team</Link>
        </span>

        <span>
          <h4>Get in touch</h4>
          <p>info@hrtechint.com</p>
          <p>+254717000001</p>
        </span>
      </div>
      <span id="footer-foot">
        <p>&copy; 2023 HRTech Int. All rights reserved.</p>
        <p>Privacy policy</p>
        <p>Terms of service</p>
      </span>
    </footer>
  );
}
