import React from "react";
import './tutorsDetails.css'
import Footer from "../footer/footer";
import { Navigate, useNavigate } from "react-router-dom";

function Tutors() {
  const data = [
    {
      index: 0,
      img: 'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/d7c36a24-90af-4eb7-a40e-6d402063c333/barry-pollard-200x200.jpg',
      name: 'John',
      gender: 'Male',
      age: 25,
      studyLevel: 'Bachelors',
      experience: '3yrs',
    },
    {
      index: 1,
      img: 'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/d7c36a24-90af-4eb7-a40e-6d402063c333/barry-pollard-200x200.jpg',
      name: 'Alice',
      gender: 'Female',
      age: 28,
      studyLevel: 'Masters',
      experience: '5yrs',
    },
    {
      index: 2,
      img: 'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/d7c36a24-90af-4eb7-a40e-6d402063c333/barry-pollard-200x200.jpg',
      name: 'Bob',
      gender: 'Male',
      age: 22,
      studyLevel: '+2',
      experience: '2yrs',
    },
    {
      index: 3,
      img: 'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/d7c36a24-90af-4eb7-a40e-6d402063c333/barry-pollard-200x200.jpg',
      name: 'Eva',
      gender: 'Female',
      age: 30,
      studyLevel: 'SEE',
      experience: '4yrs',
    }
  ];
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/detail');
  }
  return (
    <div className="wrap">
      <div className="wrapper">
        {
          data.map((datas) => (
            <div className="personContainer">
              <div className="mainDiv">
                <div className="infoContainer" onClick={handleClick}>
                  <img className="personImage" src={datas.img} alt="Person" />
                  <div className="personInfo">
                    <p className="personName">{datas.name}</p>
                    {/* <div className="personInfo2">
                    <p className="personDetails">{datas.gender}, {datas.age}<i>&#183;</i></p>
                    <p className="personDetails"><i>&#183;</i>Qualification : {datas.studyLevel}</p>
                    <p className="personDetails">Experience : {datas.experience}</p>
                  </div> */}
                    <div className="personDetails">
                      {datas.gender},{datas.age}
                      <span>&#183;</span>
                      {datas.studyLevel}
                      <span>&#183;</span>
                      {datas.experience}
                    </div>
                  </div>
                  <button>ViewProfile</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Tutors;