import React from 'react'

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Publicacion = () => {
  return (
    <div>
      
        <img src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg" style={{width:"400px"}}></img>
        
        <Box style={{display:"flex", justifyContent:"space-between"}}>
        <Box>
        <FavoriteBorderIcon fontSize="large"></FavoriteBorderIcon>
        <p style={{marginTop:"0"}}>1 Me gusta</p>
        </Box>
        <Typography variant="body2" color="textSecondary">
       Descripcion de la imagen
        </Typography>
        </Box>
      

    </div>
  )
}

export default Publicacion