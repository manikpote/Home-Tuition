import React from 'react';
import './footer.css';
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <div>
        <h1>HomeTuition</h1>
        <p>&copy;2024, by Manik</p>
      </div>
      <div>
        <p className='headingFooter'>Links</p>
        <p onClick={() => navigate('/home')} className='listFooter'>Home</p>
        <p onClick={() => navigate('/about')} className='listFooter'>About</p>
      </div>
      <div>
        <p className='headingFooter'>Contact Us</p>
        <a href="mailto:nextstep7557@gmail.com" target='_blank'>
          <MdEmail className='icons' />
        </a>
        <a href='https://www.facebook.com/profile.php?id=100087907826684' target="_blank" >
          <FaFacebookF className='icons' />
        </a>
        <a href="https://www.instagram.com/nextstep.np/" target="_blank">
          <FaInstagram className='icons' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;