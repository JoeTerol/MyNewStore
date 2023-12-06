const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');
class OrdersService {

  constructor() {

  }
  async create(data){
  const newOrder = await models.Order.create(data);
  return newOrder;
 }

 async find() {
  return;

 }
 async findOne(id) {
  const order = await models.Order.findByPk(id, {
    include: [
      {
        association: 'customer',
        include: ['user']
      }
    ]
  });
  return order;
 }
 async update(id, changes) {
  const index = this.orders.findIndex(item => item.id === id);
  if (index === -1) {
    throw boom.notFound('order not found');
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
    throw boom.notFound('order not found found');
  }
  this.orders.splice(index, 1);
  return { id };
 }
}

module.exports = OrdersService;
