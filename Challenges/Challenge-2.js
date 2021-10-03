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
  recipes: [1000.0],
  spending: [8015.1],
};
/* recipes.push(10)
recipes.push(5)
recipes.push(100)

spending.push(12)
spending.push(12)
spending.push(12) */
finaces.recipes.push(10);
finaces.recipes.push(5000.0);
finaces.recipes.push(100.8);
finaces.recipes.push(7944.45);
console.log(finaces.recipes);

let sum = (array) => {
  let total = 0;

  for (let value of array) {
    total += value;
  }

  return total;
};

let calc = () => {
  let positives = 0;
  let negatives = 0;
  for (let i in finaces) {
    if (i === "recipes") {
      for (let j in finaces[i]) {
        positives += finaces[i][j];
      }
      console.log(`Soma das receitas: R$${positives}`);
    }

    if (i === "spending") {
      for (let j in finaces[i]) {
        negatives += finaces[i][j];
      }
      console.log(`Soma das receitas: R$${negatives}`);
    }
  }

  let balenceFanal = positives - negatives;
  console.log(`Saldo restante da familia R$${balenceFanal}`);
};

calc();
