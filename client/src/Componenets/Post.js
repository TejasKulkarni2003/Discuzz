import { Heart, MessageSquare } from 'lucide-react'
import React from 'react'
import "./post.css"

const Post = (post) => {
  console.log(post.post.post);
  return (
    <div className='post'>
        <h3>{post.post.creator.firstname}</h3>
        <h3>{post.post.title}</h3>
        <p>content content content content content content content content content content content v= content content content content</p>
        <div>
          <button><Heart/></button>
          <button><MessageSquare/></button>
        </div>
    </div>
  )
}

export default Post