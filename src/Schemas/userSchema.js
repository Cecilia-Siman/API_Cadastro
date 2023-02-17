import Joi from "joi";

const cpfPattern = "/^[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}$/";
const datePattern = "/^[0-9]{2}[/]?[-]?[0-9]{2}[/]?[-]?[0-9]{4}$/";

const userSchema = Joi.object({
  name: Joi.string().required(),
  cpf: Joi.string().pattern(cpfPattern).required(),
  birthday: Joi.string().pattern(datePattern).required(),
});

export default userSchema;
