"use strict";

let url = "http://localhost:3000/comida";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const lista = document.getElementById("lista");

        data.forEach(comida => {
            const li = document.createElement("li");
            const idComida = document.createElement("a")

            idComida.href = `detalle.html?id=${comida._id}`;
            idComida.textContent = `${comida.nombre} - $${comida.precio}`;


            li.appendChild(idComida);
            lista.appendChild(li);
        });
    })
    .catch(error => console.error("Error:", error));