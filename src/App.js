import React, {useState} from 'react';
import './App.css';
import Parent from './Parent.js';
import contextValue from './contextValue';

function App() {
  let value = useState(68);
  return (
    <div>
      <contextValue.Provider value={value}>
      <Parent></Parent><br/>
      </contextValue.Provider>
    </div>
  );
}

export default App;
