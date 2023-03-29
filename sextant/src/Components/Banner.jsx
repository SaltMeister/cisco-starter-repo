import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Banner;