// import React from "react";
// import './tutorsDetails.css'
// import Footer from "../footer/footer";
// import { Navigate, useNavigate } from "react-router-dom";
// import Dropdown from "../dropDown/dropDown";
// import { data } from "../../data";

// function Tutors() {

//   const navigate = useNavigate();
//   const handleClick=()=>{
//     navigate('/detail');
//   }
//   return (
//     <div className="wrap">
//       <div className="wrapper">
//         {
//           data.map((datas) => (
//             <div className="personContainer"  key={datas.id}>
//               <div className="mainDiv">
//                 <div className="infoContainer" onClick={handleClick}  key={datas.id}>
//                   <img className="personImage" src={datas.img} alt="Person" />
//                   <div className="personInfo">
//                     <p className="personName">{datas.name}</p>
//                     <div className="personDetails">
//                       {datas.gender},{datas.age}
//                       <span>&#183;</span>
//                       {datas.studyLevel}
//                       <span>&#183;</span>
//                       {datas.experience}
//                     </div>
//                   </div>
//                   <button>ViewProfile</button>
//                 </div>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//       <Footer/>
//       <Dropdown data={data}/>
//     </div>
//   )
// }

// export default Tutors;

// AnotherComponent.js


// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function AnotherComponent() {
//   const { grade, subject } = useParams();
//   console.log('Grade:', grade);
//   console.log('Subject:', subject);


//   // useEffect(() => {
//   //   const urlParams = new URLSearchParams(window.location.search);
//   //   const grade = urlParams.get('grade');
//   //   const subject = urlParams.get('subject');


//   //   if (grade === null || subject === null) {
//   //     console.error("Grade or Subject not found in URL");
//   //   } else {
//   //     console.log('Grade:', grade);
//   //     console.log('Subject:', subject);
//   //   }
//   // }, []);


//   return (
//     <>
//       <div className="tutors-details">
//         <h1>Tutors Details</h1>
//       </div>
//     </>
//   );
// }

// export default AnotherComponent;


import React from 'react';
import { useLocation } from 'react-router-dom';
import { data } from "../../data"
import "./tutorsDetails.css"
import Footer from '../footer/footer';
import DropdownMenu from '../dropDown/dropdownMenu';

function TutorsDetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const grade = searchParams.get('grade');
  const subject = searchParams.get('subject');

  const filteredData = data.filter((datas) => {
    return datas.grades.includes(grade) && datas.field.includes(subject);
  });

  return (
    <>
      <div className="wrap">

        <div className="wrapper">
          <div style={{
            padding: '3em',
          }}>
            <DropdownMenu />
          </div>
          <div>
            {
              filteredData.length > 0 ? (
                filteredData.map((datas) => (
                  <div className="personContainer" key={datas.id}>
                    <div className="mainDiv">
                      <div className="infoContainer" key={datas.id}>
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
              ) : (<p>Oops, sorry, no result found.</p>)
            }
          </div>
        </div>
      </div >
      <Footer />
    </>

  );
}

export default TutorsDetails;
