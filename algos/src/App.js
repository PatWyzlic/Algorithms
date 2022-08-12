import './App.css';
import {Routes, Route} from "react-router-dom"
import BubbleSort from './pages/BubbleSort';
import ContainsDuplicate from './pages/ContainsDuplicate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BubbleSort/>}/>
        <Route path="/containsduplicate" element={<ContainsDuplicate/>}/>
      </Routes>
    </div>
  );
}

export default App;
