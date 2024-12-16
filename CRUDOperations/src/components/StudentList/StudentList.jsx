import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStudentContext } from '../../context/StudentContext';

const StudentList = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { students} = useStudentContext();

  const filteredStudents = students.filter(
    (student) => student.coursename === state.courseName
  );
  

  return (
    <div className="main-page">
      <h1 className='head'>Students Enrolled in the Course</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
      {filteredStudents.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Enroll No</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.enrollNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students are enrolled in this course.</p>
      )}
    </div>
  );
};

export default StudentList;
