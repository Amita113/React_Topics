import { useRef } from 'react';

export default function Formref() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }
  
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
