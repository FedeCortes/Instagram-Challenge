# Instagram-Challenge

Requerimientos mandatorios

● Web responsive, se debe adaptar a diferentes pantallas.

● Al iniciar la aplicación debe traer la lista de publicaciones existentes y mostrarlas de forma
vertical similar a instagram, permitiendo hacer scroll para ver las siguientes publicaciones.

● La aplicación debe mostrar un botón “+” que redirige a una página o abre un modal
fullscreen para crear una nueva publicación. Dicha publicación requiere la URL a una
imagen y un texto opcional.

● Se debe poder darle like a las publicaciones existentes desde un botón ♡ y debe
incrementarse el contador “me gusta” debajo del botón ♡

● Una API que permita las siguientes operaciones:

○ Crear una publicación (Requiere la url a una imagen y un texto opcional).

○ Obtener la lista de publicaciones existentes.

○ Incrementar los likes de una publicación.

○ Posibilidad de eliminar una publicación.

Objeto Publicación

{

image: String,

text: String,

likes: Number

}

Requerimientos opcionales

● Posibilidad de cambiar el texto de la publicación.

● Al implementar el proyecto e iniciarlo, se crean automáticamente 3 publicaciones que se
visualizan desde el primer acceso a la app.

● Posibilidad de que la aplicación permita subir y hostear imágenes y brinde la URL para
utilizarla en las publicaciones

● Posibilidad de crear publicaciones con videos además de imágenes. Al mostrar la
publicación, debe mostrar el reproductor de vídeo permitiendo dar play y pausar.

● Guardar en base de datos las publicaciones.
