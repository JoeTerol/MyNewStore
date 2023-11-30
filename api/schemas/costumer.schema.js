const Joi = require('joi');

const id = Joi.string();
const email = Joi.string().email({
  minDomainSegments: 2,
  tlds: { allow: ['com', 'net'] }
});
const password = Joi.string().min(8);
const role = Joi.string().min(5)



const createCustomerSchema = Joi.object({
    email: email.required(),
    password: password.required(),
    role: role.required()

});
const updateCustomerSchema = Joi.object({
    email: email,
    role: role,

});
const getCustomerSchema = Joi.object({
    id: id.required(),

});
module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema };

