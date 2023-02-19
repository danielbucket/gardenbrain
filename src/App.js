import './App.css';
import Dashboard from './components/Dashboard/Dashboard.js';
import acInfinityParser from './tools/acInfinityParser.js';

let gardenDataStub = require('./stubs/acInfinityData.json');
      gardenDataStub = acInfinityParser(gardenDataStub);

function App() {
  return (
    <div className="App">
      <div className="header">
        <div>Garden Brain; for the brain by the brain.</div>
        <div>--brain brain</div>
      </div>
      <Dashboard sensorData={gardenDataStub}/>
    </div>
  );
};

export default App;