import { Link } from 'react-router-dom';
import './navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineApps } from 'react-icons/md';
import { HiOutlineUsers } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa'

export default function DepartmentNav() {
  return (
    <aside id='department-nav'>
      <span id='department-nav-head'>
        <Link to='/'>HRTech Int.</Link>
      </span>
      <span id='department-nav-body'>
        <Link to='/department/apps' class='tooltip' id='department-menu'>
          <MdOutlineApps />
          <span class='tooltiptext'>Apps</span>
        </Link>
        <Link to='/department/home' class='tooltip' id='department-menu'>
          <AiOutlineHome />
          <span class='tooltiptext'>Home</span>
        </Link>
        <Link to='/department/members' class='tooltip' id='department-menu'>
          <HiOutlineUsers />
          <span class='tooltiptext'>Members</span>
        </Link>
        <Link to='/department/profile' class='tooltip' id='department-menu'>
          <FaUserCircle />
          <span class='tooltiptext'>Profile</span>
        </Link>
      </span>
      <span id='department-nav-foot'>Logout</span>
    </aside>
  );
}
