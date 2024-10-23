import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Content1 from './components/Content1';
import Quiz from './components/Quiz';
import Conclusao from './components/Conclusao';
// import Creditos from './components/Creditos';
import Eventos from './components/Eventos';
import { CurrentComponentProvider } from './CurrentComponentContext';

function App() {
  return (
    <CurrentComponentProvider>
      <div className="App">
        <Intro />
        <Content1 />
        <Eventos />
        <Quiz />
        <Conclusao />
        {/* <Creditos /> */}
      </div>
    </CurrentComponentProvider>
  );
}

export default App;
