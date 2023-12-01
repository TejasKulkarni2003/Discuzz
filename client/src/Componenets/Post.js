import { BookmarkPlus, Heart, HeartCrack, MessageSquare, SendHorizonal } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import "./post.css"
import { useDispatch, useSelector } from "react-redux"
import { addComment, addToFav, likePost } from '../Actions/postActions'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getAllPosts } from '../Actions/userActions'
import { Link } from 'react-router-dom'

const Post = (post) => {
  // console.log(post);
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.user)
  const [likedornot, setlikedornot] = useState(false)
  const [comment, setComment] = useState("")

  const likeHandler = () => {
    dispatch(likePost(post.post._id))
    setlikedornot(!likedornot)
  }

  const addCommentHandler = async(e) => {
    e.preventDefault()
    await dispatch(addComment(post.post._id, comment))
    dispatch(getAllPosts())
  }

  const addBookmark = () => {
    dispatch(addToFav(post.post._id))
  }

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  
  useEffect(() => {
    if(post.post.likes.includes(user._id)){
      setlikedornot(true)
    }
  }, [dispatch])

  return (
    <div className='post'>
        <Link to={`/user/${post.post.creator._id}`} style={{ textDecoration: 'none' }}><h3>{post.post.creator.firstname}</h3></Link>
        <h3>{post.post.title}</h3>
        <p>{post.post.content}</p>
        <div>
          <div>
            <button onClick={likeHandler}>{likedornot ? <HeartCrack/> : <Heart/>}</button>
            <button onClick={handleClickOpen}><MessageSquare/></button>
          </div>
          <div>
            <button onClick={addBookmark} ><BookmarkPlus/></button>
          </div>
          
        </div>

        <Dialog  
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        >
        <DialogTitle id="scroll-dialog-title">Comments</DialogTitle>
        <DialogContent dividers={true} className='commentBox' >
          <form onSubmit={addCommentHandler}>
            <div className='addComment'>
              <input
                  type={'text'}
                  placeholder="Comment"
                  required
                  value = {comment}
                  onChange={(e) => setComment(e.target.value)}
              />
              <button className='sendBtn' type='submit' ><SendHorizonal /></button>
            </div>
          </form>
            {post.post.comments.map((item, id)=>(
              <div className='commentDiv' key={id}>
                <div className='commentUser'>
                  {item.user.firstname}
                </div>
                <div className='commentData'>
                  {item.comment}
                </div>
                
              </div>
            ))}
            
        </DialogContent>

        </Dialog>
    </div>
  )
}

export default Post