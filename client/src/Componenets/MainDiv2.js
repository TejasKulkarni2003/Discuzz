import React, { useEffect }  from 'react'
import "./MainDiv.css"
import Post from "./Post.js"
import {useDispatch, useSelector} from "react-redux"
import { useAlert } from 'react-alert'
import { clearErrors, clearMessages, getPosts } from '../Actions/postActions'

const MainDiv2 = ({category}) => {
    const dispatch = useDispatch();
    const alert = useAlert()

    const {loading, posts, error} = useSelector((state)=>state.postCategorised) 
    const {error: likeError, message} = useSelector((state)=>state.like)
    const {error: commentError,message: commentmessage} = useSelector((state)=>state.comment)
    const {error: favoutiteError,message: favouritesmessage} = useSelector((state)=>state.addToFav)

    useEffect(() => {
        if (error) {
            alert.show(error, {
                type:'error'
            })
          dispatch(clearErrors());
        }
    
        if (likeError) {
            alert.show(likeError, {
                type:'error'
            })
            dispatch(clearErrors());
        }
        if (message) {
            alert.show(message, {
                type:'success'
            })
          dispatch(clearMessages());
        }

        if (commentError) {
            alert.show(commentError, {
                type:'error'
            })
            dispatch(clearErrors());
        }
        if (commentmessage) {
            alert.show(commentmessage, {
                type:'success'
            })
          dispatch(clearMessages());
        }

        if (favoutiteError) {
            alert.show(favoutiteError, {
                type:'error'
            })
            dispatch(clearErrors());
        }
        if (favouritesmessage) {
            alert.show(favouritesmessage, {
                type:'success'
            })
          dispatch(clearMessages());
        }

        dispatch(getPosts(category))
      }, [alert, error, message, likeError, dispatch, favouritesmessage, favoutiteError, commentError, commentmessage]);


  return (
    <>
        {
            loading ? <div className='loader'></div> : (
                <>
                    <div className='mainDiv'>
                        {
                            posts  && posts.length===0 ? <h2 style={{"textAlign": "center"}}>No Posts</h2> :
                            posts.map((item, id)=>
                                
                                <div className='subdiv' key={id}>
                                    <Post post={item}/>
                                </div>
                            )
                        }
                    </div>
                </>
            )
        }
        
            
    </>
    
  )
}

export default MainDiv2