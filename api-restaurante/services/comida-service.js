const Comida = require("../models/comida");
const { MongoClient, ObjectId} = require("mongodb");

class ComidaService {
    static async get() {
        const uri = "mongodb://mongoadmin:secret@localhost:27017";
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const database = client.db("ComidasDB");
            const comidaDB = database.collection("comidas");

            const comidas = await comidaDB.find().toArray();

            return comidas;
        } finally {
            await client.close();
        }
    }

    static async getId(id)
    {
        const uri = "mongodb://mongoadmin:secret@localhost:27017";
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const database = client.db("ComidasDB");
            const comidaDB = database.collection("comidas");

            const comidas = await comidaDB.findOne({_id: new ObjectId(id)});

            return comidas;
        } finally {
            await client.close();
        }
    }

    static async getTipo(tipo)
    {
        const uri = "mongodb://mongoadmin:secret@localhost:27017";
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const database = client.db("ComidasDB");
            const comidaDB = database.collection("comidas");

            const comidas = await comidaDB.find({tipo: tipo}).toArray();
            return comidas;
        } finally {
            await client.close();
        }
    }
}

module.exports = ComidaService;