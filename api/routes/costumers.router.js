const express = require('express');
const router = express.Router();
const CustomersService = require('../services/customers.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getCustomerSchema, createCustomerSchema, updateCustomerSchema } = require('../schemas/order.schema');
const service = new CustomersService() //instancia



router.get('/',
 async (req, res, next) => {
 try {
  const customers = await service.find();
  res.status(201).json(customers)
 } catch (error) {
  next(error)
  }
});
router.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await service.findOne(id);
    res.json(customer);
  }catch(error){
    next(error)
  }
});
router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body
    const newCustomer =await service.create(body)
    res.status(201).json(newCustomer);
  }catch(error){
    next(error)
  }
});
router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
   async (req, res, next) => {
  try {
    const  { id } =  req.params;
    const body = req.body;
    const customer =await service.update(id, body)
    res.json(customer);
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
