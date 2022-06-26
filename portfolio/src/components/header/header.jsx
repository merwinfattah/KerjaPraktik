import React from 'react'
import Nav from '../nav/nav'
import './header.css'

const header = () => {
  return (
    <header className="webHeader">
      <Nav />
      <div className="container-intro">
        <div className="intro">
            <h1>Hello, I'm Erwin</h1>
        </div>
      </div>
    </header>
  )
}

export default header