//import './App.css';
import Movies from './Components/Movies.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/movies' element={<Movies />} />
    </Routes>
  );
}

export default App;
