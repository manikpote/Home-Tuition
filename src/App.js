import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './component/navbar/navBar';
import Login from './component/login_page/login';
import SignUp from './component/login_page/signUp';
import Home from './component/home';
import AboutUs from './component/aboutUs/aboutUs';

import TutorsDetails from './component/tutorsDetails/tutorsDetails';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/sign' element={<SignUp />} />
        <Route path='/login' element={<Login />} />

        <Route path="/search" element={<TutorsDetails />} />
      </Routes>
    </div>
  );
}

export default App;