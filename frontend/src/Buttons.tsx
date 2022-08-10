import React from 'react';

interface ButtonsProps {
  setData: React.Dispatch<React.SetStateAction<string[]>>
}

const Buttons = ({ setData }: ButtonsProps): JSX.Element => {

  const onClick = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {


    const value = ((event.target) as HTMLButtonElement).value;
    const data = await fetch(`http://localhost:3001/track-points/${value}`);
    console.log(data)
    // setState(data);
  }

  return (
    <div>
      <button value="e71e1c7e573346368b2c2989e8eee61a" onClick={onClick}>Id 1</button>
      <button>Id 2</button>
    </div>
  )
}

export default Buttons;