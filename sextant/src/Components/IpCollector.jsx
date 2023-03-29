import React, { Component } from 'react';

class IpCollector extends Component { 
  constructor(props) {
    super(props);
    this.ipType = props.ipType;

    this.state = {
      ip: "Unknown"
    }
    
  }

  componentDidMount() {
    if(this.ipType === "ipv4") {
      fetch("https://api.ipify.org")
        .then((response) => response.text())
        .then((data) => {
          this.setState({ip: data});
          console.log(data);
        });
    }
    else if(this.ipType === "ipv6") {
      fetch("https://api64.ipify.org")
        .then((response) => response.text())
        .then((data) => {
          this.setState({ip: data});
          console.log(data);
        });
    }
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