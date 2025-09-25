document.querySelector("#display").innerText= "0"; 
let valor1 = 0;
let valor2 = 0;
let operacion = "";

const btnNum1 = document.querySelector("#btnNum1");
const btnNum2 = document.querySelector("#btnNum2");
const btnSumar = document.querySelector("#btnSumar");
const btnIgual = document.querySelector("#btnIgual");
const btnNum3= document.querySelector("#btnNum3");
const btnNum4= document.querySelector("#btnNum4");
const btnClear= document.querySelector("#btnClear");


function calcular(num1, num2, operacion) {
    switch (operacion) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2; 
        case "/": return num1 / num2; 
        case "clear": return 0;
        default:  return "Operacion no valida";
    }
}

function asignarValor(valor) {
    if (!operacion) {
        valor1 = valor;
    } else {
        valor2 = valor;
    }
}

btnNum1.addEventListener("click", (e) => {
    document.querySelector("#display").innerText = e.target.innerText;
    asignarValor(Number(e.target.innerText));
});

btnNum2.addEventListener("click", (e) => {  
    document.querySelector("#display").innerText = e.target.innerText;
    asignarValor(Number(e.target.innerText));
});

btnNum3.addEventListener("click", (e) => {  
    document.querySelector("#display").innerText = e.target.innerText;
    asignarValor(Number(e.target.innerText));
});

btnNum4.addEventListener("click", (e) => {  
    document.querySelector("#display").innerText = e.target.innerText;
    asignarValor(Number(e.target.innerText));
});

btnSumar.addEventListener("click", () => {  
    operacion = "+";
}); 

btnClear.addEventListener("click", () => {  
    const resultado = calcular(valor1, valor2, "clear");
    document.querySelector("#display").innerText = resultado;
    valor1 = resultado; 
    operacion = "";
});


btnIgual.addEventListener("click", () => {  
    const resultado = calcular(valor1, valor2, operacion);
    document.querySelector("#display").innerText = resultado;
    valor1 = resultado; 
    operacion = "";
});
