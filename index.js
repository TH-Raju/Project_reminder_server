const express = require('express')
const cors = require('cors');
const router = require('./routes/services.route');
const dbConnect = require('./utils/dbConnect');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const serviceRoute = require('./routes/services.route')
const taskRoute = require('./routes/task.route')


// middleware
app.use(cors());
app.use(express.json());

// DB
dbConnect();


// Route
app.use("/task", serviceRoute)
app.use("/tasks", taskRoute)


app.get('/', (req, res) => {
    res.send("Server Working...")
})
app.listen(port, () => {
    console.log(`Server Running on ${port} port...`)
})