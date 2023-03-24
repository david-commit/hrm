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

const EmployeeSchedule = () => {
  const [newTask, setNewTask] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const handleAddNewTask = e => {
    e.preventDefault()
  }

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
            <TabPanel className='add-new-task-tab'>
              <h4>Create New Task</h4>
              <form onSubmit={handleAddNewTask}>
                <label htmlFor='task'>Title</label>
                <input
                  type='text'
                  name='task'
                  placeholder='Enter title of the task'
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <label htmlFor='description'>Task Description (Optional)</label>
                <textarea
                  name='desctiption'
                  placeholder='Write a description of the task'
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                ></textarea>
                <button type='submit'>Add Task</button>
              </form>
            </TabPanel>
            <TabPanel>Content of tab 3</TabPanel>
            <TabPanel>Content of tab 3</TabPanel>
          </Tabs>
        </section>
      </section>
    </div>
  );
};

export default EmployeeSchedule;
