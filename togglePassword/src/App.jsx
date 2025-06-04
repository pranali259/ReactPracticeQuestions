import { useState } from 'react'
import TogglePassword from './components/TogglePassword'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TogglePassword/>
  )
}

export default App
