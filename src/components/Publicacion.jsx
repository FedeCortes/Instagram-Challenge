import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios'; // Importa Axios para hacer solicitudes HTTP
import DeleteIcon from '@mui/icons-material/Delete';

const Publicacion = ({ url, desc, postId, likes }) => {
  const [meGusta, setMeGusta] = useState(likes);
  const [editando, setEditando] = useState(false); // Estado para controlar si se está editando la descripción
  const [nuevaDescripcion, setNuevaDescripcion] = useState(desc); // Estado para almacenar la nueva descripción

  // Función para verificar si la URL es un video
  const esVideo = (url) => {
    // Puedes agregar lógica para verificar si la URL es de un video
    // Por ejemplo, puedes verificar la extensión de la URL o algún otro criterio específico.
    // Aquí se asume que si la URL contiene "youtube.com" es un video, pero puedes personalizar esto.
    return url.includes('youtube.com');
  };

  const agregarMeGusta = () => {
    setMeGusta(meGusta + 1);

    // Realiza una solicitud PUT al backend para actualizar los "likes" en el servidor
    axios.put(`http://localhost:9000/api/publicaciones/${postId}/`, {
      url: url,
      descripcion: nuevaDescripcion, // Usar la nueva descripción
      likes: meGusta + 1,
    })
      .then(response => {
        // Maneja la respuesta del servidor, si es necesario
        console.log('Likes actualizados en el servidor:', response.data);
      })
      .catch(error => {
        // Maneja el error, si es necesario
        console.error('Error al actualizar likes en el servidor:', error);
      });
  };

  const deletePost = () => {
    axios.delete(`http://localhost:9000/api/publicaciones/${postId}/`)
    .then(response => {
      // Maneja la respuesta del servidor, si es necesario
      alert('Publicación borrada en el servidor:', response.data);
    })
    .catch(error => {
      // Maneja el error, si es necesario
      console.error('Error al borrar publicación del servidor:', error);
    });
  }

  const handleEditar = () => {
    setEditando(true); // Habilita la edición
  }

  const handleGuardar = () => {
    // Realiza una solicitud PUT al backend para actualizar la descripción
    axios.put(`http://localhost:9000/api/publicaciones/${postId}/`, {
      url: url,
      descripcion: nuevaDescripcion, // Usa la nueva descripción
      likes: meGusta,
    })
      .then(response => {
        // Maneja la respuesta del servidor, si es necesario
        console.log('Descripción actualizada en el servidor:', response.data);
        setEditando(false); // Deshabilita la edición después de guardar
      })
      .catch(error => {
        // Maneja el error, si es necesario
        console.error('Error al actualizar descripción en el servidor:', error);
      });
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end", // Alinea el ícono a la derecha
        }}
      >
        <DeleteIcon onClick={deletePost} />
        {esVideo(url) ? (
          // Si es un video, muestra el video en lugar de la imagen
          <iframe
            width="400"
            height="225"
            src={url}
            title="Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          // Si no es un video, muestra la imagen
          <img
            src={url}
            style={{ width: "400px" }}
            alt="Imagen"
          />
        )}
      </Box>

      <Box
        style={{
          width: "400px",
          marginTop: "16px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {editando ? (
          // Si se está editando, mostrar un campo de entrada de texto para editar la descripción
          <>
            <input
              type="text"
              value={nuevaDescripcion}
              onChange={(e) => setNuevaDescripcion(e.target.value)}
            />
            <button onClick={handleGuardar}>Guardar</button>
          </>
        ) : (
          // Si no se está editando, mostrar la descripción y el botón de editar
          <>
            <Box >
              <FavoriteBorderIcon fontSize="large" onClick={agregarMeGusta} />
             
              <p style={{ margin: "0", marginLeft: "8px" }}><strong>{meGusta} Me gusta </strong></p>
            </Box>
            <Typography variant="body2" color="textSecondary">
              {desc}
            </Typography>
            <button onClick={handleEditar}>Editar</button>
          </>
        )}
      </Box>
    </Box>
  );
}

export default Publicacion;