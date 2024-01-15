import React from 'react';
import './aboutUs.css';
import Footer from '../footer/footer';

const AboutUs = () => {
  return (
    <div className='info'>
      <div className='AboutUs'>
        <h2 className="heading">About Home Tuition</h2>

        <div className="section">
          <h3 className="subHeading">Our Mission</h3>
          <p className="paragraph">
            Home Tuition is on a mission to simplify the process of finding qualified tutors for students from grade 1
            upto +2 level. We understand the importance of personalized learning, and our platform is designed to connect
            students with experienced tutors who can provide the assistance they need in specific subjects.
          </p>
        </div>

        <div className="section">
          <h3 className="subHeading">Who We Are</h3>
          <p className="paragraph">
            We are a passionate team of educators and technologists committed to enhancing the learning experience for
            students. We bring a unique blend of expertise to Home Tuition.
          </p>
          <p className="paragraph">
            From creating an intuitive platform to fostering a supportive learning environment, our team is dedicated to
            empowering students on their educational journey.
          </p>
        </div>

        <div className="section">
          <h3 className="subHeading">What Sets Us Apart</h3>
          <ul className="list">
            <li>Qualified Tutors : Our platform features a carefully curated selection of experienced tutors, ensuring that
              students receive the highest quality assistance.
            </li>
            <li>User-Friendly Interface : We've designed an intuitive and easy-to-use platform that simplifies the process of
              finding and connecting with tutors.
            </li>
            <li>Personalized Learning : We believe in the power of personalized education. Our platform allows students to
              find tutors who can cater to their unique learning needs.
            </li>
          </ul>
        </div>

        <div className="section">
          <h3 className="subHeading">Why Choose Us</h3>
          <ul className="list">
            <li>Comprehensive Tutor Profiles : Each tutor on our platform has a detailed profile, showcasing their expertise,
              qualifications, and teaching style.
            </li>
            <li>Secure and Transparent : Our platform prioritizes the safety and security of both students and tutors. We
              maintain transparency throughout the process.
            </li>
          </ul>
        </div>

        <div className="section">
          <h3 className="subHeading">Join Us on this Educational Journey</h3>
          <p className="paragraph">
            We invite students, parents, and educators to join us on this educational journey. Explore Home Tuition to
            discover the perfect tutor for your learning needs. If you have any questions or feedback, you can contact us.
          </p>
          <p className="paragraph">
            Thank you for being part of the Home Tuition community, where learning knows no boundaries!
          </p>
        </div>
      </div>
      <p className='a'>a</p>
      <Footer />
    </div>
  );
};

export default AboutUs;