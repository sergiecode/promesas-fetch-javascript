![fetch y promesas](https://raw.githubusercontent.com/sergiecode/promesas-fetch-javascript/master/promesas-fetch-javascript1.jpg)

![fetch y promesas 2](https://raw.githubusercontent.com/sergiecode/promesas-fetch-javascript/master/promesas-fetch-javascript2.jpg)

![Fetch y promesas 3](https://raw.githubusercontent.com/sergiecode/promesas-fetch-javascript/master/promesas-fetch-javascript3.jpg)

# Tutorial de manejo de promesas con Fetch

Este tutorial te guiará a través del código proporcionado, el cual utiliza el método `fetch` para realizar solicitudes HTTP a una API y manejar las respuestas utilizando promesas en JavaScript. Aprenderás cómo realizar solicitudes, encadenar promesas y manejar errores.

## Introducción

El código proporcionado muestra cómo utilizar la función `fetch` para realizar solicitudes a una API pública de prueba llamada "JSONPlaceholder". La API proporciona datos de prueba sobre usuarios y publicaciones. El objetivo del tutorial es obtener los detalles de los usuarios y luego obtener las publicaciones relacionadas con el usuario en la posición 3 de la lista.

## Código Explicado


```
let url = "https://jsonplaceholder.typicode.com";

let pedidoAPI = fetch(`${url}/users`);

pedidoAPI
    .then(respuestaUsuarios => respuestaUsuarios.json())
    .then(respuestaUsuarios => {
        let idUser = respuestaUsuarios[3].id;
        return fetch(`${url}/posts?userId=${idUser}`);
    })
    .then(respuestaPosteos => respuestaPosteos.json())
    .then(respuestaPosteos => {
        console.log(respuestaPosteos);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(
        console.log("Seguime en @sergiecode")
    );
```

1.  **Definición de la URL**: Se define la variable `url` que almacena la base URL de la API que se va a utilizar.
    
2.  **Realizar una solicitud**: Se utiliza el método `fetch` para realizar una solicitud GET a `${url}/users`, que obtiene una lista de usuarios.
    
3.  **Encadenamiento de Promesas**:
    
    -   `.then(respuestaUsuarios => respuestaUsuarios.json())`: Se encadena un `then` para convertir la respuesta de la solicitud a formato JSON.
    -   `.then(respuestaUsuarios => {...})`: Otro `then` se encadena para acceder al usuario en la posición 3 (indice 2) de la lista y obtener su ID.
    -   `.then(respuestaPosteos => respuestaPosteos.json())`: Después, se encadena otro `then` para realizar una solicitud a `${url}/posts?userId=${idUser}` y obtener las publicaciones relacionadas con el usuario.
4.  **Manejo de Respuestas**:
    
    -   `.then(respuestaPosteos => {...})`: Se encadena un último `then` para acceder a las publicaciones obtenidas y realizar alguna acción, en este caso, imprimir las publicaciones en la consola.
5.  **Manejo de Errores**:
    
    -   `.catch(error => {...})`: Se agrega un `catch` para manejar cualquier error que ocurra durante las solicitudes o el procesamiento de los datos. Los errores se imprimirán en la consola.
6.  **Bloque Finally**:
    
    -   `.finally({...})`: El bloque `finally` se ejecutará sin importar si hubo éxito o error en las promesas anteriores. En este caso, se imprime un mensaje.
