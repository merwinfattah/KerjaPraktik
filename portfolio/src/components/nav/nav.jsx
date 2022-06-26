import React from 'react'
import './nav.css'

const nav = () => {
  return (
    <nav className="navbar">
      <a href='#Me' className="webTitle">My Portfolio</a>
      <div className="navMenu">
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
    </nav>
  )
}

export default nav