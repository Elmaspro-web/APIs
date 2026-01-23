"use strict";

import { DomFacade } from "./patrones/domFacade.js";
import { atacarPokemon } from "./botonesLogica/atacar.js";
import { escaparPokemon } from "./botonesLogica/escapar.js";
import {_addLocalStorage, _loadLocalStorage, _removeLocalStorage} from "./utilities/localStorageManager.js";
import {atraparPokemon} from "./botonesLogica/atrapar.js";

const domFacade = new DomFacade();

const seccionDinamica = document.getElementById("seccionDinamica");

const batalla = document.getElementById("batalla");
const equipo = document.getElementById("equipo");

if (_loadLocalStorage("VidaJugador") === null || _loadLocalStorage("VidaJugador") <= 0) {
    _addLocalStorage("VidaJugador", 1000);
    _removeLocalStorage("Capturados");
    _removeLocalStorage("Perdidos");
}
document.addEventListener("DOMContentLoaded", async () => {

    await domFacade.domBatalla(seccionDinamica);

    const botonAtacar = document.getElementById("botonAtacar");
    atacarPokemon(botonAtacar, seccionDinamica);

    const botonEscapar = document.getElementById("botonEscapar");
    escaparPokemon(botonEscapar);

    const botonAtrapar = document.getElementById("botonAtrapar");
    atraparPokemon(botonAtrapar, seccionDinamica);
});

batalla.addEventListener("click", async (e) => {
    e.preventDefault();

    await domFacade.domBatalla(seccionDinamica);

    const botonAtacar = document.getElementById("botonAtacar");
    atacarPokemon(botonAtacar, seccionDinamica);

    const botonEscapar = document.getElementById("botonEscapar");
    escaparPokemon(botonEscapar);

    const botonAtrapar = document.getElementById("botonAtrapar");
    atraparPokemon(botonAtrapar, seccionDinamica);
});

equipo.addEventListener("click", async (e) => {
   e.preventDefault();
   await domFacade.domEquipo(seccionDinamica);
});