"use strict";

import { obtenerPokemonAleatorio } from "../servicios/poke-api.js";
import { _addLocalStorage, _loadLocalStorage } from "../utilities/localStorageManager.js";

export class DomFacade
{
    async domBatalla(seccion)
    {
        const pokemon = await obtenerPokemonAleatorio();

        _addLocalStorage("Pokemon", pokemon);
        const vidaJ = _loadLocalStorage("VidaJugador");

        seccion.innerHTML = `
            <h1 id="nombrePokemon">${pokemon.nombre}</h1>
            <p id="idVida">Vida: ${pokemon.vida}</p>
            <p id="idAtaque">Ataque: ${pokemon.ataque}</p>
            <img src="${pokemon.spriteFrontal}" alt="Pokemon por la parte de atras" id="imagenDelantera">
            <button id="botonAtacar">Atacar</button>
            <button id="botonEscapar">Escapar</button>
            <button id="botonAtrapar">Atrapar</button>
            <p id="idVidaJugador">Vida jugador: ${vidaJ}</p>
        `;
    }

    async domEquipo(seccion) {
        const equipo = _loadLocalStorage("Capturados") || [];

        let html = "";

        for (const pokemon of equipo) {
            html += `<section>
            <h1>${pokemon.nombre}</h1>
            <img src="${pokemon.sprite}" alt="Foto pokemon">
            <p>Nivel: ${pokemon.nivel}</p>
        </section>`;
        }


        seccion.innerHTML = `<section id="seccionEquipo"> ${html} </section>`;
    }

}