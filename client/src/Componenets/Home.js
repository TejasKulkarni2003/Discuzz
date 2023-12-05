import React, { useEffect } from 'react'
import MainDiv from "./MainDiv"
import SideBar  from "./SideBar"
import { useDispatch, useSelector } from "react-redux"
import { getAllPosts } from '../Actions/userActions'
import { getPosts } from '../Actions/postActions'
import { useAlert } from 'react-alert'

const Home = () => {
    const dispatch = useDispatch();
    const alert = useAlert()
    const {loading, error} = useSelector((state)=>state.allPosts)

    useEffect(() => {
      if(error){
        console.log(error);
      }
      dispatch(getAllPosts())
      dispatch(getPosts(""))
    }, [dispatch, error])
  return (
    <>
    {
      loading ? (<div className='loader'></div>): (
        <div className='containerMain'>
            <SideBar/>
            <MainDiv/>
        </div>
      )
    }
        
    </>
  )
}

export default Home