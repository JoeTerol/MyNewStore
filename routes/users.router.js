const express = require('express');
const router = express.Router();
const UsersService = require('../services/users.service')
const service = new UsersService() //instancia

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.status(201).json(users);
  }catch(error) {
    next(error)

  }
  });

  router.get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
    }catch(error) {
      next(error)
    }
  });
  router.post('/', async (req, res, next) => {
    try {
      const body = req.body
      const newProduct = await service.create(body)
      res.status(201).json(newProduct);
    }catch(error) {
      next(error)
    }
  });
  router.patch('/:id', async (req, res, next) => {
    try {
      const  { id } =  req.params;
    const body = req.body;
    const user = await service.update(id, body)
    res.json(user);
    }catch(error) {
      next(error)
    }
  });
  router.delete('/:id', async (req, res, next) => {
    try {
      const  { id } =  req.params;
    const rta = await service.delete(id);
    res.json(rta);
    }catch(error) {
      next(error)
    }
  });
  module.exports = router;
