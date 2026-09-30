import { useState } from 'react';

import './App.css';
import Card from './components/Card';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Home />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
