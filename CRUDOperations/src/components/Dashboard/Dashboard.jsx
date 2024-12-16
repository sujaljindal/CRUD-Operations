import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import bookmark from '../../assets/bookmark 1.png';
import cap from '../../assets/graduation-cap 1.png';
import usd from '../../assets/usd-square 1.png';
import vector from '../../assets/Vector.png';

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      const students = JSON.parse(savedStudents);
      setUserCount(students.length);
    }
  }, []);

  useEffect(() => {
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      const courses = JSON.parse(savedCourses);
      setCourseCount(courses.length);

      const savedStudents = localStorage.getItem('students');
      if (savedStudents) {
        const students = JSON.parse(savedStudents);

        const totalPaymentSum = courses.reduce((sum, course) => {
          const studentCount = students.filter(
            (student) => student.coursename === course.name
          ).length;
          return sum + studentCount * course.price;
        }, 0);

        setTotalPayment(totalPaymentSum);
      }
    }
  }, []);

  return (
    <div className="main-page">
      <div className="search-bar">
        <p>DASHBOARD</p>
      </div>
      <div className="box">
        <div className="box-item">
          <img src={bookmark} alt="bookmark" />
          <h1>Students</h1>
          <p>{userCount}</p>
        </div>

        <div className="box-item">
          <img src={cap} alt="graduation cap" />
          <h1>Courses</h1>
          <p>{courseCount}</p>
        </div>

        <div className="box-item">
          <img src={usd} alt="USD" />
          <h1>Total Payment</h1>
          <p>Rs. {totalPayment}</p>
        </div>

        <div
          className="box-item"
          id="user-box"
          style={{ backgroundColor: 'yellow' }}
        >
          <img className="user-img1" src={vector} alt="vector" />
          <h1 className="user">Users</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
