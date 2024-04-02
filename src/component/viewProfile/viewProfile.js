import React from 'react';
import './viewProfile.css'
import { data } from '../../data';
import { useLocation } from 'react-router-dom';
import Footer from '../footer/footer';

function TutorProfile() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const userData = data.find(item => item.id === parseInt(id));

  return (
    <>
      <div className='profileWrapper'>
        <div className='profileContainer'>
          <div className='userProfile'>
            <div className='userImage'>
              <img src={userData.img} />
            </div>
            <div className='userDetails'>
              <p className='userName'> {userData.first_name} {userData.last_name}</p>
              <p className='userGender'>{userData.gender} {userData.age}</p>
              <p>Email: {userData.email}</p>
              <p>Experience: {userData.experience}</p>
              <p>Subjects: {userData.field}</p>
              <p>Education: {userData.studyLevel}</p>
              <p>Teaching subject: {userData.field}</p>
              <p>For grade: {userData.grades}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default TutorProfile;
