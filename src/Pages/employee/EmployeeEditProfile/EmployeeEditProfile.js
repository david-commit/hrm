import React, { useState } from 'react';
import './EmployeeEditProfile.css';
import EmployeeHeader from '../header/EmployeeHeader';
import EmployeeNavBar from '../navbar/navbar';
import BarLoader from 'react-spinners/BarLoader';

const EmployeeEditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [nssf, setNssf] = useState('')
  const [kra, setKra] = useState('')
  const [pwd, setPwd] = useState('')
  const [nhif, setNhif] = useState('')
  
  const handleEmployeeUpdate = (e) => {
    e.preventDefault();
  };
  
  const handleEmployeeUpdatePassword = (e) => {
    e.preventDefault();
  };

  return (
    <div className='employee-edit-profile-container'>
      <EmployeeNavBar />
      <section className='employee-edit-profile-body'>
        <EmployeeHeader />
        <section className='employee-edit-profile'>
          <h1>Edit profile</h1>
          <form onSubmit={handleEmployeeUpdate}>
            <div>
              <section>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' placeholder='John Doe' />
              </section>
              <section>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' placeholder='example@aol.com' />
              </section>
              <section>
                <label htmlFor='phone'>Phone</label>
                <input type='text' name='phone' placeholder='0712 345 678' />
              </section>
            </div>
            <button type='submit'>
              {loading ? <BarLoader color='#36d7b7' /> : 'Update Profile'}
            </button>
          </form>
        </section>
        <hr
          style={{ backgroundColor: '#ccc', width: '80%', marginLeft: '2rem' }}
        />
        <section className='employee-edit-profile'>
          <h1>Change Work Details</h1>
          <form onSubmit={handleEmployeeUpdatePassword}>
            <div>
              <section>
                <label htmlFor='nhif'>NHIF Member No.</label>
                <input type='text' name='nhif' placeholder='Member No.' />
              </section>
              <section>
                <label htmlFor='nssf'>NSSF No.</label>
                <input
                  type='text'
                  name='nssf'
                  placeholder='NSSF No.'
                />
              </section>
              <section>
                <label htmlFor='kra'>KRA Pin No.</label>
                <input
                  type='text'
                  name='kra'
                  placeholder='Eg A1244521582'
                />
              </section>
              <section>
                <label htmlFor='nssf'>PWD No. (If not applicable, type N/A)</label>
                <input
                  type='text'
                  name='nssf'
                  placeholder='PWD No.'
                />
              </section>
            </div>
            <button type='submit'>
              {loading ? <BarLoader color='#36d7b7' /> : 'Change Password'}
            </button>
          </form>
        </section>
        <hr
          style={{ backgroundColor: '#ccc', width: '80%', marginLeft: '2rem' }}
        />
        <section className='employee-edit-profile'>
          <h1>Change Password</h1>
          <form onSubmit={handleEmployeeUpdatePassword}>
            <div>
              <section>
                <label htmlFor='name'>Password</label>
                <input type='password' name='name' placeholder='Password' />
              </section>
              <section>
                <label htmlFor='email'>Confirm Password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='Confirm Password'
                />
              </section>
            </div>
            <button type='submit'>
              {loading ? <BarLoader color='#36d7b7' /> : 'Change Password'}
            </button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default EmployeeEditProfile;
