"use strict";

const detalleDiv = document.getElementById('detalle');

// Obtener la id de la URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id) {
    fetch(`http://localhost:3000/comida/${id}`)
        .then(res => res.json())
        .then(comida => {
            detalleDiv.innerHTML = `
        <h2>${comida.nombre}</h2>
        <p>Precio: $${comida.precio || 'Sin definir'}</p>
        <p>Descripción: ${comida.descripcion || 'No hay descripción'}</p>
      `;
        })
        .catch(err => {
            detalleDiv.innerHTML = '<p>Error al cargar la comida.</p>';
            console.error(err);
        });
} else {
    detalleDiv.innerHTML = '<p>Error no se ha añadido bien el ID</p>';
}
