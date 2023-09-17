import { useState } from 'react'
import Publicacion from './components/Publicacion'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Publicacion></Publicacion>

      <Publicacion></Publicacion>
      
      <Publicacion></Publicacion>
    </>
  )
}

export default App
