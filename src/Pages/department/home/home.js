import DepartmentHeader from '../header/header';
import DepartmentNav from '../navbar/navbar';
import './home.css';

export default function DepartmentHome() {
  return (
    <section className='department-cont'>
      <DepartmentNav />
      <section id='department-home'>
        <DepartmentHeader message={'Here is an overview of your department'} />
        <section className='department-home-body'>
          <h2>Department Name</h2>
          <section className='department-home-stats'>
            <div className="department-home-stat">
              <h3>Total Members</h3>
              <span className="department-home-stat-value">62</span>
            </div>
            <div className="department-home-stat">
              <h3>Staff Attendance</h3>
              <span className="department-home-stat-value">95%</span>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
