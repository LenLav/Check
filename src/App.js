import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { About } from './App2'
import { Check } from './Check'

function App() {
  return (
    // <body>
    <div>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/info/:id" element={<Check /> } />
      </Routes>
    </div>
      
      

    // </body>
  );
}

export default App;