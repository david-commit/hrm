import React from 'react';
import './ClientApprovals.css';
import '../signup/signup.css';
import ClientBar from '../navbar/navbar';
import ClientHeader from '../home/header';

const ClientApprovals = () => {
  return (
    <section className='client-approvals-container'>
      <ClientBar />
      <section className='client-approvals-body'>
        <ClientHeader message='Its payday approve payments' />
        <section className='client-approvals'>
          <form>
            <h3>Set up dates for payment</h3>
            <input type='date' /> <br />
            <button type='submit'>Update</button>
          </form>

          <div>
            <h3>Approve payment</h3>
            <article>
              <p>Approve payment for casual employees</p>
              <button>Approve</button>
            </article>

            <article>
              <p>Approve payment for permanent employees</p>
              <button>Approve</button>
            </article>

            <article>
              <p>Approve payment for seasonal employees</p>
              <button>Approve</button>
            </article>

            <article>
              <p>Approve payment for casual employees</p>
              <button>Approve</button>
            </article>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ClientApprovals;
