document.querySelector("#displey").innerText= "0"; 
let valor1=0;
let valor2=0;
let operacion="";

 const btnNum1 = document.querySelector("#btnNum1");
 const btnSumar= document.querySelector("#btnSumar");
const btnIgual= document.querySelector("#btnIgual");
const btnNum2= document.querySelector("#btnNum2");

 function calcular (num1, num2, operacion) {
    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2; 
        case "/":
            return num1 / num2; 
        default:
            return "Operacion no valida";
    }
}

function asignarValor(valor) {
    if( !operacion || !valor) {
        valor1=valor;
    } else {
        valor2=valor;
    }
}


 btnNum1.addEventListener("click", (e) => {
    document.querySelector("#displey").innerText = e.target.innerText;
    asignarValor( Number(e.target.innerText));
 });

 btnNum2.addEventListener("click", (e) => {  
    document.querySelector("#displey").innerText = e.target.innerText;
    asignarValor( Number(e.target.innerText));
    });

 btnSumar.addEventListener("click", () => {  
    operacion = "+";
    }); 



    btnIgual.addEventListener("click", () => {  

        const resultado = calcular(valor1,valor2, operacion);
        document.querySelector("#displey").innerText = resultado;
        num1=resultado;
        operacion="";

        });








