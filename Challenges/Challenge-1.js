const getScore = (scoreFinal) => {
  let scoreA = scoreFinal >= 90 && scoreFinal <= 100;
  let scoreB = scoreFinal >= 80 && scoreFinal <= 89;
  let scoreC = scoreFinal >= 70 && scoreFinal <= 79;
  let scoreD = scoreFinal >= 60 && scoreFinal <= 69;
  let scoreF = scoreFinal >= 0 && scoreFinal < 60;

  if (scoreA) {
    scoreFinal = "A";
  } else if (scoreB) {
    scoreFinal = "B";
  } else if (scoreC) {
    scoreFinal = "C";
  } else if (scoreD) {
    scoreFinal = "D";
  } else if (scoreF) {
    scoreFinal = "F";
  } else {
    scoreFinal = "Nota Invalida";
  }

  return scoreFinal;
};

let score = 41;
console.log("Nota Final:", getScore(score));
console.log("Nota Final:", getScore(101));
console.log("Nota Final:", getScore(-8));
console.log("Nota Final:", getScore(0));
console.log("Nota Final:", getScore(45));
console.log("Nota Final:", getScore(60));
console.log("Nota Final:", getScore(75));
console.log("Nota Final:", getScore(84));
console.log("Nota Final:", getScore(90));
