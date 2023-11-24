import { BadgeDollarSign, Book, Clapperboard, Crown, HeartPulse, Laptop2, Trophy } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.css"
const SideBar = () => {
  return (
    <>
        <div className='sidebar'>
            <Link to="post/technology" className='categories'>
                <Laptop2 className='svg2'/>
                <p>Technology</p>
            </Link>
            <Link to="post/sports" className='categories'>
                <Trophy className='svg2'/>
                <p>Sports</p>
            </Link>
            <Link to="post/politics" className='categories'>
                <Crown className='svg2'/>
                <p>Politics</p>
            </Link>
            <Link to="post/entertainment" className='categories'>
                <Clapperboard className='svg2'/>
                <p>Entertainment</p>
            </Link>
            <Link to="post/education" className='categories'>
                <Book className='svg2'/>
                <p>Education</p>
            </Link>
            <Link to="post/economics" className='categories'>
                <BadgeDollarSign className='svg2'/>
                <p>Economics</p>
            </Link>
            <Link to="post/health" className='categories'>
                <HeartPulse className='svg2'/>
                <p>Health</p>
            </Link>
        </div>
    </>
  )
}

export default SideBar