import { Book, Mail, Subtitles } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../Actions/postActions'
import { loginUser } from '../Actions/userActions'
import "./Login.css"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("Technology")

    const {message} = useSelector((state)=>state.createPost)

    const createPostHandler = async(e) =>{
        e.preventDefault()

        await dispatch(createPost(title, content, category))

        console.log(message);

        if(message === "Post Uploaded Successfully"){
            navigate("/")
        }
    }


  return (
    <div className='formContainer'>
        <div className='formBox'>   
            <h1 style={{"textAlign": "center", "color": "white"}}>Create Post</h1>
            <form className="loginform" onSubmit={createPostHandler}>
                <div>   
                    <Book className="svg3"/>   
                    <input
                        type={'text'}
                        placeholder="Title"
                        required
                        value = {title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>   
                    <Subtitles className="svg3"/>   
                    <input
                        type={'text'}
                        placeholder="Post"
                        required
                        value = {content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div>   
                    <Subtitles className="svg3"/>   
                    <select 
                        name="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value) }
                    >
                        <option value="Technology">Technology</option>
                        <option value="Sports">Sports</option>
                        <option value="Politics">Politics</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Education">Education</option>
                        <option value="Economics">Economics</option>
                        <option value="Health">Health</option>
                    </select>
                </div>

                <input type="submit" value="Post" className='loginBtn' />

            </form>
        </div>
    </div>
  )
}

export default Login