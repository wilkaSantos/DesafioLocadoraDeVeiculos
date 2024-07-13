
const calculateValue = async (qtd, period, pricing) => {
  let calculation;
  
  switch (period) {
    case 0:
      calculation = qtd * pricing;
      break;

    case 1:
      calculation = qtd * pricing;
      break;
    
    case 2:
      calculation = qtd * pricing;
      break;
  }

  return calculation;

}

module.exports = calculateValue;