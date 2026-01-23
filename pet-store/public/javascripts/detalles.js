"use strict";

const detallesMascota = document.getElementById('detallesMascota');

// Obtener la id de la URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id) {
    fetch(`http://localhost:3000/pet/${id}`)
        .then(res => res.json())
        .then(mascota => {
            detallesMascota.innerHTML = `
        <h2>${mascota.nombre}</h2>
        <img src="./javascripts/imagenes/${mascota.imagen}" alt="${mascota.nombre}">
        <p>Descripción: ${mascota.descripcion || 'No hay descripción'}</p>
        <p>Tipo: ${mascota.tipo}</p>
        <p>Estado: ${mascota.estado}</p>
        <button id="borrarMascota">Borrar</button>
        <form id="formularioModificar">
            <label>Nombre:</label>
            <input type="text"><br><br>
            <label>Descripcion:</label>
            <input type="text"><br><br>
            <label>Imagen:</label>
            <input type="text"><br><br>
            <label>Tipo:</label>
            <input type="text"><br><br>
            <label>Estado:</label>
            <input type="text"><br><br>
            <input type="submit" value="Modificar Mascota">
        </form>
      `;
            const borrarMascota = document.getElementById("borrarMascota");
            borrarMascota.addEventListener("click", async () => {
                await fetch(`http://localhost:3000/pet/${id}`, {
                    method: "DELETE"
                });
                window.location.href = "./index.html";
            });

            const formularioModificar = document.getElementById("formularioModificar");
            formularioModificar.addEventListener("submit", async (e) => {
                e.preventDefault();

                const inputs = formularioModificar.querySelectorAll("input[type='text']");

                const mascotaActualizada = {
                    nombre: inputs[0].value,
                    descripcion: inputs[1].value,
                    imagen: inputs[2].value,
                    tipo: inputs[3].value,
                    estado: inputs[4].value
                };

                await fetch(`http://localhost:3000/pet/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(mascotaActualizada)
                });

                window.location.href = "./index.html";
            });
        })
        .catch(err => {
            detallesMascota.innerHTML = '<p>Error al cargar el animal.</p>';
            console.error(err);
        });
} else {
    detallesMascota.innerHTML = '<p>Error no se ha añadido bien el ID</p>';
}
