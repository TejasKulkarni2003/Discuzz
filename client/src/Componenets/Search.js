import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import { SendHorizonal } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllPosts } from '../Actions/userActions';
import Post from './Post';
import "./search.css"

const Search = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading, posts} = useSelector((state) => state.allPosts)
    const [keyword, setKeyword] = useState("")
    const [open, setOpen] = useState(true);

    const searchHandler = (e) => {
        e.preventDefault()
        dispatch(getAllPosts(keyword))
    }

  return (
    <>
    <div className='m3'>
        <div className='searchDiv'>
          <form onSubmit={searchHandler}>
            <div className='searchBox'>
              <input
                  type={'text'}
                  placeholder="Search"
                  required
                  value = {keyword}
                  onChange={(e) => setKeyword(e.target.value)}
              />
              <button className='sendBtn' type='submit' ><SendHorizonal /></button>
            </div>
          </form>
          <div>
          {
                posts  &&
                posts.map((item, id)=>
                    
                    <div className='subdiv' key={id}>
                        <Post post={item}/>
                    </div>
                )
            }
          </div>
        </div>
        </div>
            
    </>
  )
}

export default Search