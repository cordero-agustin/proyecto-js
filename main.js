//Divisas a convertir y sus valores
const divisas = [
    dolar=1155,
    pesos = prompt('Cantidad de pesos a convertir'),
    euro=1317]
//Confirmación del monto
confirm('Desea convertir '+ pesos +'ARS a dolares?')
//Resultado de la conversión
let resultado = (pesos/dolar).toFixed(2);
//Alert por si se ingresa un valor no numérico
if (isNaN(pesos)) {
    alert("Error: Debes ingresar un número válido.");
}
//Alert que indica el total de la conversión
else (alert(pesos+ 'ARS equivale a '+resultado+ 'USD'))


