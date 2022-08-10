import { useState, useEffect } from 'react';

import Buttons from './Buttons';

import './App.css';

const App = (): JSX.Element => {
  const [data, setData] = useState<string[]>([]);

  useEffect((): void => {
  })

  return (
    <div className="App">
      <h1>App</h1>
      <Buttons setData={setData}></Buttons>
    </div>
  );
}

export default App;
