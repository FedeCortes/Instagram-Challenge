import { useState } from 'react'
import Publicacion from './components/Publicacion'
import Crear from './components/Crear'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Crear></Crear>
      <Publicacion url={"https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"} desc={"Soy una descripción"}></Publicacion>

      <Publicacion url="https://img.freepik.com/foto-gratis/perfil-hombre-barbudo-estilo-hizo-nuevo-peinado-peluqueria_176420-18800.jpg?w=2000" desc="Tambien soy una descripción, para el proyecto de instagram"></Publicacion>

      <Publicacion url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJ1jMkAd5J5wA9vvBIuia473d5xvaZkC9Nu0SjQumUF2WO9g6mDocVtaEzW8d1R7sX-c&usqp=CAU" desc="Tambien soy una descripción un poco mas larga para ver como queda, para el proyecto de instagram"></Publicacion>
    </>
  )
}

export default App
