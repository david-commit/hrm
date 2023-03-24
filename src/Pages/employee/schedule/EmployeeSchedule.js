import React from 'react';
import './EmployeeSchedule.css';
import EmployeeNavBar from '../navbar/navbar';
import EmployeeHeader from '../header/EmployeeHeader';
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from 'https://cdn.skypack.dev/react-tabs@3.2.2';

const EmployeeSchedule = () => {
  return (
    <div className='employee-schedule-container'>
      <EmployeeNavBar />
      <section className='employee-schedule-body'>
        <EmployeeHeader />
        <section className='employee-schedule'>
          <h1>Your Activity</h1>
          <Tabs>
            <TabList className='mt--10'>
              <Tab>Today's Tasks</Tab>
              <Tab>Add New Task</Tab>
              <Tab>Pending Requests</Tab>
              <Tab>Apply for Leave</Tab>
            </TabList>
            <TabPanel>Content of tab 1</TabPanel>
          
            <TabPanel>Content of tab 3</TabPanel>
            <TabPanel>Content of tab 3</TabPanel>
          </Tabs>
        </section>
      </section>
    </div>
  );
};

export default EmployeeSchedule;
