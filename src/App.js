import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { DefaultPage } from './components/defaultPage'
import { Check } from './components/check'

function App() {
  return (
    // <body>
    <div>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/info/:id" element={<Check /> } />
      </Routes>
    </div>
      
      

    // </body>
  );
}

export default App;