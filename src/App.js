import React from 'react';
import './App.css';
import QuestionState from "./context/QuestionState"
import Board from './modules/board'

import Fullscreen from './modules/fullscreen'

function App() {
  return (
    <QuestionState>
    <div className="App">
      <Board />
    </div>
    </QuestionState>
  );
}

export default App;
