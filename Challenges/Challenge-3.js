/* 

Desafio:
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/

let convertTemperature = (degree) => {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExist = degree.toUpperCase().includes("F");

  if (celsiusExists) {
    let celsius = parseFloat(degree) * 1.8 + 32;

    return console.log(`${celsius.toFixed(2)} fahrenheit `);
  }

  if (fahrenheitExist) {
    let fahrenheit = (parseFloat(degree) - 32) / 1.8;
    return console.log(`${fahrenheit.toFixed(2)} celsius`);
  }

  return console.log("Entrada inválida");
};

convertTemperature("50F");
