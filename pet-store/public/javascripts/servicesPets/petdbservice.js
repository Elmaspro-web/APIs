"use strict";

export class Petdbservice
{

    async mascotas()
    {
        let arrayMascotas = [];

        const res = await fetch("http://localhost:3000/pet")
        const data = await res.json();

        for (const datum of await data)
        {
            arrayMascotas.push(datum);
        }

        return arrayMascotas;

    }

    async agregarMascota(nombre, descripcion, imagen, tipo, estado)
    {
        try{
            let res = await fetch(`http://localhost:3000/pet`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "nombre": nombre,
                    "descripcion": descripcion,
                    "imagen": imagen,
                    "tipo": tipo,
                    "estado": estado
                })
            });
            if (!res.ok){
                throw new Error("Error en la peticion");
            }
        }catch (e){
            console.log(e);
            return null;
        }
    }

}