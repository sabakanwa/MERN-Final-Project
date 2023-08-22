import axios from 'axios';
import React, { useState } from 'react'

function SignUp() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")

const SignUpuser = (e) => {
  e.preventDefault();
  const payload = {username,email,password}
  console.log(payload)
  axios.post('http://localhost:1234/api/signup',payload)
  .then((json)=> console.log(json.data))
  .catch(err => console.log(err.message))
}



  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
          <div className='p-5 bg-secondary rounded text-white'>
            <form onSubmit={SignUpuser}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="username"
                  className="form-control"
                  id="exampleInputName"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div id="nameHelp" className="form-text">
                  put Your Name Below
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <button type="submit" className="btn btn-secondary bg-light  text-secondary">
                SignUp
              </button>
            </form>

          </div>


        </div>
      </div>
    </>
  )
}

export default SignUp