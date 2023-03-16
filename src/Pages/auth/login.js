import "./auth.css";

export default function Login() {
  return (
    <main id="login">
      <div></div>
      <form>
        <p>Login Into your Account</p>
        <span>
          <label>Enter your email address</label>
          <input type="text" />
        </span>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
