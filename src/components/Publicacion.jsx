import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios'; // Importa Axios para hacer solicitudes HTTP
import DeleteIcon from '@mui/icons-material/Delete';

const Publicacion = ({ url, desc, postId, likes }) => {
  const [meGusta, setMeGusta] = useState(likes);

  const agregarMeGusta = () => {
    setMeGusta(meGusta + 1);

    // Realiza una solicitud PUT al backend para actualizar los "likes" en el servidor
    axios.put(`http://localhost:9000/api/publicaciones/${postId}/`, {
      url: url,
      descripcion: desc,
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
      alert('Publicacion borrada en el servidor:', response.data);
    })
    .catch(error => {
      // Maneja el error, si es necesario
      console.error('Error al borrar publicacion del servidor:', error);
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
        <DeleteIcon onClick={deletePost}/>
        <img
          src={url}
          style={{ width: "400px" }}
          alt="Imagen"
        />
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
        <Box display="flex" alignItems="center">
          <FavoriteBorderIcon fontSize="large" onClick={agregarMeGusta} />
          <p style={{ margin: "0", marginLeft: "8px" }}>{meGusta} Me gusta</p>
        </Box>
        <Typography variant="body2" color="textSecondary">
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default Publicacion;