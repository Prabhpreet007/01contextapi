import { useState } from 'react'
import './App.css'
import Contextprovider from './Contextprovider'
import Check from "./Check"
import Login from "./Login"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Contextprovider>
      <Login/>
      <Check/>
    </Contextprovider>
  )
}

export default App
