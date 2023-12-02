
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize')

class CustomersService {

  constructor() {}

 async find() {
  const rta = await models.Customer.findAll();
  return rta;
 }
 async findOne(id) {
  const customer = await models.Customer.findByPk(id);
  if (!customer) {
  throw  boom.notFound('customer not found')
  }
  return customer;
 }
 async create(data){
  return data
 }
 async update(id, changes) {
  const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;

 }
 async delete(id) {
const model = await this.findOne(id);
await model.destroy(id);
return { rta: true };
 }
}

module.exports = CustomersService;
