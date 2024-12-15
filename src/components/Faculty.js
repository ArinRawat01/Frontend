import React from 'react';
import './Faculty.css';

function Faculty() {
  const faculty = [
    { id: 1, name: 'Dr. Vishal Lohan', image: '/images/faculty1.jpeg', description: 'Expert in Backend Development.' },
    { id: 2, name: 'Prof. Ruchika banerjee', image: '/images/faculty2.jpeg', description: 'Specialist in Software Engineering.' },
    { id: 3, name: 'Dr. Shahina Anwarul', image: '/images/faculty3.jpeg', description: 'Researcher in Machine Learning and Big Data.' },
  ];

  return (
    <div className="faculty">
      <h2>Faculty Information</h2>
      <div className="faculty-list">
        {faculty.map((member) => (
          <div key={member.id} className="faculty-card">
            <div className="faculty-info">
              <p className="faculty-name">{member.name}</p>
              <p className="faculty-description">{member.description}</p>
            </div>
            <img src={member.image} alt={member.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
