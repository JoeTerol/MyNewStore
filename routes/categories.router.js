
const express = require('express');
const router = express.Router();
const CategoriesService = require('../services/categories.service');
const service = new CategoriesService()

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find();
    res.status(201).json(categories);
  } catch(error){
    next(error)
  }
  });

  router.get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch(error){
      next(error)
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      const body = req.body
      const newCategory = await service.create(body)
      res.status(201).json(newCategory);
    } catch(error){
      next(error)
    }
  });

  router.patch('/:id', async (req, res, next) => {
    try {
      const  { id } =  req.params;
      const body = req.body;
      const categoryUpdated = await service.update(id, body)
      res.json(categoryUpdated);
    } catch(error){
      next(error)
    }
  });
  router.delete('/:id', async (req, res, next) => {
    try {
      const  { id } =  req.params;
      const rta = await service.delete(id);
      res.json(rta);
    }catch(error){
      next(error)
    }
  });
  module.exports = router;

module.exports = router;
