import React from 'react'
import { NavLink } from "react-router-dom"

const NavBar = () => {


  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/book/new">New Book</NavLink>
      <NavLink to="/books">View Books</NavLink>
    </div>
  )
}

export default NavBar
