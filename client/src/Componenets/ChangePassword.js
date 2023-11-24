import { FileLock, KeyRound, Lock, LockKeyhole } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../Actions/userActions'
import "./Login.css"

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const passwordChangeHandler = (e) => {
        e.preventDefault()
    }
  return (
    <>
        <div className='formContainer'>
            <div className='formBox'>
                <h1 style={{"textAlign": "center", "color": "white"}}>Change Password</h1>
                <form className="loginform" onSubmit={passwordChangeHandler}>
                    <div className='loginEmail'>   
                        <Lock className="svg3"/>   
                        <input
                            type={'text'}
                            placeholder="Password"
                            required
                            value = {oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>
                    <div className='loginPassword'>   
                        <KeyRound className="svg3"/>   
                        <input
                            type={'password'}
                            placeholder="New Password"
                            required
                            value = {newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div className='loginPassword'>   
                        <FileLock className="svg3"/>   
                        <input
                            type={'password'}
                            placeholder="Confirm Password"
                            required
                            value = {confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <input type="submit" value="Change" className='loginBtn' />
                </form>
            </div>
        </div>
    </>
  )
}

export default ChangePassword