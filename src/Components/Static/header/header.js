import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";

import "./header.css";

export default function Header() {
  let navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const modalContent = (
    <div >
      <button onClick={closeModal}>Close Modal</button>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  );

  return (
    <header id="header">
      <nav>
        <Link id="nav-logo" to="/">
          HRTech Int.
        </Link>

        <span id="nav-cont">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </span>

        <button id="menu-button" onClick={openModal}>
          Menu
        </button>

        <button id="header-login" onClick={handleLogin}>
          Login
        </button>
      </nav>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        {modalContent}
      </Modal>
    </header>
  );
}
