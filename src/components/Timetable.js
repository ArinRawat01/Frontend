import React from 'react';
import './Timetable.css';

function Timetable() {
  return (
    <div className="timetable">
      <h2>Timetable</h2>
      <table className="timetable-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9:00 AM - 11:00 AM</td>
            <td>Web Development<br />Dr. Vishal Lohan</td>
            <td>AIML<br />Dr. Ruchika Banerjee</td>
            <td>Data Science<br />Dr. Ruchika Banerjee</td>
            <td>Web Development<br />Dr. Vishal Lohan</td>
            <td>AIML<br />Dr. Ruchika Banerjee</td>
            <td>Data Science<br />Dr. Shahina Anwarul</td>
            <td className="holiday">Holiday</td>
          </tr>
          <tr>
            <td>11:00 AM - 1:00 PM</td>
            <td>Data Science<br />Dr. Shahina Anwarul</td>
            <td>Web Development<br />Dr. Vishal Lohan</td>
            <td>AIML<br />Dr. Ruchika Banerjee</td>
            <td>Data Science<br />Dr. Shahina Anwarul</td>
            <td>Web Development<br />Dr. Vishal Lohan</td>
            <td>AIML<br />Dr. Ruchika Banerjee</td>
            <td className="holiday">Holiday</td>
          </tr>
          <tr>
            <td>1:00 PM - 3:00 PM</td>
            <td>AIML<br />Dr. Ruchika Banerjee</td>
            <td>Data Science<br />Dr. Shahina Anwarul</td>
            <td>Web Development<br />Dr. Vishal Lohan</td>
            <td>AIML<br />Dr. Ruchika Banerjee</td>
            <td>Data Science<br />Dr. Shahina Anwarul</td>
            <td>Web Development<br />Dr. Vishal Lohan</td>
            <td className="holiday">Holiday</td>
          </tr>
          <tr>
            <td>3:00 PM - 5:00 PM</td>
            <td>Web Development<br />Dr. Vishal Lohan</td>
            <td>AIML<br />Dr. Ruchika Banerjee</td>
            <td>Data Science<br />Dr. Shahina Anwarul</td>
            <td>Web Development<br />Dr. Vishal Lohan</td>
            <td>AIML<br />Dr. Ruchika Banerjee</td>
            <td>Data Science<br />Dr. Shahina Anwarul</td>
            <td className="holiday">Holiday</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;
