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
        <button id="landing-signup" onClick={handleSignup}>
          Get started
        </button>
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
