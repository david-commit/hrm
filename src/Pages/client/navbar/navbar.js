import { Link } from 'react-router-dom';
import './navbar.css';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { BiMoney } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { FiUserCheck } from 'react-icons/fi';

export default function ClientBar() {
  return (
    <aside id='client-nav-bar'>
      <span id='client-bar-head'>HrTech Int.</span>
      <span id='client-bar-info'>
        <Link to='/client/home' class='tooltip' id='employee-menu'>
          {' '}
          <AiOutlineHome />
          <span class='tooltiptext'>Home</span>
        </Link>
        <Link to='/client/profile' class='tooltip' id='employee-menu'>
          {' '}
          <FaUserCircle />
          <span class='tooltiptext'>Profile</span>
        </Link>
        <Link to='/client/money' class='tooltip' id='employee-menu'>
          {' '}
          <BiMoney />
          <span class='tooltiptext'>Money</span>
        </Link>
        <Link to='/client/employee' class='tooltip' id='employee-menu'>
          {' '}
          <BsPeople />
          <span class='tooltiptext'>Employee</span>
        </Link>
        <Link to='/client/approvals' class='tooltip' id='employee-menu'>
          {' '}
          <FiUserCheck />
          <span class='tooltiptext'>Approlals</span>
        </Link>

        {/* <Link to='/client/signup'>
          <FaUserPlus />
        </Link> */}
      </span>

        <Link to='/' class='tooltip' id='employee-menu'>
          {' '}
          <RiLogoutBoxRLine />
          <span class='tooltiptext'>Logout</span>
          <br />
        </Link>
    </aside>
  );
}
