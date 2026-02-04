const Joi = require("joi");

exports.validateBody = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(422).json({ error: error.details[0].message });
  next();
};
