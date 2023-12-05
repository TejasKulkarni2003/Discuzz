import { Trash2 } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, getAllPosts, getAllUsers } from '../Actions/userActions'
import "./UserAdmin.css"

const UserAdmin = ({user}) => {
    const dispatch = useDispatch()
    const {user:loginUser} = useSelector((state)=>state.user)
    const deleteUserHandler = async() => {
        await dispatch(deleteUser(user._id))
        dispatch(getAllUsers())
        dispatch(getAllPosts())
    }
    
  return (
    <>
        {user._id !== loginUser._id  &&  <div className='user'>
            <Link to={`/user/${user._id}`} style={{ textDecoration: 'none' }}><h3>{user.firstname}</h3></Link>
            <div>
                <button onClick={deleteUserHandler} >{<Trash2/> }</button>
            </div>

        </div>}
    </>
  )
}

export default UserAdmin