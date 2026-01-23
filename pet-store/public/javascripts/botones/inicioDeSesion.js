"use strict";
import {_addLocalStorage} from "../utilities/localStorageManager.js";


export function iniciarSesion(iniciarSesionBoton)
{
    iniciarSesionBoton.addEventListener("click", async () => {
        const user = document.getElementById("usuario").value;
        const pass = Number(document.getElementById("password").value);

        let res = await fetch("http://localhost:3000/pet/usuarios");
        let data = await res.json();

        let usuarioValido = false;

        for (const usuarioData of await data)
        {

            if (usuarioData.usuario === user && pass === usuarioData.password) {
                usuarioValido = true;
            }

        }

        if (usuarioValido) {
            _addLocalStorage("UsuarioValidado", true);
            _addLocalStorage("usuario", user);
            alert("Sesión iniciada correctamente");
            window.location.reload();
        }

    });
}