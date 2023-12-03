import React, { useEffect } from 'react'
import MainDiv2 from "./MainDiv2.js"
import SideBar  from "./SideBar"
import { useDispatch, useSelector } from "react-redux"
import { getAllPosts } from '../Actions/userActions'
import { useParams } from 'react-router-dom'
import { getPosts } from '../Actions/postActions.js'

const Home = () => {
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state)=>state.allPosts)
    const {category} = useParams()
    useEffect(() => {
      if(error){
        console.log(error);
      }
      dispatch(getPosts(category))

    }, [dispatch, error])
  return (
    <>
    {
      loading===true ? (<div className='loader'></div>): (
        <div className='containerMain'>
            <SideBar/>
            <MainDiv2 category={category}/>
        </div>
      )
    }
        
    </>
  )
}

export default Home