// Note: 1. use for slow functions
//       2. use for referential equality

import { useState, useMemo } from 'react';

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  function slowFunction(number: number) {
    console.log('Calling slow function...');

    for (let i = 0; i <= 1000000000; i++) {}

    return number * 2;
  }

  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>
        <mark>useMemo</mark> & <mark>useState</mark> Hooks
      </h2>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <h2 style={themeStyle}>{doubleNumber}</h2>
    </div>
  );
};

export default UseMemoHook;
