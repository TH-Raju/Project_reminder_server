const express = require('express')
const router = express.Router();
const carController = require("../controller/services.controller.js");

// router.get('/', (req, res) => {
//     res.send("route found")
// })

router.route('/').get(carController.getServices).post(carController.postserviceOrder)
router.route('/:id').delete(carController.deleteTask)




module.exports = router;