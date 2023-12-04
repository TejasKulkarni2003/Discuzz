import { BadgeDollarSign, Book, Clapperboard, Crown, HeartPulse, Laptop2, Trophy } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.css"
const SideBar = () => {
    
  return (
    <>
        <div className='sidebar'>
            <Link to="/posts/technology" className='categories '>
                <Laptop2 className='svg2'/>
                <p className='links'>Technology</p>
            </Link>
            <Link to="/posts/sports" className='categories'>
                <Trophy className='svg2'/>
                <p className='links'>Sports</p>
            </Link>
            <Link to="/posts/politics" className='categories'>
                <Crown className='svg2'/>
                <p className='links'>Politics</p>
            </Link>
            <Link to="/posts/entertainment" className='categories'>
                <Clapperboard className='svg2'/>
                <p className='links'>Entertainment</p>
            </Link>
            <Link to="/posts/education" className='categories'>
                <Book className='svg2'/>
                <p className='links'>Education</p>
            </Link>
            <Link to="/posts/economics" className='categories'>
                <BadgeDollarSign className='svg2'/>
                <p className='links'>Economics</p>
            </Link>
            <Link to="/posts/health" className='categories'>
                <HeartPulse className='svg2'/>
                <p className='links'>Health</p>
            </Link>
        </div>
    </>
  )
}

export default SideBar