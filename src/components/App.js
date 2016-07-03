import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  componentDidMount() {
    document.body.classList.add('body-color')
  }

  render() {
    return (
      <div id="container">
          <Header active={this.props.location.pathname === '/'}/>
            {this.props.children}
          <Footer />
      </div>
    )
  }
}

export default App
