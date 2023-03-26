import './profile.css';
import userAvatar from '../../../Assets/useravatar.png';

export default function EmployeeProfile() {
  return (
    <aside className='employee-side-profile'>
      <section className='user-profile-data'>
        <img src={userAvatar} alt='User avatar' />
        <h2>Enock Mokua</h2>
        <span>
          <span id='employee-profile-key'>Company:</span>
          <span id='employee-profile-value'>HRTech Inc</span>
        </span>
        <span>
          <span id='employee-profile-key'>Role:</span>
          <span id='employee-profile-value'>Software Engineer</span>
        </span>
        <span>
          <span id='employee-profile-key'>Job Group:</span>
          <span id='employee-profile-value'>B6</span>
        </span>
      </section>
    </aside>
  );
}
