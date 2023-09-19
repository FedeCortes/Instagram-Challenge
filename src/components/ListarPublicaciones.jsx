import React, { useEffect, useState } from 'react';
import Publicacion from './Publicacion';
import axios from 'axios';

const ListarPublicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    // Función para obtener las publicaciones desde la API
    const obtenerPublicaciones = async () => {
      try {
        const response = await axios.get('https://instagramchallenge-r5vgbaz8y-fedecortes.vercel.app/api/publicaciones');
        // Actualizar el estado con los datos de las publicaciones
        setPublicaciones(response.data);
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };

    // Llamar a la función para obtener las publicaciones al montar el componente
    obtenerPublicaciones();

    // Configurar una intervalo para obtener las publicaciones periódicamente (por ejemplo, cada 5 segundos)
    const intervalo = setInterval(() => {
      obtenerPublicaciones();
    }, 5000); // 5000 milisegundos (5 segundos)

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      {publicaciones.map(publicacion => (
        <Publicacion
          key={publicacion._id}
          url={publicacion.url}
          desc={publicacion.descripcion}
          likes={publicacion.likes}
          postId={publicacion._id}
        />
      ))}
    </div>
  );
}

export default ListarPublicaciones;