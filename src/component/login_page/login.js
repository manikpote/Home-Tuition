// import { useNavigate } from 'react-router-dom';
// import './signUp.css';
// import React, { useState } from 'react';

// function Login() {
//   const [inputEmail, setInputEmail] = useState('');
//   const [inputPass, setInputPass] = useState('');
//   const user = JSON.parse(localStorage.getItem('user')) || [];
//   const navigate = useNavigate();
//   const submit = () => {
//     const checkUser = user.find(user => user.email === inputEmail && user.password === inputPass);
//     if (checkUser) {
//       navigate('/home');
//     }
//     else {
//       alert("Invalid enail or password");
//     }
//   }
//   return (
//     <div className="screen">
//       <div className="middle">
//         <form>
//           <section className="copy">
//             <h2>Login</h2>
//           </section>
//           <div>
//             <label>E-mail</label>
//             <input
//               type="email"
//               value={inputEmail}
//               placeholder="Enter your E-mail"
//               onChange={(e) => { setInputEmail(e.target.value) }}
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               value={inputPass}
//               placeholder="Enter your Password"
//               onChange={(e) => { setInputPass(e.target.value) }}
//             />
//           </div>

//           <button onClick={submit}>Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useNavigate } from 'react-router-dom';
import './signUp.css';
import React, { useState } from 'react';

function Login() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPass, setInputPass] = useState('');
  const user = JSON.parse(localStorage.getItem('user')) || [];
  const navigate = useNavigate();
  const submit = () => {
    const checkUser = user.find(user => user.email === inputEmail && user.password === inputPass);
    if (checkUser) {
      navigate('/home');
    }
    else {
      alert("Invalid enail or password");
    }
  }
  return (
    <div className="screen">
      <div className="middle">
        <form>
          <section className="copy">
            <h2>Login</h2>
          </section>
          {/* <div>
            <label>E-mail</label>
            <input
              type="email"
              value={inputEmail}
              placeholder="Enter your E-mail"
              onChange={(e) => { setInputEmail(e.target.value) }}
            />
          </div> */}
          <div className="input-container" id="input-container">
            <input
              type="email"
              id="input-field"
              value={inputEmail}
              className="input-field"
              placeholder="email" 
              onChange={(e) => { setInputEmail(e.target.value) }}
            />
            <label className="input-label">E-mail</label>
          </div>
          
          {/* <div>
            <label>Password</label>
            <input
              type="password"
              value={inputPass}
              placeholder="Enter your Password"
              onChange={(e) => { setInputPass(e.target.value) }}
            />
          </div> */}
          <div className="input-container">
            <input
              type="password"
              id="input-field"
              value={inputPass}
              className="input-field"
              placeholder="Password" 
              onChange={(e) => { setInputPass(e.target.value) }}
            />
            <label className="input-label">Password</label>
          </div>
          <button onClick={submit}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;