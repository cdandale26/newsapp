import React, { Component } from 'react';
import loadingSpin from '../assets/loading.gif'



export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
          <img src={loadingSpin} alt="loading" />
      </div>
    )
  }
}

export default Spinner