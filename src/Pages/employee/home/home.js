import './home.css';
import EmployeeNavBar from '../navbar/navbar';
import EmployeeProfile from '../profile/profile';
import { FaSearch } from 'react-icons/fa';

export default function EmployeeHome() {
  return (
    <>
      <div className='employee-home-main-container'>
        <EmployeeNavBar />
        <section className='employee-home-body'>
          <header className='employee-menubar'>
            <p>
              Hello there Enock Mokua <br />
              Lets check your progress
            </p>
            <form id='header-search'>
              <FaSearch id='search-icon' />
              <input type='text' placeholder='Search' />
            </form>
          </header>
        </section>
        <EmployeeProfile />
      </div>
      {/* ===================================== */}
      {/* <section id='employee-cont'>
        <EmployeeNavBar />
        <section id='employee-home'>
          <header id='employee-home-header'>
            <p>
              Hello there Enock Mokua <br />
              Lets check your progress
            </p>
            <form>
              <button type='submit'>Submit</button>
              <input type='text' placeholder='Search for anything' />
            </form>
          </header>

          <div id='employee-home-stats'>
            <div id='employee-home-stats1'>
              <span className='employee-home-stats-bars'></span>
              <span className='employee-home-stats-bars'></span>
              <span className='employee-home-stats-bars'></span>
            </div>
            <div id='employee-home-stats2'>
              <p>Statistics for July</p>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id='employee-home-schedule'>
            <div id='upcoming-tt'>
              <h4>Upcoming Activity</h4>
            </div>
            <div id='upcoming-schedule'>
              <h4>Upcoming Schedule</h4>
              <span className='upcoming-schedule-cont'></span>
              <span className='upcoming-schedule-cont'></span>
              <span className='upcoming-schedule-cont'></span>
              <button id='upcoming-schedule-link'>See all Activity</button>
            </div>
          </div>
        </section>
        <EmployeeProfile />
      </section> */}
    </>
  );
}
