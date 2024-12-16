import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudentContext } from '../../context/StudentContext';
import './Course.css';

const Course = () => {
  const navigate = useNavigate();
  const { courses, setCourses } = useStudentContext();

  const handleDelete = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  const handleEdit = (index) => {
    const courseToEdit = courses[index];
    navigate('/course/edit', { state: { course: courseToEdit, index } });
  };

  const handleViewStudents = (course) => {
    navigate('/students/list', { state: { courseName: course.name, courseId: course.courseId } });
  };

  return (
    <div className="main-page">
      <div className="search-bar">
        <p>Course List</p>
      </div>
      <div className="std">
        <div className="head">
          <h1 className="title">Course List</h1>
          <button className="new-std" onClick={() => navigate('/course/addcourse')}>
            Add New Course
          </button>
        </div>
      </div>
      <div className="data">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course ID</th>
              <th>Edit/Delete</th>
              <th>View Student List</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.courseId}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleViewStudents(course)}>Student List</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Course;
