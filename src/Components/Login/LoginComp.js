import React, { useState, useEffect } from 'react'
import { loginUser } from '../../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Login.css'
function LoginComp() {
    const [userdata, setUserdata] = useState({
        email: "",
        password: "",
       
    })

    const authuser = useSelector(state => state.auth)
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const handleChange = (e) => {
        const user = {
            ...userdata,
            [e.target.name]: e.target.value
        }
        setUserdata(user)
        console.log(user)

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUser(userdata))


    }

    useEffect(() => {

        if (authuser.loginStatus == "success") {
            setUserdata({
                
                email: "",
                password: "",
               
            })
        }

        if (authuser._id) {
            navigate("/cart")
        }

    }, [authuser._id, navigate])

  return (
      <div class="login">
          <div class="form">
              <h3>My shop</h3>
              {authuser.loginStatus == "rejected" ? (<p style={{ color: "red" }}>{authuser.loginError}</p>) : null}
              <form class="login-form" onSubmit={handleSubmit}>
                  <input type="text" placeholder="email" value={userdata.email} name='email' required onChange={handleChange} />
                  <input type="password" placeholder="password" value={userdata.password} name="password" required onChange={ handleChange} />
                  <button>login</button>
              </form>
          </div>
      </div>
  )
}

export default LoginComp