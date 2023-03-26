import React, { useState } from 'react';
import './EmployeeEditProfile.css';
import EmployeeHeader from '../header/EmployeeHeader';
import EmployeeNavBar from '../navbar/navbar';
import BarLoader from 'react-spinners/BarLoader';

const EmployeeEditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [nssf, setNssf] = useState('');
  const [kra, setKra] = useState('');
  const [pwd, setPwd] = useState('');
  const [nhif, setNhif] = useState('');

  const handleEmployeePersonalDetailsUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(``, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ name, email, phone }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          alert('Successfully updated your personal details');
        });
      } else {
        res.json().then((err) => alert(err));
      }
    });
    setLoading(false);
  };

  const handleEmployeeWorkDetailsUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(``, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ nssf, nhif, kra, pwd }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          alert('Successfully updated your work details');
        });
      } else {
        res.json().then((err) => alert(err));
      }
    });
    setLoading(false);
  };

  const handleEmployeeUpdatePassword = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(``, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ password, confirm_password: cPassword }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          alert('Successfully updated your password');
        });
      } else {
        res.json().then((err) => alert(err));
      }
    });
    setLoading(false);
  };

  return (
    <div className='employee-edit-profile-container'>
      <EmployeeNavBar />
      <section className='employee-edit-profile-body'>
        <EmployeeHeader />
        <section className='employee-edit-profile'>
          <h1>Edit profile</h1>
          <form onSubmit={handleEmployeePersonalDetailsUpdate}>
            <div>
              <section>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  placeholder='John Doe'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </section>
              <section>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  name='email'
                  placeholder='example@aol.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </section>
              <section>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='text'
                  name='phone'
                  placeholder='0712 345 678'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </section>
            </div>
            <button type='submit'>
              {loading ? <BarLoader color='#36d7b7' /> : 'Update Profile'}
            </button>
          </form>
        </section>
        <hr
          style={{ backgroundColor: '#ccc', width: '75%', marginLeft: '2rem' }}
        />
        <section className='employee-edit-profile'>
          <h1>Change Work Details</h1>
          <form onSubmit={handleEmployeeWorkDetailsUpdate}>
            <div>
              <section>
                <label htmlFor='nhif'>NHIF Member No.</label>
                <input
                  type='text'
                  name='nhif'
                  placeholder='Member No.'
                  value={nhif}
                  onChange={(e) => setNhif(e.target.value)}
                />
              </section>
              <section>
                <label htmlFor='nssf'>NSSF No.</label>
                <input
                  type='text'
                  name='nssf'
                  placeholder='NSSF No.'
                  value={nssf}
                  onChange={(e) => setNssf(e.target.value)}
                />
              </section>
              <section>
                <label htmlFor='kra'>KRA Pin No.</label>
                <input
                  type='text'
                  name='kra'
                  placeholder='Eg A1244521582'
                  value={kra}
                  onChange={(e) => setKra(e.target.value)}
                />
              </section>
              <section>
                <label htmlFor='pwd'>
                  PWD No. (If not applicable, type N/A)
                </label>
                <input
                  type='text'
                  name='pwd'
                  placeholder='PWD No.'
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
              </section>
            </div>
            <button type='submit'>
              {loading ? <BarLoader color='#36d7b7' /> : 'Update Details'}
            </button>
          </form>
        </section>
        <hr
          style={{ backgroundColor: '#ccc', width: '75%', marginLeft: '2rem' }}
        />
        <section className='employee-edit-profile'>
          <h1>Change Password</h1>
          <form onSubmit={handleEmployeeUpdatePassword}>
            <div>
              <section>
                <label htmlFor='pass'>Password</label>
                <input
                  type='password'
                  name='pass'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </section>
              <section>
                <label htmlFor='password'>Confirm Password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='Confirm Password'
                  value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
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
