import React, { Component } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Exhibit from './Components/Exhibit';
import IpCollector from './Components/IpCollector';
import WebSocket from './Components/WebSocket';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Banner title="Sextant"/>
        </header>

        <div className="App-exhibit">
          <Exhibit header="IPV4">
            <IpCollector url="https://api.ipify.org"/>
          </Exhibit>

          <Exhibit header="IPV6">
            <IpCollector url="https://api64.ipify.org"/>
          </Exhibit> 

          <Exhibit header="WebSocket">
            <WebSocket/>
          </Exhibit> 
        </div>
      {/* End of App */}
      </div>
    );
  }    
}


export default App;
