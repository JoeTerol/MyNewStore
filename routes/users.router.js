const express = require('express');
const router = express.Router();
const UsersService = require('../services/users.service')
const service = new UsersService() //instancia

router.get('/', async (req, res) => {
  const users = await service.find();
    res.status(201).json(users);
  });

  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  });
  router.post('/', async (req, res) => {
    const body = req.body
    const newProduct = await service.create(body)
    res.status(201).json(newProduct);
  });
  router.patch('/:id', async (req, res) => {
    const  { id } =  req.params;
    const body = req.body;
    const user = await service.update(id, body)
    res.json(user);
  });
  router.delete('/:id', async (req, res) => {
    const  { id } =  req.params;
    const rta = await service.delete(id);
    res.json(rta);
  });
  module.exports = router;
