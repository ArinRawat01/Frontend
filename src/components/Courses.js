import React from 'react';
import './Courses.css';

function Courses() {
  const courses = [
    { 
      id: 1, 
      name: 'Web Development', 
      image: '/images/course2.jpeg', 
      duration: '3 Months', 
      price: '₹4999'
    },
    { 
      id: 2, 
      name: 'Data Science', 
      image: '/images/course3.jpeg', 
      duration: '6 Months', 
      price: '₹7999'
    },
    { 
      id: 3, 
      name: 'AI and ML', 
      image: '/images/course1.jpeg', 
      duration: '4 Months', 
      price: '₹2999'
    },
    { 
      id: 4, 
      name: 'Android Development', 
      image: '/images/course3.jpg', 
      duration: '5 Months', 
      price: '₹4999'
    },
  ];

  return (
    <div className="courses">
      <h2>Courses Offered</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Price:</strong> {course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
