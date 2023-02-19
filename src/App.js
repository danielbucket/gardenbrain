import './App.css';
import Dashboard from './components/Dashboard/Dashboard.js';

const gardenDataStub = require('./stubs/acInfinityData.json');

function App() {

  return (
    <div className="App">
    <div className="header">
      <div>Garden Brain; for the brain by the brain.</div>
      <div> --brain brain</div>
    </div>
    <Dashboard {...gardenDataStub}/>
    </div>
  );
}

export default App;