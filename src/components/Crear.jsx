import { Button } from '@mui/material';
import React from 'react';
import Swal from 'sweetalert2';

const Crear = () => {
    const handleOpenDialog = async () => {
        const { value: url } = await Swal.fire({
          title: 'Ingresar URL',
          input: 'text',
          inputPlaceholder: 'Ingrese la URL',
          inputValidator: (value) => {
            if (!value) {
              return 'Por favor, ingrese una URL';
            }
          },
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Siguiente',
        });
      
        const { value: optionalText } = await Swal.fire({
          title: 'Texto opcional',
          input: 'text',
          inputPlaceholder: 'Ingrese un texto opcional',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Crear Publicación',
        });
      
        // Aca se usa la 'url' y 'optionalText' para crear la publicación
        console.log('URL ingresada:', url);
        console.log('Texto opcional ingresado:', optionalText || 'Sin descripción opcional');
      };
  return (

    <div style={{ textAlign: 'center' }}>
      <Button onClick={handleOpenDialog}>
        <strong>Crear publicación <br />+ </strong>
     </Button>
    </div>
  );
}

export default Crear;