import React from 'react'
import './EmployeeHeader.css';
import { FaSearch } from 'react-icons/fa';

const EmployeeHeader = () => {
  return (
    <div>
      {' '}
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
    </div>
  );
}

export default EmployeeHeader