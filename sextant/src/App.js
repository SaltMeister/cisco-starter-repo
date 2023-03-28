import './App.css';
import Banner from './Components/Banner';
import Exhibit from './Components/Exhibit';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner title="Sextant"/>
      </header>

      <div className="App-exhibit">
        <Exhibit header="Exibit1" component={<Banner title="Helo"/>}/>
      </div>
    {/* End of App */}
    </div>
  );
}

export default App;
