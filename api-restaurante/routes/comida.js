var express = require('express');
var router = express.Router();

let Comida = require("../models/comida");
let ComidaService = require("../services/comida-service");

router.get("/", async function (req, res, next) {
    const comida = await ComidaService.get();
    res.json(comida);
});

router.get("/:id", async function (req, res, next) {
    const comida = await ComidaService.getId(req.params.id);
    res.json(comida);
});

module.exports = router;
