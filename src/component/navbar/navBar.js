import './navBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }

  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }
  return (
    <>
      <div>
        <nav>
          <ul className='sidebar'>
            <li onClick={hideSidebar}><a><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a></li>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/sign">Sign up</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            {/* <li><a href="#">Become a Tutor</a></li> */}
          </ul>
          <ul>
            <li className='homeBtn'><a href="#">Home<br />Tution</a></li>
            <div>
              <li className='hideOnMobile'><NavLink to="/home">Home</NavLink></li>
              <li className='hideOnMobile'><NavLink to="/about">About Us</NavLink></li>
              <li className='hideOnMobile'><NavLink to="/sign">Sign up</NavLink></li>
              <li className='hideOnMobile'><NavLink to="/login">Login</NavLink></li>
              {/* <li className='hideOnMobile'><a href="#">Become a Tutor</a></li> */}
              <li className='show-sidebar' onClick={showSidebar}><a><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a></li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
} 