function calDolar(){
    let dolar = document.querySelector('#dolar_input').value;
    let num = document.querySelector("#peso2").value;
    let resultado = num / dolar;
    resultado = resultado.toFixed(2);
    let mensaje = `tienes un saldo de $${resultado} dolares en pesos`;
    alert(mensaje);
    return mensaje;
}
function calEuro(){
    let euro = document.querySelector("#euro_input").value;
    let num = document.querySelector("#peso1").value;
    let resultado = num / euro;
    resultado = resultado.toFixed(2);
    let mensaje = `tienes un saldo de $${resultado} euros en pesos`;
    alert(mensaje);
    return mensaje;
}
