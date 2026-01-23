var express = require('express');
var router = express.Router();

let Pet = require("../models/petModel");
let PetService = require("../services/pet-service");

router.get("/", async function (req, res, next) {
    const pet = await PetService.get();
    res.json(pet);
});

router.get("/usuarios", async function (req, res, next) {
    const pet = await PetService.getUsers();
    res.json(pet);
});

router.get("/:id", async function (req, res, next) {
    const pet = await PetService.getId(req.params.id);
    res.json(pet);
});

router.post('/', async function(req, res, next) {
    res.json(await PetService.post(req.body.nombre, req.body.descripcion, req.body.imagen, req.body.tipo, req.body.estado));
});

router.delete('/:id', async function(req, res, next) {
   res.json(await PetService.delete(req.params.id));
});

router.put('/:id', async function(req, res, next){
    res.json(await PetService.put(req.params.id, req.body.nombre, req.body.descripcion, req.body.imagen, req.body.tipo, req.body.estado));
});

module.exports = router;
