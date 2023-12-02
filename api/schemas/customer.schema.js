const Joi = require('joi');

const id = Joi.string();
const name = Joi.number().integer();
const lastName = Joi.string();
const phone = Joi.string();

// const role = Joi.string().min(5)



const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.Required(),
  phone: phone.required(),

});
const updateCustomerSchema = Joi.object({

    name,
    lastName

});
const getCustomerSchema = Joi.object({
    id: id.required(),

});
module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema };

