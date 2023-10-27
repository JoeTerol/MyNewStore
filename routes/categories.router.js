
const express = require('express');
const router = express.Router();
const CategoriesService = require('../services/categories.service');
const service = new CategoriesService()

router.get('/', async (req, res) => {
  const categories = await service.find();
    res.status(201).json(categories);
  });
  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const category = await service.findOne(id);
    res.json(category);
  });
  router.post('/', async (req, res) => {
    const body = req.body
    const newCategory = await service.create(body)
    res.status(201).json(newCategory);
  });
  router.patch('/:id', async (req, res) => {
    const  { id } =  req.params;
    const body = req.body;
    const categoryUpdated = await service.update(id, body)
    res.json(categoryUpdated);
  });
  router.delete('/:id', async (req, res) => {
    const  { id } =  req.params;
    const rta = await service.delete(id);
    res.json(rta);
  });
  module.exports = router;

module.exports = router;
