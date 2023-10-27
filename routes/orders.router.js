const express = require('express');
const router = express.Router();
const OrdersService = require('../services/orders.service')
const service = new OrdersService() //instancia



router.get('/', async (req, res) => {
const orders = await service.find();
  res.status(201).json(orders);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const order = await service.findOne(id);
  res.json(order);
});
router.post('/', async (req, res) => {
  const body = req.body
  const newOrder =await service.create(body)
  res.status(201).json(newOrder);
});
router.patch('/:id', async (req, res) => {
  const  { id } =  req.params;
  const body = req.body;
  const order =await service.update(id, body)
  res.json(order);
});
router.delete('/:id', async (req, res) => {
  const  { id } =  req.params;
  const rta =await service.delete(id);
  res.json(rta);
});
module.exports = router;
