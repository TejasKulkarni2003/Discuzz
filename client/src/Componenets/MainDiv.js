import React, { useEffect }  from 'react'
import "./MainDiv.css"
import Post from "./Post.js"
import {useDispatch, useSelector} from "react-redux"
import { getAllPosts } from '../Actions/userActions'

const MainDiv = () => {
    const dispatch = useDispatch();
    const {loading, posts} = useSelector((state)=>state.allPosts)
    // console.log(posts);

  return (
    <>
        <div className='mainDiv'>
            {
                posts  &&
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

export default MainDiv