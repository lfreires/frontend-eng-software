import Home from './components/Home';
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import RegisterMentor from './components/RegisterMentor';
import RegisterMentored from './components/RegisterMentored';
import Main from './components/Main';
import Login from './components/Login';
import LoginPage from './components/LoginPage';

AOS.init();

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register-mentor' element={<RegisterMentor />} />
        <Route path='/register-mentored' element={<RegisterMentored />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-page' element={<LoginPage />} />
        <Route path='/home' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
