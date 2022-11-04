import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import { Child1, Child2 } from './components/Child'
import './App.css';



function App() {
  const [count, setCount] = useState<number>(0)

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  const handleDecrement = useCallback(() => {
    setCount(prev => prev - 1)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>{count}</div>
        <div>
          <button onClick={handleIncrement}>+1</button>
          <button onClick={handleDecrement}>-1</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Child1 />
        <Child2 />
      </header>
    </div>
  );
}

// type Item = {
//   id: number
//   title: string
// }

// type Props = {
//   message: string
// }

// const Child: React.FC<Props> = props => {
//   return (
//     <p>{props.message}</p>
//   )
// }


// const App: React.FC = () => {
//   const message: string = 'Hello React!!'

//   // const items: Item[] = [
//   //   {
//   //     id: 1,
//   //     title: 'highest price product'
//   //   }, {
//   //     id: 2,
//   //     title: 'low price product'
//   //   }
//   // ]
//   return (
//     <div className="App">
//       <p>{message}</p>
//       {/* <ul>
//         {items.map((item: Item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul> */}
//       {/* <Child message="子のコンポーネントに渡す" /> */}
//       <Child />
//     </div>
//   )
// }


export default App;
