import './App.css';
import Dashboard from './components/Dashboard/Dashboard.js';
import acInfinityParser from './tools/acInfinityParser.js';

let gardenDataStub = require('./stubs/acInfinityData.json');
    gardenDataStub = acInfinityParser(gardenDataStub);

function App() {
  return (
    <div className="App">
      <Dashboard sensorData={gardenDataStub}/>
    </div>
  );
};

export default App;