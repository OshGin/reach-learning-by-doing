import { useState } from 'react';

export default function StateNotSync() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      Open Console to see
      <button
        onClick={() => {
          const newNumber = 1;
          console.log(number);
          setNumber(newNumber);
          console.log(newNumber);
        }}
      >
        click
      </button>
    </div>
  );
}
