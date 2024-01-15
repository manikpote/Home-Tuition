import React from "react";
import { useState } from "react";
import './dropDown.css';

const Dropdown = () => {

  const [selectOption, setSelectOption] = useState('');

  const handleSelectChange =(e)=>{
    setSelectOption(e.target.value);
  }

  return (
    <>
      <div className="dropdown-background">
        <div>
          <p className="text-tutor">Search for a tutor!{selectOption}</p>
          <div className="options">
            <select>
              <option>For Grade</option>
              <option value="option1">Grade 1-4</option>
              <option value="option2">Grade 5-8</option>
              <option value="option3">Grade 9-10</option>
              <option value="option4">+2</option>
            </select>
            <select>
              <option>For Subject</option>
              <option value="opt1">Science</option>
              <option value="opt2">Mathematics</option>
              <option value="opt3">Nepali</option>
              <option value="opt4">Social</option>
            </select>
            <button className="dropDown-search" onClick={handleSelectChange}>Search</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Dropdown;