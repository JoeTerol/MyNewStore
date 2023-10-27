const express = require('express');
const router = express.Router();
const OrdersService = require('../services/orders.service')
const service = new OrdersService() //instancia



router.get('/', async (req, res, next) => {
 try {
  const orders = await service.find();
  res.status(201).json(orders);
 } catch (error) {
  next(error)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await service.findOne(id);
    res.json(order);
  }catch(error){
    next(error)
  }
});
router.post('/', async (req, res, next) => {
  try {
    const body = req.body
    const newOrder =await service.create(body)
    res.status(201).json(newOrder);
  }catch(error){
    next(error)
  }
});
router.patch('/:id', async (req, res, next) => {
  try {
    const  { id } =  req.params;
    const body = req.body;
    const order =await service.update(id, body)
    res.json(order);
  }catch(error){
    next(error)
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    const  { id } =  req.params;
  const rta =await service.delete(id);
  res.json(rta);
  }catch(error){
    next(error)
  }
});
module.exports = router;
