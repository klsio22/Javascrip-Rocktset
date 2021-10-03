let transformDegree = (degree) => {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExist = degree.toUpperCase().includes("F");

  //fluxo de erro
  if (!celsiusExists && !fahrenheitExist) {
    throw new Error("Grau não indetificado");
  }

  //fluxo idel , F -> C
  let updateDegree = Number(degree.toUpperCase().replace(/[^0-9]/g, ""));
  let fomula = (fahrenheit) => (((fahrenheit - 32) * 5) / 9).toFixed(3);
  let degreeSing = "C";

  //fluxo alternativo C - > F
  if (celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace(/[^0-9]/g, ""));
    fomula = (celsius) => (celsius * 1.8 + 32).toFixed(2);
    degreeSing = "F";
  }

  return fomula(updateDegree) + degreeSing;
};

try {
  console.log(transformDegree("10C"));
  console.log(transformDegree("50F"));
  console.log(transformDegree("dsadsdsdswwwww200Cdsadsadsa"));
  console.log(transformDegree("fgdfgf++--+.+/dsa(((**///dsdsdswwwww100Fdsadsadsa"));
  console.log(transformDegree("50Z"));
} catch (error) {
  return console.log(error.message);
}
