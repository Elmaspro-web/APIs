"use strict";

function escaparPokemon(botonEscapar)
{
    botonEscapar.addEventListener("click", () => {
        window.location.reload();
    });
}

export { escaparPokemon };