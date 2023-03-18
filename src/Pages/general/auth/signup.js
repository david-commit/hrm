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
          <h4>Login Into your Account</h4>
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
          <button type="submit" onClick={handleSignup}>
            Login
          </button>
          <Link to="reset">Forgot password?</Link>
        </form>
      </main>
      <Footer />
    </>
  );
}
