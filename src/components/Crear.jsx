import { Button } from '@mui/material';
import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../styles/Publicacion.css';

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

    if (url) {
      const { value: optionalText } = await Swal.fire({
        title: 'Texto opcional',
        input: 'text',
        inputPlaceholder: 'Ingrese un texto opcional',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Crear Publicación',
      });

      if (url) {
        // Realiza la solicitud POST a tu API con likes establecido en 0
        axios.post('http://localhost:9000/api/publicaciones', {
          url,
          descripcion:  optionalText || "",
          likes: 0, // Establece likes en 0
        })
        .then(response => {
          // Maneja la respuesta del servidor, por ejemplo, muestra un mensaje de éxito
          Swal.fire('Éxito', 'Publicación creada exitosamente', 'success');
        })
        .catch(error => {
          // Maneja el error, por ejemplo, muestra un mensaje de error
          Swal.fire('Error', 'No se pudo crear la publicación', 'error');
        });
      }
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={handleOpenDialog} className='crear-button'>
        <strong>Crear publicación <br />+ </strong>
      </Button>
    </div>
  );
}

export default Crear;