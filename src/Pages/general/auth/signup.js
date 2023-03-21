import "./auth.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../../Components/Static/header/header";
import Footer from "../../../Components/Static/footer/footer";

export default function Signup() {
  let navigate = useNavigate();

  function handleSignup() {
    navigate("/client/signup");
  }
  return (
    <>
      <Header />
      <main id="signup">
        <div></div>
        <form id="login-form">
          <h4>Register Organisation</h4>
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
          <button type="submit" onClick={handleSignup}>
            Register
          </button>
          <p to="/reset">
            Forgot password?<Link to="/reset"> Reset</Link>
          </p>
          <p to="/signup">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
}
