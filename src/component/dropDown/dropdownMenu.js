// import React from "react";
// import { useState } from "react";
// import './dropDown.css';

// const Dropdown = ({data}) => {
//   const [grade, setGrade] = useState('');
//   const [subject, setSubject] = useState('');

//   const handleGradeChange = (e) => {
//     const selectedGrade = e.target.value;
//     setGrade(selectedGrade);
//     console.log("Selected Grade:", selectedGrade);
//   }

//   const handleSubjectChange = (e) => {
//     const selectedSubject = e.target.value;
//     setSubject(selectedSubject);
//     console.log("Selected Subject:", selectedSubject);
//   }

//   const handleSelectChange = () => { }

//   return (
//     <>
//       <div className="dropdown-background">
//         <div>
//           <p className="text-tutor">Search for a tutor!</p>
//           <div className="options">
//             <select onChange={handleGradeChange}>
//               <option>For Grade</option>
//               <option value="1to4">Grade 1-4</option>
//               <option value="5to8">Grade 5-8</option>
//               <option value="9to10">Grade 9-10</option>
//               <option value="+2">+2</option>
//             </select>
//             <select onChange={handleSubjectChange}>
//               <option>For Subject</option>
//               <option value="science">Science</option>
//               <option value="math">Mathematics</option>
//               <option value="nepali">Nepali</option>
//               <option value="social">Social</option>
//             </select>
//             <button className="dropDown-search" onClick={handleSelectChange}>Search</button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// };

// export default Dropdown;


import React, { useState, useEffect } from 'react';
import { data } from '../../data';
import { useNavigate } from 'react-router-dom';
import './dropDown.css';



function DropdownMenu() {
  const navigate = useNavigate();
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  // const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Read URL parameters on component mount and update state
    const urlParams = new URLSearchParams(window.location.search);
    const gradeParam = urlParams.get('grade') || '';
    const subjectParam = urlParams.get('subject') || '';

    setGrade(gradeParam);
    setSubject(subjectParam);
  }, []);

  const handleGradeChange = (e) => {
    const selectedGrade = e.target.value;
    setGrade(selectedGrade);
  }

  const handleSubjectChange = (e) => {
    const selectedSubject = e.target.value;
    setSubject(selectedSubject);
  }

  const handleClick = () => {
    // console.log("Grade:", grade);
    // console.log("Subject:", subject);

    

    // Update URL parameters on button click
    navigate(`/search?grade=${grade}&subject=${subject}`);
  }


  return (
    <>
      <div className="dropdown-background">
        <div>
          {/* <p className="text-tutor">Search for a tutor!</p> */}
          <div className="options">
            <select onChange={handleGradeChange} value={grade}>
              <option>For Grade</option>
              <option value="Grade 1-4">Grade 1-4</option>
              <option value="Grade 5-8">Grade 5-8</option>
              <option value="Grade 9-10">Grade 9-10</option>
              <option value="+2">+2</option>
            </select>
            <select onChange={handleSubjectChange} value={subject}>
              <option>For Subject</option>
              <option value="Science">Science</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Nepali">Nepali</option>
              <option value="Social">Social</option>
            </select>
            <button className="dropDown-search" onClick={handleClick}>Search</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default DropdownMenu;