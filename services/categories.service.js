const { faker } = require('@faker-js/faker');

class CategoriesService {

  constructor() {
    this.categories = [];
    this.generate();
  }
  generate() {
    const limit = 10;
    for(let index = 0; index < limit; index++){
      this.categories.push({
        id:faker.string.uuid(),
        name: faker.company.name(),
      });
    }

  }

  create(data){
    const  newCategory = {
      id: faker.string.uuid(),
      ...data

    }
    this.categories.push(newCategory);
    return newCategory
   }

   find() {
    return this.categories;

   }
   findOne(id) {
    return this.categories.find(item => item.id === id );
   }
   update(id, changes) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('category not found');
    }
    const product = this.categories[index]
    this.categories[index] = {
      ...product,
      ...changes
    }

    return this.categories[index];

   }
   delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('category not found');
    }
    this.categories.splice(index, 1);
    return { id };
   }


};

module.exports = CategoriesService;
