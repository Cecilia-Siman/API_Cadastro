import Joi from "joi";

const cpfPattern = "/^[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}$/";

const cpfSchema = Joi.object({
  cpf: Joi.string().pattern(cpfPattern).required(),
});

export default cpfSchema;
