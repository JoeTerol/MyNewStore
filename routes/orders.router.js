const express = require('express');


const router = express.Router();

router.get('/orders', (req, res) => {
  res.json({
    ORDER : "order 1"
  })
})
