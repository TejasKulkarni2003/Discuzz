import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"
import { Home, Menu, PlusCircle, Search, User, UserCircle } from "lucide-react"

const Navbar = () => {
  return (
    <>
        <div className='navbar'>

            <Link to="/">
                <Home className='svg'/>
            </Link>
            <Link to="/newpost">
                <PlusCircle className='svg'/>
            </Link>
            <Link to="/search">
                <Search className='svg'/>
            </Link>
            <Link to="/me">
                <UserCircle className='svg'/>
            </Link>
            
        </div>
    </>
  )
}

export default Navbar