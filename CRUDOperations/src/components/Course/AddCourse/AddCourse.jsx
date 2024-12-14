import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudentContext } from '../../../context/StudentContext'; 
import './AddCourse.css';

const AddCourse = () => {
  const navigate = useNavigate();
  const { handleAddCourses } = useStudentContext(); 
  const [newCourse, setNewCourse] = useState({
    name: '',
    courseId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCourses(newCourse); 
    navigate('/Course'); 
  };

  return (
    <div className="add-student">
      <h1 className='heading'>Add New Course</h1>
      <form className="form-details" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newCourse.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="courseId"
          placeholder="Course ID"
          value={newCourse.courseId}
          onChange={handleChange}
        />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
