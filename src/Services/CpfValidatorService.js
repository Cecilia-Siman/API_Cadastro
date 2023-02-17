class CpfValidatorService {
  validateCpf(cpf) {
    let cpfAsList = cpf.replaceAll(".", "").replaceAll("-", "");
    cpfAsList = cpfAsList.split("");
    if (cpfAsList.length != 11) {
      console.log("Wrong size!");
    }

    //Algorithm to find first digit
    let product;
    let index = 0;
    let firstDigit;
    for (let i = 10; i >= 2; i--) {
      product += i * Number(cpfAsList[index]);
      index++;
    }
    const remainder = product % 11;
    if (remainder < 2) {
      firstDigit = 0;
    } else {
      firstDigit = 11 - remainder;
    }

    //Algorithm to find second digit
    let product2;
    let index2 = 0;
    let secondDigit;
    for (let j = 11; j >= 2; j--) {
      product2 += j * Number(cpfAsList[index2]);
      index2++;
    }
    const remainder2 = product2 % 11;
    if (remainder2 < 2) {
      secondDigit = 0;
    } else {
      secondDigit = 11 - remainder2;
    }

    //Checking digits
    if (
      firstDigit != Number(cpfAsList[9]) ||
      secondDigit != Number(cpfAsList[10])
    ) {
      console.log("Cpf not valid");
    }
  }
}

export default new CpfValidatorService();
