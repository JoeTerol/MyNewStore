const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone = Joi.number();
const userId = Joi.number().integer();

// const role = Joi.string().min(5)



const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required(),


});
const updateCustomerSchema = Joi.object({

    name,
    lastName,
    phone,
    userId


});
const getCustomerSchema = Joi.object({
    id: id.required(),

});
module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema };

