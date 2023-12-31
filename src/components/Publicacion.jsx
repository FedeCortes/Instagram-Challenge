import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios'; // Importa Axios para hacer solicitudes HTTP
import DeleteIcon from '@mui/icons-material/Delete';
import '../Styles/Publicacion.css';
import Swal from 'sweetalert2';

import Card from '@mui/material/Card'; // Importa la tarjeta
import CardContent from '@mui/material/CardContent'; // Importa el contenido de la tarjeta


const Publicacion = ({ url, desc, postId, likes }) => {
  const [meGusta, setMeGusta] = useState(likes);
  const [editando, setEditando] = useState(false); // Estado para controlar si se está editando la descripción
  const [nuevaDescripcion, setNuevaDescripcion] = useState(desc); // Estado para almacenar la nueva descripción

  // Función para verificar si la URL es un video
  const esVideo = (url) => {
   
    return url.includes('youtube.com');
  };

  const agregarMeGusta = () => {
    setMeGusta(meGusta + 1);

    // Realiza una solicitud PUT al backend para actualizar los "likes" en el servidor
    axios.put(`https://instagramchallenge-r5vgbaz8y-fedecortes.vercel.app/api/publicaciones/${postId}/`, {
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
    axios.delete(`https://instagramchallenge-r5vgbaz8y-fedecortes.vercel.app/api/publicaciones/${postId}/`)
    .then(response => {
      // Maneja la respuesta del servidor, si es necesario
    
      Swal.fire('Publicación eliminada', 'Eliminaste una publicacion del servidor', 'error');
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
    axios.put(`https://instagramchallenge-r5vgbaz8y-fedecortes.vercel.app/api/publicaciones/${postId}/`, {
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
    <Card>
    <CardContent>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end", // Alinea el ícono a la derecha
        }}
      >
        <DeleteIcon onClick={deletePost} className="delete-icon" />
        {esVideo(url) ? (
          // Si es un video, muestra el video en lugar de la imagen
          <iframe
            className="responsive"
            src={url}
            title="Video"
            allowFullScreen
          ></iframe>
        ) : (
          // Si no es un video, muestra la imagen
          <img
            src={url}
            alt="Imagen"
            className="responsive"
          />
        )}
      </Box>

      <Box
      className="responsive"
        sx={{
          
          marginTop: "5px",
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
     <Box
  display="flex"
  
  flexDirection="column" // Cambia la dirección de los elementos a columna
  sx={{
    marginBottom: 0,
    "&:hover": { cursor: "pointer" },
  }}
>
  <FavoriteBorderIcon
    fontSize="large"
    onClick={agregarMeGusta}
    sx={{ marginBottom: "4px" }} // Ajusta el margen inferior del ícono
  />
  
  <Typography sx={{ margin: 0, padding: 0 }} variant="body2">
    <strong>{meGusta} Me gusta </strong>
  </Typography>
</Box>
            <Typography variant="body2" color="textSecondary">
              {desc}
            </Typography>
            <button onClick={handleEditar}>Editar</button>
          </>
        )}
      </Box>
    </Box>
    </CardContent>
    </Card>
  );
}

export default Publicacion;