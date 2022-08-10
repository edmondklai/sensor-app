import React from 'react';
import { data } from './data';

interface ButtonsProps {
  setData: React.Dispatch<React.SetStateAction<number[]>>
}

const Buttons = ({ setData }: ButtonsProps): JSX.Element => {

  const onClick = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    const value = ((event.target) as HTMLButtonElement).value;
    const data = await (await fetch(`http://localhost:8080/track-points/${value}`)).json();
    setData(data);
  }

  return (
    <div>
      <button value={data.id1} onClick={onClick}>Id 1</button>
      <button>Id 2</button>
    </div>
  )
}

export default Buttons;