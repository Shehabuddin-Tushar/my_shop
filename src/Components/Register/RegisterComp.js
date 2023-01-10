import React,{useState,useEffect} from 'react'
import { registerUser } from '../../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
function RegisterComp() {
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation:""
    })

    const authuser = useSelector(state => state.auth)
    const navigate = useNavigate();

    const dispatch=useDispatch()
    const handleChange = (e) => {
        const user = {   
            ...userdata,
            [e.target.name]:e.target.value
        }
        setUserdata(user)
        console.log(user)
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(registerUser(userdata))
        
        
    }

    useEffect(() => {

        if (authuser.registerStatus == "success") {
            setUserdata({
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            })
        }

        if (authuser._id) {
            navigate("/cart")
        }
        
    },[authuser._id,navigate])

  return (
      <div class="login">
          <div class="form">
              <h3>My shop</h3>
              {authuser.registerStatus == "rejected" ? (<p style={{color:"red"}}>{authuser.registerError }</p>):null }
              <form class="login-form" onSubmit={handleSubmit}>
                  <input type="text" placeholder="user name"name="name" value={userdata.name} onChange={handleChange} required />
                  <input type="text" value={userdata.email} placeholder="email" name="email" onChange={handleChange} required />
                  <input type="password" value={userdata.password}  placeholder="password" name="password" required onChange={handleChange} />
                  <input type="password" value={userdata.password_confirmation} placeholder="confirm password" name="password_confirmation" required onChange={handleChange} />
                  <button>{authuser.registerStatus=="pending"?"submitting":"Register"}</button>
              </form>
          </div>
      </div>
  )
}

export default RegisterComp