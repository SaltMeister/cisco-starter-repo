import React, { Component } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Exhibit from './Components/Exhibit';
import IpCollector from './Components/IpCollector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Banner title="Sextant"/>
        </header>

        <div className="App-exhibit">
          <Exhibit header="IPV4" children={<IpCollector ipType="ipv4"/>}/>
          <Exhibit header="IPV6" children={<IpCollector ipType="ipv6"/>}/>
        </div>
      {/* End of App */}
      </div>
    );
  }    
}


export default App;
