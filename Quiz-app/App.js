import './App.css';
import Start from './Component/Start';
import Test from './Component/Test';
import Score from './Component/Score';
import { createContext, useState } from 'react';

export const DataContext = createContext();

function App() {
  const [appState, setappState] = useState('start');
  const [scoreState, setscoreState] = useState(0);
  return (
    <DataContext.Provider
      value={{ appState, setappState, scoreState, setscoreState }}
    >
      <div className="App">
        <h1>Web develope Quiz</h1>
        {appState === 'start' && <Start />}
        {appState === 'test' && <Test />}
        {appState === 'score' && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
