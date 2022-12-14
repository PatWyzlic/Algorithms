import './App.css';
import {Routes, Route} from "react-router-dom"
import BubbleSort from './pages/BubbleSort';
import ContainsDuplicate from './pages/ContainsDuplicate';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/containsduplicate" element={<ContainsDuplicate/>}/>
      </Routes>
    </div>
  );
}

export default App;
