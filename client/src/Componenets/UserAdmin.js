import { Trash2 } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, getAllUsers } from '../Actions/userActions'
import "./UserAdmin.css"

const UserAdmin = ({user}) => {
    const dispatch = useDispatch()
    const deleteUserHandler = async() => {
        await dispatch(deleteUser(user._id))
        dispatch(getAllUsers())
    }
    
  return (
    <>
        <div className='user'>
            <Link to={`/user/`} style={{ textDecoration: 'none' }}><h3>{user.firstname}</h3></Link>
            <div>
                <button onClick={deleteUserHandler} >{<Trash2/> }</button>
            </div>

        </div>
    </>
  )
}

export default UserAdmin