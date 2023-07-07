import Libary from './Libary';
import Notes from './Notes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Routes>
        <Route path="/" element={<Libary />} />
        <Route path="/target" element={<Notes />} />
        </Routes>
    </Router>
    
            
      </header>
    </div>
  );
}

export default App;
