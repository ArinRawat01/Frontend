import React from 'react';
import './ExamSchedule.css';

function ExamSchedule() {
  return (
    <div className="exam-schedule">
      <h2>Examination Schedule</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Date</th>
            <th>Time</th>
            <th>Mode</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Web Development</td>
            <td>14th Dec 2024</td>
            <td>10:00 AM to 12:00 PM</td>
            <td>Online</td>
            <td><a href="https://exam-link.com" target="_blank" rel="noopener noreferrer">Join Exam</a></td>
          </tr>
          <tr>
            <td>AI & ML</td>
            <td>15th Dec 2024</td>
            <td>10:00 AM to 12:00 PM</td>
            <td>Online</td>
            <td><a href="https://exam-link.com" target="_blank" rel="noopener noreferrer">Join Exam</a></td>
          </tr>
          <tr>
            <td>Data Science</td>
            <td>15th Dec 2024</td>
            <td>10:00 AM to 12:00 PM</td>
            <td>Online</td>
            <td><a href="https://exam-link.com" target="_blank" rel="noopener noreferrer">Join Exam</a></td>
          </tr>
          <tr>
            <td>Android Development</td>
            <td>16th Dec 2024</td>
            <td>10:00 AM to 12:00 PM</td>
            <td>Online</td>
            <td><a href="https://exam-link.com" target="_blank" rel="noopener noreferrer">Join Exam</a></td>
          </tr>
        </tbody>
      </table>

      <div className="exam-instructions">
        <h3>Instructions</h3>
        <div className="online-instructions">
          <ul>
            <li>Ensure a stable internet connection for the duration of the exam.</li>
            <li>Use a laptop or desktop for the best experience. Avoid mobile devices.</li>
            <li>Log in at least 15 minutes before the exam starts to check your setup.</li>
            <li>Keep your camera and microphone on throughout the exam. No external assistance is allowed.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExamSchedule;
