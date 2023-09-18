import { useState } from 'react'
import Publicacion from './components/Publicacion'
import Crear from './components/Crear'

import ListarPublicaciones from './components/ListarPublicaciones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Crear></Crear>
      <ListarPublicaciones></ListarPublicaciones>
    </>
  )
}

export default App
