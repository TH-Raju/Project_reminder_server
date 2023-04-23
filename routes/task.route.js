const express = require('express')
const router = express.Router();
const taskController = require("../controller/task.controller");

// router.get('/', (req, res) => {
//     res.send("route found")
// })

router.route('/').get(taskController.getProductOrder)
// router.route('/:id').delete(taskController.deleteTask)



module.exports = router;