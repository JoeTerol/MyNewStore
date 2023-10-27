const express = require('express');
const router = express.Router();
const OrdersService = require('../services/orders.service')
const service = new OrdersService() //instancia



router.get('/', (req, res) => {
const orders = service.find();
  res.status(201).json(orders);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const order = service.findOne(id);
  res.json(order);
});
router.post('/', (req, res) => {
  const body = req.body
  const newOrder = service.create(body)
  res.status(201).json(newOrder);
});
router.patch('/:id', (req, res) => {
  const  { id } =  req.params;
  const body = req.body;
  const order = service.update(id, body)
  res.json(order);
});
router.delete('/:id', (req, res) => {
  const  { id } =  req.params;
  const rta = service.delete(id);
  res.json(rta);
});
module.exports = router;
