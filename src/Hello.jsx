import React, { Component } from 'react'
import './Hello.css'

class Hello extends Component {
  render() {
    return (
      <div>
        <h1 className='f1 tc'>Hello World</h1>
        <h6>God is and would always be the greatest</h6>
        <p>{this.props.greeting}</p>
      </div>
    )
  }
}

export default Hello

// or function

const hello = (props) => {
    <div>
        <h3>{props.greeting}</h3>
    </div>
}