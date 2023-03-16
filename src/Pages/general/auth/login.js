import "./auth.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/employee/home");
  }

  return (
    <main id="login">
      <div></div>
      <form id="login-form">
        <h4>Login Into your Account</h4>
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Password" />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <Link to="reset">Forgot password?</Link>
      </form>
    </main>
  );
}
