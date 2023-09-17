import { useState } from 'react'
import Publicacion from './components/Publicacion'
import Crear from './components/Crear'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Crear></Crear>
      <Publicacion></Publicacion>

      <Publicacion></Publicacion>

      <Publicacion></Publicacion>
    </>
  )
}

export default App
