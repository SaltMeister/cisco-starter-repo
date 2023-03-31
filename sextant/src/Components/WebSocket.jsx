import React, { Component } from 'react';

const W3CWebSocket = require('websocket').w3cwebsocket;

class WebSocket extends Component {
  client = new W3CWebSocket("ws://localhost:55455");

  constructor(props){
    super(props);

    this.packetTime = null;

    this.state = {
      latency: null,
    }
  }

  componentDidMount(){
    this.client.onmessage = (e) => {
      if (typeof e.data === 'string') {
        this.packetTime = Math.abs(Date.now() - e.data);
        this.setState({latency: this.packetTime}); 
      }        
    }
  }

  render(){
    return(
      <span>
        {this.state.latency}ms
      </span>      
    );
  }
}

export default WebSocket;