"use strict";

import {Petdbservice} from "../servicesPets/petdbservice.js";

class DomFacade
{

    constructor()
    {
        this.petdbservice = new Petdbservice();
    }

    login(header, main, footer)
    {
        header.innerHTML = `<h1>Login</h1>`

        main.innerHTML = `
            <form>
            
            <label>Nombre:</label>
            <input type="text" id="usuario" placeholder="Usuario"><br><br>
            <label>Contraseña:</label>
            <input type="text" id="password" placeholder="Contraseña"><br><br>
            <input type="button" value="Iniciar Sesión" id="iniciarSesionBoton">
            
            </form>
        `;

        footer.innerHTML = `<p>@Copyright Ignacio Langarica</p>`
    }

    async paginaInicio(header, main, footer) {
        header.innerHTML = `<h1>Tienda de mascotas</h1>`

        const mascotas = await this.petdbservice.mascotas();

        let seccion = document.createElement("section");

        for (const mascota of mascotas)
        {
            seccion.innerHTML += `<article class="card ${mascota.estado}"><a href="./detalles.html?id=${mascota._id}">
                
                <h3>${mascota.nombre}</h3>
                <img src="./javascripts/imagenes/${mascota.imagen}" alt="${mascota.nombre}">
                <p>Estado: ${mascota.estado}</p>

            </a></article>`;
        }

        main.appendChild(seccion);

        main.innerHTML += `
            <h1>Añadir Perro</h1>
            <form id="formularioAnadirPerro">
                <label>Nombre:</label>
                <input type="text" id="nombre" required><br><br>
                <label>Descripcion:</label>
                <input type="text" id="descripcion" required><br><br>
                <label>Imagen:</label>
                <input type="text" id="imagen" required><br><br>
                <label>Tipo:</label>
                <input type="text" id="tipo" required><br><br>
                <label>Estado:</label>
                <input type="text" id="estado" required><br><br>
                <input type="submit">
            </form>
        `;

        footer.innerHTML = `<p>@Copyright Ignacio Langarica</p>`
    }

}

export {DomFacade};