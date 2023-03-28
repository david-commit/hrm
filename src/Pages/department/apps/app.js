import "./apps.css";
import DepartmentHeader from "../header/header";
import DepartmentNav from "../navbar/navbar";
import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';

export default function DepartmentApps() {
  return (
    <section className='department-cont'>
      <DepartmentNav />
      <section id='department-home'>
        <DepartmentHeader
          message={'Press any link to navigate to a new page'}
        />
        <section id='department-apps'>
          <div className='dept-apps-cont'>
            <span>
              <AiOutlineHome />
            </span>
            <Link to='/department/home'>Home</Link>
          </div>

          <div className='dept-apps-cont'>
            <span>
              <HiOutlineUsers />
            </span>
            <Link to='/department/members'>Members</Link>
          </div>

          <div className='dept-apps-cont'>
            <span>
              <FaUserCircle />
            </span>
            <Link to='/department/profile'>Profile</Link>
          </div>
        </section>
      </section>
    </section>
  );
}
