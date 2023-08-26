let url = "https://jsonplaceholder.typicode.com"

let pedidoAPI = fetch(`${url}/users`)

pedidoAPI
    .then(respuestaUsuarios => respuestaUsuarios.json())
    .then(respuestaUsuarios => {
        let idUser = respuestaUsuarios[3].id
        return fetch(`${url}/posts?userId=${idUser}`)
    })
    .then(respuestaPosteos => respuestaPosteos.json())
    .then(respuestaPosteos => {
        console.log(respuestaPosteos)
    })
    .catch(error => {
        console.error(error)
    })
    .finally(
        console.log("Seguime en @sergiecode")
    )

//