import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useStudentContext } from '../../context/StudentContext';

const Payment = () => {
  const navigate = useNavigate();
  const { courses, setCourses, students } = useStudentContext();

  const getStudentCount = (courseName) => {
    return students.filter((student) => student.coursename === courseName).length;
  };
  const totalPaymentSum = courses.reduce((sum, course) => {
    const studentCount = getStudentCount(course.name);
    return sum + studentCount * course.price;
  }, 0);
  
  console.log(totalPaymentSum)
  return (
    <div className="main-page">
      <div className="search-bar">
        <p>Total Payment</p>
      </div>
      <div className="std">
        <div className="head">
          <h1 className="title">Total Payment</h1>
          {/* <button className="new-std" onClick={() => navigate('/course/addcourse')}>
            Add New Course
          </button> */}
        </div>
      </div>
      <div className="data">
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course ID</th>
              <th>Price</th>
              <th>No. of Students</th>
              <th>Total Payment</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.courseId}</td> 
                <td>{course.price}</td>
                <td>{getStudentCount(course.name)}</td>
                <td>{getStudentCount(course.name)*course.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Payment
