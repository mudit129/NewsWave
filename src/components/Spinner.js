import React, { Component } from 'react'
import loading from './loadingGif.webp'

export class Spinner extends Component {
  render() {
    return (
      <div className='container text-center'>
        <img src={loading} alt = "loading"></img>
      </div>
    )
  }
}

export default Spinner
