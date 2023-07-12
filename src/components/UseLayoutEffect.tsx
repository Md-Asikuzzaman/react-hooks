import { useEffect, useLayoutEffect } from 'react';

const UseLayoutEffect = () => {
  useEffect(() => {
    console.log("I'm from use effect hook.");
  }, []);

  useLayoutEffect(() => {
    console.log("I'm from use layout effect hook.");
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h2>
        <mark>useLayoutEffect</mark> and <mark>useEffect</mark> Hooks.
      </h2>
      <button>See the console</button>
    </div>
  );
};

export default UseLayoutEffect;
