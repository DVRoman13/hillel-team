import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopHeader from './components/Header/components/TopHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TopHeader />
    </div>
  )
}

export default App
