import './App.css';
import Dashboard from './components/Dashboard/Dashboard.js';

const gardenDataStub = require('./stubs/acInfinityData.json');

function App() {

  return (
    <div className="App">
      <Dashboard {...gardenDataStub}/>
    </div>
  );
}

export default App;
