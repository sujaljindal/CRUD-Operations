import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStudentContext } from '../../../context/StudentContext';
import './EditCourse.css';

const EditCourse = () => {
  const { state } = useLocation();
  const { course, index } = state || {};
  const navigate = useNavigate();
  const { courses, setCourses } = useStudentContext();

  if (!course || index === undefined) {
    navigate('/course');
    return null;
  }

  const [courseName, setCourseName] = useState(course?.name || '');
  const [courseId, setCourseId] = useState(course?.courseId || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCourse = { name: courseName, courseId };
    const updatedCourses = [...courses];
    updatedCourses[index] = updatedCourse;

    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
    navigate('/course');
  };

  return (
    <div className="form-container">
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Course Name:
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </label>
        <label>
          Course ID:
          <input
            type="text"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Update Course</button>
      </form>
    </div>
  );
};

export default EditCourse;
