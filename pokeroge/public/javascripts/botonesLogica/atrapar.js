"use strict";

import {_addLocalStorage, _loadLocalStorage} from "../utilities/localStorageManager.js";



function atraparPokemon(botonAtrapar)
{
    botonAtrapar.addEventListener("click", () => {
        const vidaInicialPokemon = _loadLocalStorage("VidaInicial");
        const pokemon = _loadLocalStorage("Pokemon")

        let arrayPokemon = _loadLocalStorage("Capturados") || [];
        const perdidos = _loadLocalStorage("Perdidos") || [];

        const porcentajeCaptura = ((pokemon.vida * 100) / vidaInicialPokemon)
        const probabilidadCaptura = 100 - porcentajeCaptura;

        const random = Math.floor(Math.random() * 100) + 1;

        const encontrado = arrayPokemon.find(p => p.nombre === pokemon.nombre);

        if (random <= probabilidadCaptura) {

            if (encontrado) {
                encontrado.nivel++;
            } else {
                arrayPokemon.push({
                    nombre: pokemon.nombre,
                    sprite: pokemon.spriteFrontal,
                    nivel: 1,

                });
            }

            _addLocalStorage("Capturados", arrayPokemon);

            window.location.reload();

        } else {
            perdidos.push(pokemon.nombre);
            _addLocalStorage("Perdidos", perdidos);
            window.location.reload();
        }

    });
}

export { atraparPokemon };