import React, { Component } from 'react';

class WebSocket extends Component {
  constructor(props){
    super(props);
    this.state = {
      socket: null,
      latency: null,
    }
  }

  componentDidMount(){
    if(this.state.socket === null){
      this.setState({ socket: new WebSocket("ws://192.168.1.136:55455")});
    }

  }

  render(){
    return(
      <span>
        Latency == {this.state.latency}
      </span>      
    );
  }
}

export default WebSocket;