const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize')

class CustomersService {

  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {

    const limit = 100 ;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        Image: faker.image.avatarGitHub()
      });


    }
  }

async create(data){
  const  newCustomer = await models.User.create(data);
  return newCustomer
 }

 async find() {
  const rta = await models.User.findAll();
  return rta;
 }
 async findOne(id) {
  const customer = await models.User.findByPk(id);
  if (!customer) {
  throw  boom.notFound('customer not found')
  }
  return customer;
 }
 async update(id, changes) {
  const customer = await this.findOne(id);
    const rta = await customer.update(changes);
    return rta;

 }
 async delete(id) {
const customer = await this.findOne(id);
await customer.destroy(id);
return { id };
 }
}

module.exports = CustomersService;
