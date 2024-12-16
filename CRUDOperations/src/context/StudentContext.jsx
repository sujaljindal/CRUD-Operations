import React, { createContext, useState, useContext } from 'react';

const StudentContext = createContext();

export const useStudentContext = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students');
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem('courses');
    return savedCourses ? JSON.parse(savedCourses) : [];
  });

  const handleAddCourses = (newCourses) => {
    const updatedCourses = [...courses, newCourses];
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  const handleAddStudent = (newStudent) => {
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };
  

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        courses,
        setCourses,
        handleAddCourses,
        handleAddStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
