import React from 'react';
import './EmployeeSchedule.css';
import EmployeeNavBar from '../navbar/navbar';
import EmployeeHeader from '../header/EmployeeHeader';

const EmployeeSchedule = () => {
  return (
    <div className='employee-schedule-container'>
      <EmployeeNavBar />
      <section className='employee-schedule-body'>
        <EmployeeHeader />
        <section className='employee-schedule'>
        <h1>Your Activity</h1>
        </section>
      </section>
    </div>
  );
};

export default EmployeeSchedule;
