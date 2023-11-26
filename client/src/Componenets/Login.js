import { Key, Mail } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../Actions/userActions'
import "./Login.css"

const Login = () => {
    const dispatch = useDispatch()
    const navigate =  useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginFormHandler = (e) =>{
        e.preventDefault()
        // console.log(email)
        // console.log(password)

        dispatch(loginUser(email, password))
    }

    const newUSerHandler = () =>{
        navigate("/register")
    }

  return (
    <div className='formContainer'>
        <div className='formBox'>   
            <h1 style={{"textAlign": "center", "color": "white"}}>Login</h1>
            <form className="loginform" onSubmit={loginFormHandler}>
                <div className='loginEmail'>   
                    <Mail className="svg3"/>   
                    <input
                        type={'mail'}
                        placeholder="Email"
                        required
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='loginPassword'>   
                    <Key className="svg3"/>   
                    <input
                        type={'password'}
                        placeholder="Password"
                        required
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <input type="submit" value="Login" className='loginBtn' />
                <input type="button" value="register" className='loginBtn' onClick={newUSerHandler} />

            </form>
        </div>
    </div>
  )
}

export default Login