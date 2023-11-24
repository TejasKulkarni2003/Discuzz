import { UserCircle2 } from 'lucide-react';
import React, { useEffect } from 'react'
import "./UserProfile.css"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { loadSingleUser } from '../Actions/userActions';
import Post from './Post';

const UserProfile = () => {
    const {id} = useParams();
    // console.log(id);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadSingleUser(id))
    }, [])

    
    

    const item = {
            creator: {
                firstname: "creatorrr",
            },
        
        title: "titileee",
    }
    
  return (
    <>
        <div className='userHead'>
            <div className='photo'>
                <UserCircle2 className='photo'/>
            </div>
            <div className='details'>
                <h3 className='userId'>User: Name</h3>
                <h3>User: Name</h3>
                <h3>User: Email</h3>
                <h3>User: Number</h3>
                <h3>User: Gender</h3>
            </div>
        </div>
        <div className='postdiv'>
            <h2 className='subHeading'>Posts</h2>
                    
            <div className='subdiv' key={id}>
                <Post post = {item}/>
                <Post post = {item}/>
                <Post post = {item}/>
                <Post post = {item}/>
                <Post post = {item}/>
                <Post post = {item}/>
                <Post post = {item}/>
            </div>
        
        </div>
    </>
  )
}

export default UserProfile