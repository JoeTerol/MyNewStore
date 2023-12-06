const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize')
class CategoriesService {
  constructor() {
  }
  async create(data){
    const  newCategory = await models.Category.create(data);
    return newCategory;
  }
   async  find() {
    const categories = await models.Category.findAll();
    return categories;
   }
   async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: ['products']
    });
    return category;
   }
   async update(id, changes) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('category not found')
    }
    const product = this.categories[index]
    this.categories[index] = {
      ...product,
      ...changes
    }

    return this.categories[index];

   }
   async delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('category not found');
    }
    this.categories.splice(index, 1);
    return { id };
   }


};

module.exports = CategoriesService;
