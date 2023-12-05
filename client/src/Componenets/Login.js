import { Key, Mail } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors, loadUser, loginUser } from '../Actions/userActions'
import "./Login.css"

const Login = () => {
    const dispatch = useDispatch()
    const navigate =  useNavigate()
    const alert = useAlert()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {error} = useSelector((state)=>state.user)

    const loginFormHandler = (e) =>{
        e.preventDefault()
        dispatch(loginUser(email, password))
        dispatch(loadUser())
    }

    const newUSerHandler = () =>{
        navigate("/register")
    }

    useEffect(() => {
        if(error){
            alert.show(error, {
                type:'error'
            })
        }
        dispatch(clearErrors());
    }, [dispatch, error, alert])

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
                <input type="button" value="Register" className='loginBtn' onClick={newUSerHandler} />

            </form>
        </div>
    </div>
  )
}

export default Login