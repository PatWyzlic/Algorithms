import './App.css';
import {Routes, Route} from "react-router-dom"
import BubbleSort from './pages/BubbleSort';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BubbleSort/>}/>
      </Routes>
    </div>
  );
}

export default App;
