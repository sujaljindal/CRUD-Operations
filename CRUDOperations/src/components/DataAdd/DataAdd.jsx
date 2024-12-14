import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudentContext } from '../../context/StudentContext'; 
import './DataAdd.css';

const DataAdd = () => {
  const navigate = useNavigate();
  const { handleAddStudent } = useStudentContext(); 
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    phone: '',
    enrollNo: '',
    date: '',
    coursename:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddStudent(newStudent); 
    navigate('/students'); 
  };

  return (
    <div className="add-student">
      <h1 className='heading'>Add New Student</h1>
      <form className="form-details" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={newStudent.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="enrollNo"
          placeholder="Enrollment Number"
          value={newStudent.enrollNo}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={newStudent.date}
          onChange={handleChange}
        />
        <input type="text"
        name="coursename"
        value={newStudent.coursename}
        onChange={handleChange} />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default DataAdd;
