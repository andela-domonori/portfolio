import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div>
        <div id="header-name">Breadface</div>
        <div id="nav-list">
          <Link to="/" className="nav-button">Portfolio</Link>
          <Link to="articles" className="nav-button">Articles</Link>
          <Link to="about" className="nav-button">About me</Link>
          <Link to="contact" className="nav-button">Contact me</Link>
        </div>
      </div>
    )
  }
}

export default Header
