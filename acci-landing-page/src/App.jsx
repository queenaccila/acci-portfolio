import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Acci's Portfolio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div class="column-container">
        {/* Interactive mode */}
        <div class="column-item">
          <h2>Interactive Mode</h2>
          <a href="https://game.accila.com/" target="_blank">
            <img src={viteLogo} className="column-image"/>
          </a>
          <p>
            Click here for a more interactable experience for my portfolio!
          </p>
        </div>

        {/* Standard mode */}
        <div class="column-item">
          <h3>Standard Mode</h3>
        </div>
      </div>
    </>
  )
}

export default App
