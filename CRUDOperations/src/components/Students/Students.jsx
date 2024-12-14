import React from 'react';
import './Students.css';
import { useNavigate } from 'react-router-dom';
import { useStudentContext } from '../../context/StudentContext';

const Students = () => {
  const navigate = useNavigate();
  const { students, setStudents } = useStudentContext();

  const handleDelete = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents); 
    localStorage.setItem('students', JSON.stringify(updatedStudents)); 
  };

  const handleEdit = (index) => {
    const studentToEdit = students[index];
    navigate('/students/edit', { state: { student: studentToEdit, index } });
  };

  return (
    <div className="main-page">
      <div className="search-bar">
        <p>Student Page</p>
      </div>
      <div className="std">
        <div className="head">
          <h1 className="title">Student Page</h1>
          <button
            className="new-std"
            onClick={() => navigate('/students/add')}
          >
            Add New Student
          </button>
        </div>
        <div className="data">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Enroll No</th>
                <th>Date of Admission</th>
                <th>Course</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.enrollNo}</td>
                  <td>{student.date}</td>
                  <td>{student.coursename}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
