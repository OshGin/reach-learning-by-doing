import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); /*Variablen die "quasi konstant sind*/
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(100)}>Reset</button>
    </>
  );
}
