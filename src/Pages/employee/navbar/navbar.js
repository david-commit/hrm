import { Link } from 'react-router-dom';
import './navbar.css';
import { BiMoney } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineSchedule } from 'react-icons/ai';

export default function EmployeeNavBar() {
  return (
    <nav id='employee-nav'>
      <p>HRTech Int.</p>
      <Link to='/employee/home' class='tooltip' id='employee-menu'>
        {' '}
        <AiOutlineHome />
        <span class='tooltiptext'>Home</span>
      </Link>
      <Link to='/employee/profile' class='tooltip' id='employee-menu'>
        {' '}
        <FaUserCircle />
        <span class='tooltiptext'>Profile</span>
      </Link>
      <Link to='/employee/money' class='tooltip' id='employee-menu'>
        {' '}
        <BiMoney />
        <span class='tooltiptext'>Money</span>
      </Link>
      <Link to='/employee/schedule' class='tooltip' id='employee-menu'>
        {' '}
        <AiOutlineSchedule />
        <span class='tooltiptext'>Schedule</span>
      </Link>
    </nav>
  );
}
