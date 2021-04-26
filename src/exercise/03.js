// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react';

function useCount() {
  const context = React.useContext(CountContext);
  if (!context) {
    throw new Error('useCount must be used inside CountContext');
  }

  const { count, setCount } = context;

  return [count, setCount];
}

const CountContext = React.createContext();

function CountProvider({ children }) {
  const [count, setCount] = React.useState(0);

  return <CountContext.Provider value={{ count, setCount }}>{children}</CountContext.Provider>;
}
function CountDisplay() {
  const [count] = useCount();
  return <div>{`The current count is ${count}`}</div>;
}

function Counter() {
  const [setCount] = useCount().reverse();
  const increment = () => setCount(c => c + 1);
  return <button onClick={increment}>Increment count</button>;
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
}

export default App;
