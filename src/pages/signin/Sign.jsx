import React, { useEffect } from "react";
import './sign.css'

import { useGlobalLogin } from "../../contexts/login-context";
import { Link, useNavigate } from "react-router-dom";



export default function Sign() {

  const { input, setInput, dummyData, loginAction, userToken } = useGlobalLogin()

  const navigate = useNavigate()

  useEffect(() => {
    if (userToken) {
      navigate('/');
    }
  }, [userToken])


  const setDummyData = (event) => {
    event.preventDefault();
    setInput(dummyData)
  }

  const setInputUsername = (event) => {
    setInput((prev) => ({ ...prev, email: event.target.value }))
  }

  const setInputPassword = (event) => {
    setInput((prev) => ({ ...prev, password: event.target.value }))
  }


  return (
    <>
      <div className="form-container">

        <div className="form">

          <form action="">
            <h2>signin</h2>
            <br />
            <label htmlFor="">Username</label>
            <input type="text" className="forminput" placeholder="Enter username" value={input.email} onChange={setInputUsername} />
            <label htmlFor="">Password</label>
            <input type="password" className="forminput" placeholder="Enter password" value={input.password} onChange={setInputPassword} /><br />
            <h5>Forget Password <a href=""> -&gt;click here</a></h5><br />
            <button className="apply-dummy" onClick={setDummyData}><h3>Apply Dummy login</h3></button><br />
            <button className="login" onClick={loginAction}><h3>Login</h3></button><br />
            <p> Don't have an account ➡️<Link to={'/signup'}>Signup</Link></p>
          </form>
        </div>
      </div>
    </>
  )

}







