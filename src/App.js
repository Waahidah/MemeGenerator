import {  BrowserRouter, Routes, Route, } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Homepage from './pages/Home';
import EditPage from './pages/Edit';

function App() {
  return (
    
      <div className="container">
        <h2>Meme Generator</h2>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/edit" element={<EditPage/>} />
        </Routes>
      </div>
    
  );
          
    
}

export default App;
