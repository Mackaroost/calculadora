let primerTermino = "";
let segundoTermino = "";
let operacion = "";

function iniciarApp() {
  let valorAnterior = document.getElementById("valor-anterior");
  let valorActual = document.getElementById("valor-actual");
  let number = document.querySelectorAll(".number");
  let operator = document.querySelectorAll(".operator");
  let clear = document.querySelector(".clear");
  let igual = document.querySelector(".equal");
  let decimal = document.querySelector(".decimal");

  number.forEach((item) => {
    item.addEventListener("click", (e) => {
      handleClick(e.target.textContent);
      valorActual.textContent = segundoTermino;
      //console.log(valorActual)
    });
  });

  operator.forEach((el) => {
    el.addEventListener("click", (e) => {
      handleOperator(e.target.textContent);
      valorAnterior.textContent = primerTermino + " " + operacion;
      valorActual.textContent = segundoTermino;
    });
  });

  igual.addEventListener("click", () => {
    calculate();
    valorAnterior.textContent = "";
    valorActual.textContent = primerTermino;
  });

  clear.addEventListener("click", () => {
    primerTermino = "";
    segundoTermino = "";
    operacion = "";
    valorAnterior.textContent = segundoTermino;
    valorActual.textContent = segundoTermino;
  });

  decimal.addEventListener("click", addDecimal);
}

function handleClick(evento) {
  let num = evento;
  if (segundoTermino.length <= 5) {
    segundoTermino += num;
  }
}

function handleOperator(op) {
  operacion = op;
  primerTermino = segundoTermino;
  segundoTermino = "";
}

function calculate() {
  console.log(["calculando"]);
  primerTermino = Number(primerTermino);
  segundoTermino = Number(segundoTermino);

  console.log(primerTermino + "soy" + segundoTermino);

  const operaciones = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
  };

  let operacionSelect = operaciones[operacion];
  console.log(operacionSelect);

  const res = operacionSelect(primerTermino, segundoTermino);
  console.log(res);

  primerTermino = res;
  primerTermino = roundNumber(primerTermino);
  primerTermino = primerTermino.toString();
  segundoTermino = primerTermino.toString();
}

function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}

function addDecimal() {
  if (!segundoTermino.includes(".")) {
    segundoTermino += ".";
  }
}
document.addEventListener("DOMContentLoaded", iniciarApp);
