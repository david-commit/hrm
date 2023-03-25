import './home.css';
import EmployeeNavBar from '../navbar/navbar';
import EmployeeProfile from '../profile/profile';
import EmployeeHeader from '../header/EmployeeHeader';
import { BiMoney } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineSchedule } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export default function EmployeeHome() {
  return (
    <>
      <div className='employee-home-main-container'>
        <EmployeeNavBar />
        <section className='employee-home-body'>
          <EmployeeHeader />
          <div className='employee-home-cards'>
            <div className='employee-home-card'>
              <NavLink to='/employee/profile'>
                <h3>
                  <FaUserCircle /> Profile
                </h3>
                <p>Edit your profile data</p>
              </NavLink>
            </div>
            <div className='employee-home-card'>
              <NavLink to='/employee/money'>
                <h3>
                  <BiMoney /> Your Money
                </h3>
                <p>Manage your money</p>
              </NavLink>
            </div>
            <div className='employee-home-card'>
              <NavLink to='/employee/schedule'>
                <h3>
                  <AiOutlineSchedule /> Your Activities
                </h3>
                <p>Plan your schedule</p>
              </NavLink>
            </div>
          </div>
        </section>
        <EmployeeProfile />
      </div>
    </>
  );
}
