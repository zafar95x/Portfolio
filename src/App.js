import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Plans from './routes/Plans'
import Projects from './routes/Projects';
import Contact from './routes/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/plans' element={<Plans/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

    </div>
  );
}

export default App;
