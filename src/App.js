import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { About } from './App2'
import { Check } from './Check'

function App() {
  return (
    // <body>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/info/:id" element={<Check /> } />
      </Routes>

    // </body>
  );
}

export default App;