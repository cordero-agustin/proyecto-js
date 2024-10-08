
const divisas = [
    dolar=1155,
    pesos = prompt('Cantidad de pesos a convertir'),
    euro=1317]
// const cantidad = prompt('Cantidad de pesos');
let resultado = (pesos/dolar).toFixed(2);
if (isNaN(pesos)) {
    alert("Error: Debes ingresar un número válido.");
}
else (alert(pesos+ 'ARS equivale a '+resultado+ 'USD'))
// const de = 'ARS'; 
// const hacia = 'EUR';   

// const resultado = convertirDivisa(cantidad, de, hacia);
// if (isNaN(cantidad)) {
//     console.log("Error: Debes ingresar un número válido.");
// }
// console.log(`${cantidad} ${de} son aproximadamente ${resultado.toFixed(2)} ${hacia}`);

// if (isNaN(cantidad)) {
//     alert("Error: Debes ingresar un número válido.");
//     console.log("Error: Debes ingresar un número válido.");
// }
// else(alert(`${cantidad} ${de} son aproximadamente ${resultado.toFixed(2)} ${hacia}`));{
//     console.log(`${cantidad} ${de} son aproximadamente ${resultado.toFixed(2)} ${hacia}`);
// }


