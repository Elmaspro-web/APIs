"use strict";

import {_addLocalStorage} from "../utilities/localStorageManager.js";

const URL = "https://pokeapi.co/api/v2/pokemon/"

const numAleatorio = Math.floor(Math.random() * 100) + 1

async function obtenerPokemonAleatorio()
{
    try {
        const response = await fetch (URL + numAleatorio);
        const data = await response.json();

        const esShiny = (Math.floor(Math.random() * 100) + 1) > 95;

        _addLocalStorage("esShiny", esShiny);
        _addLocalStorage("VidaInicial", data.stats.find(s => s.stat.name === "hp").base_stat)

        return {
            nombre: esShiny ? `${data.name} (Shiny)` : data.name,
            ataque: data.stats.find(s => s.stat.name === "attack").base_stat,
            vida: data.stats.find(s => s.stat.name === "hp").base_stat,
            spriteFrontal: esShiny
                ? data.sprites.front_shiny
                : data.sprites.front_default,
            color: esShiny ? "Morado" : "Blanco"
        };
    } catch (error) {
        console.error("Error:", error);
    }
}

export { obtenerPokemonAleatorio };