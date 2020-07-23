const Joi = require('@hapi/joi');

const schema = Joi.object({
  _id: Joi.string(),
  firstName: Joi.string()
    .required(),
  lastName: Joi.string()
    .required(),
  age: Joi.number(),
  books: Joi.array()
    .items(
      Joi.object({
        _id: Joi.string(),
        title: Joi.string(),
        genre: Joi.string()
          .valid('novel', 'poem'),
      }),
    ),
  createdOn: Joi.date(),
  updatedOn: Joi.date(),
});

module.exports = (obj) => schema.validate(obj, { allowUnknown: false });
