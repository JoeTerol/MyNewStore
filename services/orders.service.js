const { faker } = require('@faker-js/faker');

class OrdersService {

  constructor() {
    this.orders = [];
    this.generate();
  }
  generate() {

    const limit = 100 ;
    for (let index = 0; index < limit; index++) {
      this.orders.push({
        id: faker.string.uuid(),

      });


    }
  }

  async create(data){
  const  newProduct = {
    id: faker.string.uuid(),
    ...data

  }
  this.orders.push(newProduct);
  return newProduct
 }

 async find() {
  return this.orders;

 }
 async findOne(id) {
  return this.orders.find(item => item.id === id );
 }
 async update(id, changes) {
  const index = this.orders.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error('product nto found');
  }
  const product = this.orders[index]
  this.orders[index] = {
    ...product,
    ...changes
  }

  return this.orders[index];

 }
 async delete(id) {
  const index = this.orders.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error('product nto found');
  }
  this.orders.splice(index, 1);
  return { id };
 }
}

module.exports = OrdersService;
