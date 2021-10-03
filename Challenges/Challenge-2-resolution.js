/* 

Esse desafio envolve a criação de dois arrays e um função que calculará o resultado desses valores, dizendo se é positivo ou negativo, e após isso, o valor do saldo.

Desafio:
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/

let finaces = {
  recipes: [1000.0, 500.88, 80.99, 600.51],
  spending: [90.0, 971.1, 911.84, 100.69, 520.11],
};

finaces.recipes.push(10);

let sum = (array) => {
  let total = 0;

  for (let value of array) {
    total += value;
  }

  return total;
};

let calcBalence = () => {
  const calculateRecipes = sum(finaces.recipes);
  const calculateSpanding = sum(finaces.spending);

  let balenceTotal = calculateRecipes - calculateSpanding;
  const itsOK = balenceTotal >= 0;
  let balanceText = "negativo";
  if (itsOK) {
    balanceText = "positivo";
  }

  console.log(`Saldo é ${balanceText}: R$${balenceTotal.toFixed(2)}`);
};

calcBalence();
