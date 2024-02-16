import React, { useState } from 'react';
import { data } from '../../data';
import "../tutorsDetails/tutorsDetails.css"

function AnotherComponent() {
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // const handleGradeChange = (e) => {
  //   const selectedGrade = e.target.value;
  //   setGrade(selectedGrade);
  //   console.log("Selected Grade:", grade);
  // }

  // const handleSubjectChange = (e) => {
  //   const selectedSubject = e.target.value;
  //   setSubject(selectedSubject);
  //   console.log("Selected Subject:", selectedSubject);
  // }

  const handleSelectChange = () => {
    const filteredResult = data.filter((datas) => {
      // return datas.grades.includes(grade) && datas.field.includes(subject); 
      return datas.grades && datas.grades.includes(grade) && datas.field && datas.field.includes(subject);
    })
    setFilteredData(filteredResult);
  }
  const handleClick = () => {

  }
  // console.log(filteredData);
  return (
    <>
      <div className="dropdown-background">
        <div>
          <p className="text-tutor">Search for a tutor!</p>
          <div className="options">
            <select onChange={(e) => setGrade(e.target.value)}>
              <option>For Grade</option>
              <option>Grade 1-4</option>
              <option>Grade 5-8</option>
              <option>Grade 9-10</option>
              <option>+2</option>
              {/* <option>For Grade</option>
              <option>1to4</option>
              <option>4to8</option>
              <option>9to10</option>
              <option>+2</option> */}
            </select>
            <select onChange={(e) => setSubject(e.target.value)}>
              <option>For Subject</option>
              <option>Science</option>
              <option>Mathematics</option>
              <option>Nepali</option>
              <option>Social</option>
              {/* <option>For Subject</option>
              <option>science</option>
              <option>mathematics</option>
              <option>nepali</option>
              <option>social</option> */}
            </select>
            <button className="dropDown-search" onClick={handleSelectChange}>Search</button>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="wrapper">
          {
            filteredData.length > 0 ? (
              filteredData.map((datas) => (
                <div className="personContainer" key={datas.id}>
                  <div className="mainDiv">
                    <div className="infoContainer" onClick={handleClick} key={datas.id}>
                      <img className="personImage" src={datas.img} alt="Person" />
                      <div className="personInfo">
                        <p className="personName">{datas.name}</p>
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
            ) : (<p>No results found</p>)
          }
        </div>
        {/* <Footer/> */}
      </div>
    </>
  )
}

export default AnotherComponent;