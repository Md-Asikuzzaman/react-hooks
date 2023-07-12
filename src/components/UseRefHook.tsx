import { useRef } from 'react';

const UseRefHook = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log(inputRef.current.value);
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>
        <mark>useRef</mark> Hooks
      </h2>
      <input ref={inputRef} type='text' placeholder='Enter Your Email' />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default UseRefHook;
