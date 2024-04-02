import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dropDown.css';

function DropdownMenu() {
  const navigate = useNavigate();
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');

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
    navigate(`/search?grade=${grade}&subject=${subject}`);
  }


  return (
    <>
      <div className="dropdown-background">
        <div>
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