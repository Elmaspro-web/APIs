"use strict";

import {DomFacade} from "./domFacade/DomFacade.js"
import {_addLocalStorage, _loadLocalStorage} from "./utilities/localStorageManager.js";
import {iniciarSesion} from "./botones/inicioDeSesion.js";
import {Petdbservice} from "./servicesPets/petdbservice.js";

const petService = new Petdbservice();

const domFacade = new DomFacade();

const seccionDinamica = document.getElementById("seccionDinamica");
const headerDinamico = document.getElementById("headerDinamico");
const footerDinamico = document.getElementById("footerDinamico");



document.addEventListener("DOMContentLoaded", async () => {
    if (_loadLocalStorage("UsuarioValidado") !== true || _loadLocalStorage("UsuarioValidado") === null) {
        domFacade.login(headerDinamico, seccionDinamica, footerDinamico);

        const iniciarSesionBoton = document.getElementById("iniciarSesionBoton");
        iniciarSesion(iniciarSesionBoton);
    } else {
        await domFacade.paginaInicio(headerDinamico, seccionDinamica, footerDinamico);

        const formularioAnadirPerro = document.getElementById("formularioAnadirPerro");

        formularioAnadirPerro.addEventListener("submit", async e => {

            const nombre = document.getElementById("nombre").value;
            const descripcion = document.getElementById("descripcion").value;
            const imagen = document.getElementById("imagen").value;
            const tipo = document.getElementById("tipo").value;
            const estado = document.getElementById("estado").value;

            await petService.agregarMascota(nombre, descripcion, imagen, tipo, estado);

        });
    }
});

