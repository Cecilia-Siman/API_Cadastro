import Joi from "joi";

const cpfPattern = "/^[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}$/";

const userSchema = Joi.object({
  name: Joi.string().required(),
  cpf: Joi.string().pattern(cpfPattern).required(),
  birthday: Joi.string().required(),
});

export default userSchema;
