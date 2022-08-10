import { useState } from 'react';

import Buttons from './Buttons';
import Chart from './Chart';

import './App.css';

const App = (): JSX.Element => {
  const [data, setData] = useState<number[]>([]);

  return (
    <div className="App">
      <h1>App</h1>
      <Buttons setData={setData}></Buttons>
      {/* <Chart></Chart> */}
    </div>
  );
}

export default App;
