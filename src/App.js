import React from 'react';
import { Routes, Route,NavLink } from 'react-router-dom';
// const LazyNavBar = React.lazy(() => import('./component/navbar/navBar'));
// const LazyLogin = React.lazy(() => import('./component/login_page/login'));
// const LazySignUp = React.lazy(() => import('./component/login_page/signUp'));
// const LazyHome = React.lazy(() => import('./component/home'));
// const LazyAboutUs = React.lazy(() => import('./component/aboutUs/aboutUs'));
import NavBar from './component/navbar/navBar';
import { FadeLoader } from 'react-spinners';
import Login from './component/login_page/login';
import Hero from './component/heroSection/hero';
import SignUp from './component/login_page/signUp';
import Home from './component/home';
import AboutUs from './component/aboutUs/aboutUs';
import Tutors from './component/tutorsDetails/tutorsDetails';
import Tutor from './component/tutorsDetails/datas';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      {/* <Tutors/> */}
      <Routes>
        {/* <Route exact path='/' element={<React.Suspense fallback=""><LazyHome/></React.Suspense>} />
        <Route path='/home' element={<React.Suspense fallback=""><LazyHome/></React.Suspense>} />
        <Route path='/about' element={<React.Suspense fallback=""><LazyAboutUs/></React.Suspense>} />
        <Route path='/sign' element={<React.Suspense fallback=""><LazySignUp/></React.Suspense>} />
        <Route path='/login' element={<React.Suspense fallback=""><LazyLogin /></React.Suspense>} /> */}
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/sign' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      {/* <Hero/> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;