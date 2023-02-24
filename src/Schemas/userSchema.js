import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().required(),
  cpf: Joi.string()
    .pattern(/^[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}$/)
    .required(),
  birthday: Joi.string()
    .pattern(/^[0-9]{2}[/]?[-]?[0-9]{2}[/]?[-]?[0-9]{4}$/)
    .required(),
});

export default userSchema;
