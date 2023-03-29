import React, { Component } from 'react';
import '../Exhibit.css';

class Exhibit extends Component {
  render() {
    return (
      <div className="Exhibit-component">
        <h2>{this.props.header}</h2>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Exhibit;