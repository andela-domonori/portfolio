import React, {Component} from 'react'

class  Header extends Component {
  render() {
    return (
      <div id="header">
        Breadface
        <hr />
        <div id="nav-list">
          <button className="nav-button">Portfolio</button>
          <button className="nav-button">Articles</button>
          <button className="nav-button">About me</button>
          <button className="nav-button">Contact me</button>
        </div>
      </div>
    )
  }
}

export default Header
