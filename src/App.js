import React from 'react';
import logo from './logo.svg';
import './App.css';

import Tabs from './components/Tabs/index.js';

function App() {
  return (
    <div className="App">
		<div className="routerContent"></div>
		<Tabs />
    </div>
  );
}

export default App;
