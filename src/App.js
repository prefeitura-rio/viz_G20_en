import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Content1 from './components/Content1';
import Quiz from './components/Quiz';
import Conclusao from './components/Conclusao';
import Creditos from './components/Creditos';

function App() {
  return (
    <div className="App">
      <Intro />
      <Content1 />
      <Quiz />
      <Conclusao />
      <Creditos />
    </div>
  );
}

export default App;
