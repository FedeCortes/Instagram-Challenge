import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

const Publicacion = () => {
  const [meGusta, setMeGusta] = useState(0);

  const agregarMeGusta = () =>{
    setMeGusta(meGusta+1);
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    
    >
      <img
        src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"
        style={{ width: "400px" }}
        alt="Imagen"
      />

      <Box
        style={{
          
          marginTop: "16px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box display="flex" alignItems="center">
          <FavoriteBorderIcon fontSize="large" onClick={agregarMeGusta}/>
          <p style={{ margin: "0", marginLeft: "8px" }}>{meGusta} Me gusta</p>
        </Box>
        <Typography variant="body2" color="textSecondary">
          Descripcion de la imagen
        </Typography>
      </Box>
    </Box>
  );
}

export default Publicacion;