import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const logIn = () => {
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (name && email && password) {
      const data = JSON.parse(localStorage.getItem('user')) || [];

      const userExists = data.some((user) => user.email === email);

      if (!userExists) {
        localStorage.setItem('user', JSON.stringify([...data, { name, email, password }]));
        navigate('/home');
      } else {
        alert('User with this email already exists');
      }
    } else {
      alert('Please enter all required fields');
    }
  };

  return (
    <div className="screen">
      <div className="middle">
        <form onSubmit={(e) => handleSubmit(e)}>
          <section className="copy">
            <h2>Sign up</h2>
            <div>
              <p>
                Already have an account? <span className="click" onClick={logIn}>Click Here</span>
              </p>
            </div>
          </section>
          {/* <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
          </div> */}
          <div className="input-container" id="input-container">
            <input
              type="text"
              name="name"
              id="input-field"
              className="input-field"
              placeholder="Name" 
              // onChange={(e) => { setInputEmail(e.target.value) }}
            />
            <label className="input-label">Name</label>
          </div>
          {/* <div>
            <label>E-mail</label>
            <input type="email" name="email" placeholder="Enter your E-mail" />
          </div> */}
          <div className="input-container" id="input-container">
            <input
              type="email"
              name="email"
              id="input-field"
              className="input-field"
              placeholder="email" 
              // onChange={(e) => { setInputEmail(e.target.value) }}
            />
            <label className="input-label">E-mail</label>
          </div>
          {/* <div>
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your Password" />
          </div> */}
          <div className="input-container">
            <input
              type="password"
              name="password"
              id="input-field"
              className="input-field"
              placeholder="pass" 
            />
            <label className="input-label">Password</label>
          </div>
          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;