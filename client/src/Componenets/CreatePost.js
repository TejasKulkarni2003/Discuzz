import { Book, Mail, Subtitles } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../Actions/postActions'
import { loginUser } from '../Actions/userActions'
import "./Login.css"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const alert = useAlert()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("Technology")

    const {loading, message} = useSelector((state)=>state.createPost)

    const createPostHandler = async(e) =>{
        e.preventDefault()

        await dispatch(createPost(title, content, category))
        navigate("/")
        if(loading === false){
            alert.show(message, {
                type:'success'
            })
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
                        <option value="technology">Technology</option>
                        <option value="sports">Sports</option>
                        <option value="politics">Politics</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="education">Education</option>
                        <option value="economics">Economics</option>
                        <option value="health">Health</option>
                    </select>
                </div>

                <input type="submit" value="Post" className='loginBtn' />

            </form>
        </div>
    </div>
  )
}

export default Login