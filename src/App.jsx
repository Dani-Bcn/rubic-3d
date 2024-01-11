import './App.css'
import MainScene from './Main_scene'
import Controls from './Controls'
import { useState } from 'react'

function App() {

  const [countUp, setCountUp] = useState(0)
  const funcUp = (() => setCountUp(countUp + 0.1))
  const funcDown = (() => setCountUp(countUp - 0.1))

  return (
    <main className='flex'>
      <Controls funcUp={funcUp} funcDown={funcDown}/>
      <MainScene countUp={countUp}/>
    </main>
  )
}

export default App
