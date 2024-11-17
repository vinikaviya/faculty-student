
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login"
import Enrollsubject from './Enroll-sub';
import BarChartComponent from './Faculty-dashboard';
import Student from './student';
import FacultyProfile from "./Profile"


import Studentdetails from "./Student-details";
import Assignment from "./Assignment"
import Result from "./Result";
import StudentDashboard from "./Student-dashboard";

function App() {
  return (
    // Wrap the entire application in Router
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Faculty-dashboard" element={<BarChartComponent />} />
        <Route path="/Profile" element={<FacultyProfile />} />
        <Route path="/Faculty" element={<Enrollsubject />} />
        <Route path="/student" element={<Student />} />
        
        <Route path="/Login" element={<Login />} />

        <Route path="/Student-dashboard" element={<StudentDashboard />} />
        <Route path="/Assignment" element={<Assignment />} />
        <Route path="/Student-details" element={<Studentdetails />} />
        <Route path="/Result" element={<Result />} />


      </Routes>
    </Router>
  );
}

export default App;
