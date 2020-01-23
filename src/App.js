import React from 'react';
import './App.css';
import QuestionState from "./context/QuestionState"

import Fullscreen from './modules/fullscreen'

function App() {
  return (
    <QuestionState>
    <div className="App">
      <Fullscreen />
    </div>
    </QuestionState>
  );
}

export default App;
