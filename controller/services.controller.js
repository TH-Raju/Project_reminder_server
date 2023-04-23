const { ObjectId } = require("mongodb");
const dbConnect = require("../utils/dbConnect");

const serviceCollection = dbConnect().db('geniusCar').collection('task');

module.exports.getServices = async (req, res) => {
    const query = {}
    const cursor = serviceCollection.find(query)
    const services = await cursor.toArray();
    res.send(services)
}

module.exports.postserviceOrder = async (req, res) => {
    const serviceOrder = req.body;
    const result = await serviceCollection.insertOne(serviceOrder)
    res.send(result)
}
module.exports.deleteTask = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await serviceCollection.deleteOne(query);
    res.send(result)
}

