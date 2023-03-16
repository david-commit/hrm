import "./auth.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <main id="login">
      <div></div>
      <form id="login-form">
        <h4>Login Into your Account</h4>
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Password" />
        <button type="submit">Login</button>
        <Link to="reset">Forgot password?</Link>
      </form>
    </main>
  );
}
