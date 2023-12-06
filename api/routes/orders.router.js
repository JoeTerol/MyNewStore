const express = require('express');
const router = express.Router();
const OrdersService = require('../services/orders.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getOrderSchema, createOrderSchema } = require('../schemas/order.schema');
const service = new OrdersService() //instancia



router.get('/',
 async (req, res, next) => {
 try {
  const order = await service.find();
  res.status(201).json(order);
 } catch (error) {
  next(error)
  }
});
router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await service.findOne(id);
    res.json(order);
  }catch(error){
    next(error)
  }
});
router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body
    const newOrder =await service.create(body)
    res.status(201).json(newOrder);
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
