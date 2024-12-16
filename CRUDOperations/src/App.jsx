import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Home from './components/Home/Home';
import Course from './components/Course/Course';
import Payment from './components/Payment/Payment';
import Students from './components/Students/Students';
import DataAdd from './components/DataAdd/DataAdd';
import EditStudent from './components/Students/EditStudents';
import Report from './components/Report/Report';
import Settings from './components/Settings/Settings';
import Dashboard from './components/Dashboard/Dashboard';
import AddCourse from './components/Course/AddCourse/AddCourse';
import EditCourse from './components/Course/EditCourse/EditCourse';
import StudentList from './components/StudentList/StudentList';

import { StudentProvider } from './context/StudentContext';

function App() {
  return (
    <BrowserRouter>
      <StudentProvider>
        <Routes>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="/students/list" element={<StudentList />} />


            <Route path="course" element={<Course />} />
            <Route path="course/addcourse" element={<AddCourse/>}/>
            <Route path="course/edit" element={<EditCourse/>}></Route>
            <Route path="students" element={<Students />} />
            <Route path="students/add" element={<DataAdd />} />
            <Route path="students/edit" element={<EditStudent />} />
            <Route path="payment" element={<Payment />} />
            <Route path="report" element={<Report />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </StudentProvider>
    </BrowserRouter>
  );
}

export default App;
