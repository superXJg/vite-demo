import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import usePrevious from './hooks/usePrevious';
import BaseLayout from './layout/BaseLayout';

function App() {
  const [count, setCount] = useState(0)
  const compare = (n: number , o: number) => {
    if (n !== o) {
      return true
    }
    return false
  }
  const pre = usePrevious(count, compare)
  return (
    <div className="App">
      <BaseLayout/>
    </div>
  )
}

export default App
