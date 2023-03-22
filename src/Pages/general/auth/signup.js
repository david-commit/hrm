import "./auth.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../../Components/Static/header/header";
import Footer from "../../../Components/Static/footer/footer";

export default function Signup() {
  let navigate = useNavigate();
  let [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

  function handleChange(event) {
    let { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/employers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  function handleSignup() {
    navigate("/client/signup");
  }

  return (
    <>
      <Header />
      <main id="signup">
        <div></div>
        <form id="login-form" onSubmit={handleSubmit}>
          <h4>Register Organisation</h4>
          <input
            type="text"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
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
