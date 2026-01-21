"use strict";

let url = "http://localhost:3000/comida";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const lista = document.getElementById("lista");
        const listaOrdenada = document.getElementById("listaOrdenada");

        const comidasPorTipo = {};

        data.forEach(comida =>
        {
            if (!comidasPorTipo[comida.tipo])
            {
                comidasPorTipo[comida.tipo] = [];
            }
            comidasPorTipo[comida.tipo].push(comida);
        });

        for (const tipo in comidasPorTipo)
        {
            const h2 = document.createElement("h2");
            h2.textContent = tipo;
            listaOrdenada.appendChild(h2);

            // Lista de comidas del tipo
            const ul = document.createElement("ul");

            comidasPorTipo[tipo].forEach(comida => {
                const li = document.createElement("li");
                const a = document.createElement("a");

                a.href = `detalle.html?id=${comida._id}`;
                a.textContent = `${comida.nombre} - $${comida.precio}`;

                li.appendChild(a);
                ul.appendChild(li);
            });

            listaOrdenada.appendChild(ul);
        }

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