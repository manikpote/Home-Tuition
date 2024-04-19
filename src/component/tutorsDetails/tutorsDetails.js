import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { data } from "../../data"
import "./tutorsDetails.css"
import Footer from '../footer/footer';
import DropdownMenu from '../dropDown/dropdownMenu';

function TutorsDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const grade = searchParams.get('grade');
  const subject = searchParams.get('subject');

  const filteredData = data.filter((datas) => {
    return datas.grades.includes(grade) && datas.field.includes(subject);
  });

  const viewProfile = (id) => {
    navigate(`/tutor?id=${id}`);
  };

  return (
    <>
      <div className="wrap">
        <div className="wrapper">
          <div style={{
            padding: '3em',
            // '@media (max-width: 700px)': {
            //   backgroundColor: 'blue',
            // }
          }}>
            <DropdownMenu />
          </div>
          <div>
            {filteredData.length > 0 ? (
              filteredData.map((datas) => (
                <div className="personContainer" key={datas.id}>
                  <div className="mainDiv">
                    <div className="infoContainer" key={datas.id} onClick={() => viewProfile(datas.id)}>
                      <img className="personImage" src={datas.img} alt="Person" />
                      <div className="personInfo">
                        <div className="personName">{datas.first_name} {datas.last_name}</div>
                        <div className="personDetails">
                          {datas.gender}, {datas.age}
                          <span>&#183;</span>
                          {datas.studyLevel}
                          <span>&#183;</span>
                          {datas.experience}
                        </div>
                      </div>
                      <button>View Profile</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Oops, sorry, no result found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TutorsDetails;
