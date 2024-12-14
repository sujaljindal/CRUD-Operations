import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStudentContext } from '../../context/StudentContext';
import './EditStudents.css'

const EditStudent = () => {
  const { state } = useLocation();
  const { student, index } = state || {}; 
  const navigate = useNavigate();
  const { students, setStudents } = useStudentContext();

  if (!student || index === undefined) {
    navigate('/students'); 
    return null;
  }

  
  const [name, setName] = useState(student.name );
  const [email, setEmail] = useState(student.email);
  const [phone, setPhone] = useState(student.phone);
  const [enrollNo, setEnrollNo] = useState(student.enrollNo );
  const [date, setDate] = useState(student.date);
  const [coursename,setCoursename] = useState(student.coursename);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStudent = { name, email, phone, enrollNo, date,coursename };
    const updatedStudents = [...students];
    updatedStudents[index] = updatedStudent; 

    setStudents(updatedStudents); 
    localStorage.setItem('students', JSON.stringify(updatedStudents)); 
    navigate('/students'); 
  };

  return (
    <div className="form-container">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Enrollment No:
          <input
            type="text"
            value={enrollNo}
            onChange={(e) => setEnrollNo(e.target.value)}
          />
        </label>
        <label>
          Date of Admission:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          CourseName:
          <input
            type="text"
            value={coursename}
            onChange={(e) => setCoursename(e.target.value)}
          />
        </label>

        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
