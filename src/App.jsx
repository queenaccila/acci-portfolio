import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Acci's Portfolio</h1>
      <h2>Choose your mode to begin.</h2>
      <div className="column-container">
        {/* Interactive mode */}
        <div className="column-item">
          <a href="https://game.accila.com/" target="_blank">
            <h2>Interactive Mode</h2>
            <img src={viteLogo} className="column-image" />
            <p>
              An engaging game experience for exploring my portfolio! Recommended for hands-on interaction.
            </p>
          </a>
        </div>
  
        {/* Standard mode */}
        <div className="column-item-standard">
          <a href="https://dev.accila.com/" target="_blank">
            <h2>Standard Mode</h2>
            <img src={reactLogo} className="column-image" />
            <p>
              A traditional website layout for quick access to information and easy reading. Recommended for more streamlined experience.
            </p>
          </a>
        </div>
      </div>
    </>
  )  
}

export default App
