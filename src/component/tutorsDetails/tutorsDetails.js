// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { data } from "../../data"
// import "./tutorsDetails.css"
// import Footer from '../footer/footer';
// import DropdownMenu from '../dropDown/dropdownMenu';

// function TutorsDetails() {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const grade = searchParams.get('grade');
//   const subject = searchParams.get('subject');

//   const filteredData = data.filter((datas) => {
//     return datas.grades.includes(grade) && datas.field.includes(subject);
//   });

//   return (
//     <>
//       <div className="wrap">

//         <div className="wrapper">
//           <div style={{
//             padding: '3em',
//           }}>
//             <DropdownMenu />
//           </div>
//           <div>
//             {
//               filteredData.length > 0 ? (
//                 filteredData.map((datas) => (
//                   <div className="personContainer" key={datas.id}>
//                     <div className="mainDiv">
//                       <div className="infoContainer" key={datas.id}>
//                         <img className="personImage" src={datas.img} alt="Person" />
//                         <div className="personInfo">
//                           <p className="personName">{datas.name}</p>
//                           <div className="personDetails">
//                             {datas.gender},{datas.age}
//                             <span>&#183;</span>
//                             {datas.studyLevel}
//                             <span>&#183;</span>
//                             {datas.experience}
//                           </div>
//                         </div>
//                         <button>ViewProfile</button>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (<p>Oops, sorry, no result found.</p>)
//             }
//           </div>
//         </div>
//       </div >
//       <Footer />
//     </>

//   );
// }

// export default TutorsDetails;









// TutorsDetails.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
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
    // Use navigate to navigate to another route
    navigate(`/tutor?id=${id}`);
  };

  return (
    <>
      <div className="wrap">
        <div className="wrapper">
          <div style={{ padding: '3em' }}>
            <DropdownMenu />
          </div>
          <div>
            {filteredData.length > 0 ? (
              filteredData.map((datas) => (
                <div className="personContainer" key={datas.id}>
                  <div className="mainDiv">
                    {/* <div className="infoContainer" key={datas.id} onClick={() => navigate(`/tutor`)}> */}
                    <div className="infoContainer" key={datas.id} onClick={() => viewProfile(datas.id)}>
                      <img className="personImage" src={datas.img} alt="Person" />
                      <div className="personInfo">
                        <p className="personName">{datas.name}</p>
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
