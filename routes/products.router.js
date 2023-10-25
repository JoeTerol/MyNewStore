const express = require('express');
const { faker } = require('@faker-js/faker')

const router = express.Router();


router.get('/', (req, res) => {
  const porducts = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    porducts.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      Image: faker.image.avatar()
    });


  }
  res.json (porducts);
});
router.get('/:id', (req, res) => {
  const { id } = req.params; //de todos los params quiero solo el ID
  res.json({

    id,
    name: "product2",
    price: 2000

    });
});

module.exports = router;
