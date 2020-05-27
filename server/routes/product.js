const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

const { auth } = require("../middleware/auth");

//=================================
//             Product
//=================================

router.post("/uploadImage", auth, (req, res) => {
  

  // after getting that image from client
  // we need to save it inside Node Server

  // Multer library
  
});


module.exports = router;
