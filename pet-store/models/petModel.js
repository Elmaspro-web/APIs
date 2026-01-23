"use strict";

class Pet
{
    constructor(nombre, descripcion, imagen, tipo, estado)
    {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.tipo = tipo;
        this.estado = estado;

    }
}

module.exports = Pet;