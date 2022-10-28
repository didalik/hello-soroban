import Link from 'next/link'; // {{{1
import React from 'react'

/* FirstPost {{{1
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

/* Hooks () // {{{1
*/
export default function Hooks () {
  return (
    // https://reactjs.org/docs/hooks-reference.html#usereducer
    // Counter with React.useState(initialCount) {{{2
    //<>
      //<Counter initialCount={1}/>
    //</>
    // Counter with React.useReducer(reducer, initialState) {{{2
    //<>
      //<Counter/>
    //</>
    // Counter with React.useReducer(reducer, initialCount, init) {{{2
    <>
      <Counter initialCount={0}/>
      <App/>
      <Toolbar />
    </>
    // }}}2
  );
}

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);  
  return (    
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!    
    </button>  
  );
}

/* Counter with React.useReducer(reducer, initialCount, init) {{{1
*/
function init(initialCount) {  return {count: initialCount};}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':      
      return init(action.payload);    
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = React.useReducer(reducer, initialCount, init);  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({
        type: 'reset', payload: initialCount
      })}>        
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

/* Counter with React.useReducer(reducer, initialState) {{{1
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
*/

/* Counter with React.useState(initialCount) {{{1
function Counter ({initialCount}) {
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
*/
