import Link from 'next/link'; // {{{1
import React from 'react'

/* {{{1
export default function FirstPost() {
  return (
    <>
      <h1>Hooks!</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
*/

export default function Hooks () { // {{{1
  return (
    <>
      <Counter initialCount={1}/>
    </>
  );
}

function Counter ({initialCount}) { // {{{1
  const [count, setCount] = React.useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={_ => setCount(initialCount)}>Reset</button>
      <button onClick={_ => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={_ => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
