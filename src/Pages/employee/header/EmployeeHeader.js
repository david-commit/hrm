import React from 'react';
import './EmployeeHeader.css';
import { FaSearch } from 'react-icons/fa';
import userImage from '../../../Assets/useravatar.png';
import { Link } from 'react-router-dom';

const EmployeeHeader = () => {
  let navigation = document.querySelector('.navigation');

  return (
    <div>
      <header className='employee-menubar'>
        <p>
          Hello there Enock Mokua <br />
          Lets check your progress
        </p>
        <>
          <form id='header-search'>
            <FaSearch id='search-icon' />
            <input type='text' placeholder='Search' />
          </form>
          {/* <div className='container'>
            <div class='navigation'>
              <div className='user-box'>
                <div className='image-box'>
                  <img src={userImage} alt='avatar' />
                </div>
              </div>
              <div
                className='menu-toggle'
                onClick={() => navigation.classList.toggle('active')}
              ></div>
              <ul className='menu'>
                <li>
                  <p className='username'>Enock Mokua</p>
                </li>
                <li>
                  <Link to='/employee/profile'>
                    <ion-icon name='person-outline'></ion-icon>Profile
                  </Link>
                </li>
                <li>
                  <Link to='/employee/profile'>
                    <ion-icon name='home-outline'></ion-icon>Home
                  </Link>
                </li>
                <li>
                  <Link to='/employee/profile'>
                    <ion-icon name='notifications-outline'></ion-icon>
                    Notification
                  </Link>
                </li>
                <li>
                  <Link to='/employee/profile'>
                    <ion-icon name='cog-outline'></ion-icon>Settings
                  </Link>
                </li>
                <li>
                  <Link to='/employee/profile'>
                    <ion-icon name='log-out-outline'></ion-icon>Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </>
      </header>
    </div>
  );
};

export default EmployeeHeader;
