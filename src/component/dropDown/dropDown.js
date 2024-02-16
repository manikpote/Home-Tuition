import React from 'react';
import DropdownMenu from './dropdownMenu';
import './dropDown.css';


function Dropdown() {
  return (
    <>
      <div className='dropdown' style={{
        height: '70vh',
        backgroundColor: 'rgb(231, 226, 226)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div>
        <p className="text-tutor">Search for a tutor!</p>
        <DropdownMenu />
        </div>
      </div>
    </>
  )
}
export default Dropdown;