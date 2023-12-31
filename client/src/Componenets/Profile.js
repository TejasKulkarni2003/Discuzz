import { UserCircle2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import "./UserProfile.css"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { loadSingleUser, logout } from '../Actions/userActions';
import Post from './Post';

const Profile = () => {
    const {user} = useSelector((state)=>state.user)
    const id = user._id
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [current, setcurrent] = useState('posts')

    useEffect(() => {
        dispatch(loadSingleUser(id))
    }, [])

    const {loading, userProfile, error} = useSelector((state)=>state.userProfile)
    
    const logoutHandler = () => {
        dispatch(logout())
    }
    
  return (
    <>
    {
        loading ? <div className='loader'></div> : userProfile &&
        (
            <>
                <div className="profile">
                <div className='userHead'>
                    <div className='photo'>
                        <UserCircle2 className='photo'/>
                    </div>
                    <div className='details'>
                        <h3 className='userId'>User: {userProfile._id}</h3>
                        <h3>Name: {userProfile.firstname}</h3>
                        <h3>Email: {userProfile.email}</h3>
                        <h3>Number: {userProfile.mobile}</h3>
                        <h3>Gender: {userProfile.gender}</h3>
                        {user.role==="Admin" &&  <button className='loginBtn' onClick={()=>navigate("/dashboard")} >Dashboard</button>}
                        <div className='buttons'>
                        <button className='loginBtn' onClick={logoutHandler}>Logout</button>
                        {current==='favourites'  &&  <button className='loginBtn' onClick={() => setcurrent('posts')} >Posts</button>}
                        {current==='posts'  &&  <button className='loginBtn' onClick={() => setcurrent('favourites')} >Favourites</button>}
                        </div>
                    </div>
                </div>
                { current==='posts'  && <div className='postdiv'>
                    
                            
                    <div className='subdiv' key={id}>
                    {
                        userProfile.posts  && userProfile.posts.length === 0 ? <h2>No Posts</h2> :
                        <>
                        <h2 className='subHeading'>Posts</h2>
                       { userProfile.posts.map((item, id)=>
                            
                            <div className='subdiv' key={id}>
                                <Post post={item}/>
                            </div>
                        )}
                        </>
                        
                    }
                    </div>
                
                </div>}
                {current==='favourites'  && <div className='postdiv'>
                    
                            
                    <div className='subdiv' key={id}>
                    {
                        userProfile.favouritePosts  && userProfile.favouritePosts.length === 0 ? <h2>No Favourite Posts</h2> :
                        <>
                        <h2 className='subHeading'>Favourite Posts</h2>
                       { userProfile.favouritePosts.map((item, id)=>
                            
                            <div className='subdiv' key={id}>
                                <Post post={item}/>
                            </div>
                        )}
                        </>
                        
                    }
                    </div>
                
                </div>}
                </div>
            </>
        )
    }
        
    </>
  )
}

export default Profile