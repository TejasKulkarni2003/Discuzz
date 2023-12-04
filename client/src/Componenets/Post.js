import { MessageSquare, SendHorizonal, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import "./post.css"
import { useDispatch, useSelector } from "react-redux"
import { addComment, addToFav, deletePost, getPosts, likePost } from '../Actions/postActions'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getAllPosts, loadSingleUser, loadUser } from '../Actions/userActions'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const Post = (post) => {
  // console.log(post);
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.user)
  
  const [likedornot, setlikedornot] = useState(false)
  const [favouriteOrNot, setfavouriteOrNot] = useState(false)
  const [comment, setComment] = useState("")

  

  const likeHandler = async() => {
    await dispatch(likePost(post.post._id))
    dispatch(getAllPosts())
    setlikedornot(!likedornot)
  }

  const addCommentHandler = async(e) => {
    e.preventDefault()
    await dispatch(addComment(post.post._id, comment))
    setOpen(false)
    dispatch(getAllPosts())
    dispatch(getPosts(""))
    dispatch(loadSingleUser(post.post.creator._id))

  }

  const addBookmark = async() => {
    await dispatch(addToFav(post.post._id))
    setfavouriteOrNot(!favouriteOrNot)
    setOpen(false)
    dispatch(loadUser())
  }

  const deletePostHandler = async() => {
    await dispatch(deletePost(post.post._id))
    dispatch(getAllPosts())
    dispatch(getPosts(""))
    dispatch(loadSingleUser(post.post.creator._id))
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
    for (let i = 0; i < post.post.likes.length; i++) {
      if(post.post.likes[i]._id === user._id){
        setlikedornot(true)
      }
    }

    for (let i = 0; i < user.favouritePosts.length; i++) {
      if(user.favouritePosts[i] === post.post._id){
        setfavouriteOrNot(true)
      }
    }
    
  }, [dispatch, user, post])

  return (
    <div className='post'>
        <p className='category'>{post.post.category}</p>
        <Link to={`/user/${post.post.creator._id}`} style={{ textDecoration: 'none' }}><h3>{post.post.creator.firstname}</h3></Link>
        <h3>{post.post.title}</h3>
        <p>{post.post.content}</p>
        <div>
          <div>
            <div>
              <button onClick={likeHandler}>{likedornot ? (<FavoriteIcon style={{"color": "red"}}/>) : (<FavoriteBorderIcon/>)}</button>
              <span>{post.post.likes.length} Likes</span>
            </div>
            <div>
              <button onClick={handleClickOpen}><MessageSquare/></button>
              <span>{post.post.comments.length} Comments</span>
            </div>
          </div>
          <div>
            <button onClick={deletePostHandler} >{user._id === post.post.creator._id  ||  user.role==="Admin" ? <Trash2/> : null}</button>
            <button onClick={addBookmark} >{favouriteOrNot? <BookmarkAddedIcon style={{"color": "#423F8F"}}/>:<BookmarkAddIcon/>}</button>
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