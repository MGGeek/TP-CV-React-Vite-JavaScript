import { useState } from 'react';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import InfosPersos from './InfosPersos';
import Competences from './Competences';
import Experience from './Experience';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="cv-page">
      <InfosPersos />

      <div className="cv-content">
        <Experience />
        <Competences />
      </div>
    </main>
  )
}

export default App
