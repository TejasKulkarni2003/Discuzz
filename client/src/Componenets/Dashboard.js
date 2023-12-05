import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, clearMessages } from '../Actions/postActions'
import { clearErrorsU, clearMessagesU, getAllPosts, getAllUsers } from '../Actions/userActions'
import "./Dashboard.css"
import Post from './Post'
import UserAdmin from './UserAdmin'

const Dashboard = () => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const [current, setcurrent] = useState('posts')
    const {loading, posts} = useSelector((state)=>state.allPosts)
    const {error: delPostErr, message: delMessage} = useSelector((state)=>state.deletePost)
    const {error: delUserErr, message: delUserMessage} = useSelector((state)=>state.deleteUser)
    const { loading:userLoading ,users} = useSelector((state)=>state.allUsers)
    useEffect(() => {
      if (delPostErr) {
        alert.show(delPostErr, {
            type:'error'
        })
        dispatch(clearErrors());
      }

      if (delMessage) {
        alert.show(delMessage, {
            type:'success'
        })
        dispatch(clearMessages());
      }

      if (delUserErr) {
        alert.show(delUserErr, {
            type:'error'
        })
        dispatch(clearErrorsU());
      }

      if (delUserMessage) {
        alert.show(delUserMessage, {
            type:'success'
        })
        dispatch(clearMessagesU());
      }

    }, [dispatch, delPostErr, delMessage, delUserErr, delUserMessage, alert])
  return (
    <>
      <div className='dashboard'>
        <div className='options'>
          {current==="posts"  &&  <button className='loginBtn' onClick={()=>setcurrent('users')}>Users</button>}
          {current==="users"  &&  <button className='loginBtn' onClick={()=>setcurrent('posts')}>Posts</button>}
        </div>
        {loading ? <div className='loader'></div> : (
          <>
          { current==='posts'  && <div className='postdiv'>
                    
                            
              <div className='subdiv' >
              {
                  posts  && posts.length === 0 ? <h2>No Posts</h2> :
                  <>
                  <h2 className='subHeading'>Posts</h2>
                  { posts.map((item, id)=>
                      
                      <div className='subdiv' key={id}>
                          <Post post={item}/>
                      </div>
                  )}
                  </>
                  
              }
              </div>
          
          </div>}
            </>
        )}


        {userLoading ? <div className='loader'></div> : (
          <>
            {current==="users"  &&  <div className='userDiv'>
              <div className='subDiv'>
              {
                  users && users.length === 0 ? <h2>No Users</h2> :
                  <>
                  <h2 className='subHeading'>Users</h2>
                  { users.map((item, id)=>
                      
                      <div className='subdiv' key={id}>
                          <UserAdmin user={item}/>
                      </div>
                  )}
                  </>
                  
              }
              </div>

            </div>}
          </>
        )}
        
                
        </div>
    </>
  )
}

export default Dashboard