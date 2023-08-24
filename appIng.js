function calDolar(){
    let dolar = document.getElementById("dolar");
    let num = document.getElementById("peso2");
    let resultado = num / dolar;
    resultado = resultado.toFixed(2);
    let mensaje = `tienes un saldo de $${resultado} dolares en pesos`;
    alert(mensaje);
    return mensaje;
}
function calEuro(){
    let euro = document.getElementById("euro");
    let num = document.getElementById("peso1");
    let resultado = num / euro;
    resultado = resultado.toFixed(2);
    let mensaje = `tienes un saldo de $${resultado} euros en pesos`;
    alert(mensaje);
    return mensaje;
}