"use strict";

import {_loadLocalStorage, _addLocalStorage} from "../utilities/localStorageManager.js";

function atacarPokemon(botonAtacar)
{
    botonAtacar.addEventListener("click", (e) => {
        e.preventDefault();

        let pokemon = _loadLocalStorage("Pokemon");
        let vidaJugador = _loadLocalStorage("VidaJugador");

        let danoJugador = Math.floor(Math.random() * 41);

        pokemon.vida -= danoJugador;

        if (pokemon.vida <= 0)
        {
            console.log(`Has derrotado a ${pokemon.nombre}`)

            if (_loadLocalStorage("esShiny") === true)
            {
                vidaJugador = 1000;
            }
            else
            {
                vidaJugador += Math.floor((vidaJugador/100)*5);
            }
            _addLocalStorage("VidaJugador", vidaJugador);
            window.location.reload();
            return;
        }

        console.log(`Te ha atacado ${pokemon.nombre} y te ha quitado ${pokemon.ataque}, le falta ${pokemon.vida} de vida`)
        console.log(`Le has quitado ${danoJugador}`)

        vidaJugador -= pokemon.ataque;

        if (vidaJugador <= 0)
        {
            _addLocalStorage("VidaJugador", vidaJugador);

            alert("HAS PERDIDO")

            // BORRAR TODO SUPONGO
            window.location.reload();

            return;
        }

        _addLocalStorage("VidaJugador", vidaJugador);
        _addLocalStorage("Pokemon", pokemon);

        const vidaP = document.getElementById("idVida");
        vidaP.textContent = `Vida: ${pokemon.vida}`;

        const vidaJ = document.getElementById("idVidaJugador");
        vidaJ.textContent = `Vida jugador: ${vidaJugador}`;
    });
}

export { atacarPokemon };