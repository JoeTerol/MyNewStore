const express = require('express');
const router = express.Router();
const ProductsService = require('../services/products.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getProductSchema, createProductSchema, updateProductSchema } = require('../schemas/product.schema');
const service = new ProductsService() //instancia



router.get('/', async (req, res, next) => {
try {
    const products =await service.find();
    res.status(201).json(products);
}catch(error) {
  next(error)
 }
});

router.get('/:id',
validatorHandler( getProductSchema, 'params' ),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error)
  }
});
router.post('/',
  validatorHandler(createProductSchema, 'body')  ,
  async (req, res, next) => {
  try {
      const body = req.body
      const newProduct = await service.create(body)
      res.status(201).json(newProduct);
    } catch(error){
      next(error)
    }
  }
);
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),

  async (req, res, next) => {
  try {
    const  { id } =  req.params;
    const body = req.body;
    const product = await service.update(id, body)
    res.json(product);
  } catch (error) {
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
