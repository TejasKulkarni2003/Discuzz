import { Ghost, Key, Mail, Phone, UserCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, registerUser } from '../Actions/userActions'
import "./Login.css"

const Login = () => {
    const dispatch = useDispatch()
    const navigate =  useNavigate()
    const [email, setEmail] = useState("")
    const [firstname, setfirstname] = useState("")
    const [mobile, setMobile] = useState("")
    const [gender, setGender] = useState("")
    const [password, setPassword] = useState("")

    const registerHandler = (e) =>{
        e.preventDefault()
        const userData = {
            firstname,
            mobile,
            email,
            gender,
            password,
        }

        dispatch(registerUser(userData))
    }

  return (
    <div className='formContainer'>
        <div className='formBox'>
            <h1 style={{"textAlign": "center", "color": "white"}}>Register</h1>
            <form className="loginform" onSubmit={registerHandler}>
                <div >   
                    <UserCircle className="svg3"/>   
                    <input
                        type={'text'}
                        placeholder="Name"
                        required
                        value = {firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                    />
                </div>
                <div >   
                    <Phone className="svg3"/>   
                    <input
                        type={'Number'}
                        placeholder="Mobile"
                        required
                        value = {mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
                <div >   
                    <Ghost className="svg3"/>   
                    <input
                        type={'text'}
                        placeholder="Gender"
                        required
                        value = {gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </div>
                <div>   
                    <Mail className="svg3"/>   
                    <input
                        type={'mail'}
                        placeholder="Email"
                        required
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div >   
                    <Key className="svg3"/>   
                    <input
                        type={'password'}
                        placeholder="Password"
                        required
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <input type="submit" value="Register" className='loginBtn' />
            </form>
        </div>
    </div>
  )
}

export default Login