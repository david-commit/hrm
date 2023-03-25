import React, { useState } from 'react';
import './EmployeeSchedule.css';
import EmployeeNavBar from '../navbar/navbar';
import EmployeeHeader from '../header/EmployeeHeader';
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from 'https://cdn.skypack.dev/react-tabs@3.2.2';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import BarLoader from 'react-spinners/BarLoader';

const EmployeeSchedule = () => {
  const [newTask, setNewTask] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reason, setReason] = useState('');
  const numberOfDays = Math.trunc(Math.ceil((endDate - startDate) / 86400000));
  const [loading, setLoading] = useState(false);

  const handleAddNewTask = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(``, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task: newTask,
        task_description: taskDescription,
      }),
    });
    setNewTask('');
    setTaskDescription('');
    setLoading(false);
  };

  const handleLeaveApplication = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(``, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        start_date: startDate,
        end_date: endDate,
        reason_for_leave: reason,
      }),
    });
    setStartDate(null);
    setEndDate(null);
    setReason('');
    setLoading(false);
  };

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
            <TabPanel>
              <h4>Pending Tasks</h4>
            </TabPanel>
            <TabPanel className='add-new-task-tab'>
              <h4>Create New Task</h4>
              <form onSubmit={handleAddNewTask}>
                <label htmlFor='task'>
                  Title <span className='required-field'>*</span>
                </label>
                <input
                  type='text'
                  name='task'
                  placeholder='Enter title of the task'
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  required
                />
                <label htmlFor='description'>Task Description (Optional)</label>
                <textarea
                  name='desctiption'
                  rows='7'
                  placeholder='Write a description of the task'
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                ></textarea>
                <button type='submit'>
                  {loading ? <BarLoader color='#36d7b7' /> : 'Add Task'}
                </button>
              </form>
            </TabPanel>
            <TabPanel>Content of tab 3</TabPanel>
            <TabPanel className='leave-application-tab'>
              <h4>Leave Application</h4>
              <form onSubmit={handleLeaveApplication}>
             
              </form>
            </TabPanel>
          </Tabs>
        </section>
      </section>
    </div>
  );
};

export default EmployeeSchedule;
