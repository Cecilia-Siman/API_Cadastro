import Joi from "joi";

const cpfSchema = Joi.object({
  cpf: Joi.string()
    .pattern(/^[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}$/)
    .required(),
});

export default cpfSchema;
