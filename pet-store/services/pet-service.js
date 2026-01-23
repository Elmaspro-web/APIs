const Pet = require("../models/petModel");
const { MongoClient, ObjectId} = require("mongodb");

class PetService {
    static async get() {
        const uri = "mongodb://mongoadmin:secret@localhost:27017";
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const database = client.db("PetsDB");
            const petDB = database.collection("pets");

            const pets = await petDB.find().toArray();

            return pets;
        } finally {
            await client.close();
        }
    }

    static async getUsers() {
        const uri = "mongodb://mongoadmin:secret@localhost:27017";
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const database = client.db("PetsDB");
            const petDB = database.collection("usuarios");

            const users = await petDB.find().toArray();

            return users;
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
            const database = client.db("PetsDB");
            const petDB = database.collection("pets");

            const pets = await petDB.findOne({_id: new ObjectId(id)});

            return pets;
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
            const database = client.db("PetsDB");
            const petDB = database.collection("pets");

            const pets = await petDB.find({tipo: tipo}).toArray();
            return pets;
        } finally {
            await client.close();
        }
    }

    static async post(name, desc, img, type, status) {
        const uri = 'mongodb://mongoadmin:secret@localhost:27017';
        const mongo_client = new MongoClient(uri);
        try {
            await mongo_client.connect();
            const database = mongo_client.db('PetsDB');
            const table = database.collection('pets');

            const pet_data = await table.insertOne({nombre: name, descripcion: desc, imagen: img, tipo: type, estado: status});
            return pet_data;
        } catch (error) {
            console.log(error);
        } finally {
            await mongo_client.close();
        }
    }

    static async delete(id) {
        const uri = 'mongodb://mongoadmin:secret@localhost:27017';
        const mongo_client = new MongoClient(uri);
        try {
            await mongo_client.connect();
            const database = mongo_client.db('PetsDB');
            const table = database.collection('pets');

            const pet_data = await table.deleteOne({_id: new ObjectId(id)});
            return pet_data;
        } finally {
            await mongo_client.close();
        }
    }

    static async put(id, name, desc, img, type, status) {
        const uri = 'mongodb://mongoadmin:secret@localhost:27017';
        const mongo_client = new MongoClient(uri);
        try {
            await mongo_client.connect();
            const database = mongo_client.db('PetsDB');
            const table = database.collection('pets');

            const pet_data = await table.updateOne({_id: new ObjectId(id)}, {$set: {nombre: name, descripcion: desc, imagen: img, tipo: type, estado: status}});
            return pet_data;
        } finally {
            await mongo_client.close();
        }
    }

    static async postUser(usuario, password) {
        const uri = 'mongodb://mongoadmin:secret@localhost:27017';
        const mongo_client = new MongoClient(uri);
        try {
            await mongo_client.connect();
            const database = mongo_client.db('PetsDB');
            const table = database.collection('usuarios');

            const user_data = await table.insertOne({usuario: usuario, password: password});
            return user_data;
        } catch (e) {
            console.log(e);
        } finally {
            await mongo_client.close();
        }
    }
}

module.exports = PetService;