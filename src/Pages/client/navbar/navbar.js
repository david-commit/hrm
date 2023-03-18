import { Link } from "react-router-dom";
import "./navbar.css";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiMoney } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

export default function ClientBar() {
  return (
    <aside id="client-nav-bar">
      <span id="client-bar-head">HrTech Int.</span>
      <span id="client-bar-info">
        <Link to="/client/home">
          <AiOutlineHome />
        </Link>
        <Link to="/client/profile">
          <FaUserCircle />
        </Link>
        <Link to="/client/money">
          <BiMoney />
        </Link>
        <Link to="/client/employee">
          <BsPeople />
        </Link>
        <Link to="/client/signup">
          <FaUserPlus />
        </Link>
      </span>

      <span id="client-bar-foot">
        <Link to="/">
          <RiLogoutBoxRLine />
        </Link>
      </span>
    </aside>
  );
}
