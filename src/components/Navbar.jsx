import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className='logo' to='/'>
        Reading App
      </Link>
      <div className='btns'>
        <Link to='/'>Home</Link>

        <Link to='/favourite'>My Books</Link>
      </div>
    </nav>
  )
}

export default Navbar
