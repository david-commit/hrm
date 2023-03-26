import EmployeeNavBar from '../navbar/navbar';
import './oney.css';
import React from 'react';
import EmployeeHeader from '../header/EmployeeHeader';
import { FaDownload } from 'react-icons/fa';
import { Bar, Line } from 'react-chartjs-2';
import Payslip from '../../../Components/finance/payslip';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function EmployeeMoney() {
  const data = {
    labels: ['Item 1', 'Item 2'],
    datasets: [
      {
        label: 'Item 1',
        data: [82, 100],
        borderColor: 'black',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Item 2',
        data: [40, 80],
        borderColor: 'black',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const yearlyData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Amount paid in Ksh',
        data: [82, 74, 54, 59, 77, 85, 78, 75, 70, 80, 90, 100],
        borderColor: 'black',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const employee = {
    name: 'John Smith',
    earnings: [
      { description: 'Salary', amount: 5000 },
      { description: 'Bonus', amount: 1000 },
    ],
    deductions: [
      { description: 'Tax', amount: 1000 },
      { description: 'Insurance', amount: 500 },
    ],
  };

  return (
    <section id='employee-cont'>
      <EmployeeNavBar />
      <section id='employee-money'>
        <EmployeeHeader />

        <div id='employee-money-cont1'>
          <p>This week</p>
          <div id='employee-money-week'>
            <span className='employee-money-week-stats'>
              Days present
              <br />
              4/5
            </span>
            <span className='employee-money-week-stats'>
              Money Made <br />
              Ksh 13500
            </span>
            <span className='employee-money-week-stats'>
              Deductions <br />
              Ksh 350
            </span>
            <span className='employee-money-week-stats'>
              Performance Rewiew <br /> 85%
            </span>
          </div>
        </div>

        <div id='employee-money-cont2'>
          <div id='employee-money-cont2-1'>
            <p>Last week's overview</p>
            <Bar
              data={data}
              options={{
                responsive: true,
              }}
            />
          </div>

          <div id='employee-money-cont2-2'>
            <p>Wages comparison</p>
          </div>
        </div>
        <div id='employee-money-cont3'>
          <div id='employee-money-cont3-2'>
            <p>Monthly payroll</p>
            <Bar
              data={yearlyData}
              options={{
                responsive: true,
              }}
            />
          </div>
        </div>
      </section>
      <aside id='employee-payroll'>
        {/* <button id='button-payslip'>
          <FaDownload />
          <p>Download Payslip</p>
          <Payslip employee={employee} />
        </button> */}
        <button id='button-payslip'>
          <Payslip employee={employee} />
        </button>
      </aside>
      <br />
    </section>
  );
}
