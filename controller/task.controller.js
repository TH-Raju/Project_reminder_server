const { ObjectId } = require("mongodb");
const dbConnect = require("../utils/dbConnect");

const taskCollection = dbConnect().db('geniusCar').collection('task');
module.exports.getProductOrder = async (req, res) => {
    let query = {}
    if (req.query.email) {
        query = {
            email: req.query.email
        }
    }
    const cursor = taskCollection.find(query)
    const productOrders = await cursor.toArray();
    res.send(productOrders)
}

// module.exports.deleteTask = async (req, res) => {
//     const id = req.params.id;
//     const query = { _id: new ObjectId(id) }
//     const result = await taskCollection.deleteOne(query);
//     res.send(result)
// }