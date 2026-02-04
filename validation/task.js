const Joi = require("joi");

exports.createTaskSchema = Joi.object({
  title: Joi.string().min(3).required(),
  completed: Joi.boolean()
});

exports.updateTaskSchema = Joi.object({
  title: Joi.string().min(3),
  completed: Joi.boolean()
});
