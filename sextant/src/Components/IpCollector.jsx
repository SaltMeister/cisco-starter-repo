import React, { Component } from 'react';

class IpCollector extends Component { 
  constructor(props) {
    super(props);
    this.url = props.url;

    this.state = {
      ip: "Unknown"
    }
    
  }

  componentDidMount() {
    fetch(this.url)
      .then((response) => response.text())
      .then((data) => {
        this.setState({ip: data});
        console.log(data);
      });
  }

  render() {
    return(
      <div>
        <p>The Ip is {this.state.ip}</p>      
      </div>
    );
  }
}

export default IpCollector;