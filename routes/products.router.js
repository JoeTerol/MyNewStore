const express = require('express');
const router = express.Router();
const ProductsService = require('../services/products.service')
const service = new ProductsService() //instancia



router.get('/', async (req, res, next) => {
try {
    const products =await service.find();
    res.status(201).json(products);
}catch(error) {
  next(error)
 }
});

router.get('/:id',async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error)
  }
});
router.post('/',async (req, res, next) => {
try {
  const body = req.body
  const newProduct = await service.create(body)
  res.status(201).json(newProduct);
}catch(error){
  next(error)
  }
});
router.patch('/:id', async (req, res, next) => {
  try {
  const  { id } =  req.params;
  const body = req.body;
  const product = await service.update(id, body)
  res.json(product);
  }catch (error) {
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
