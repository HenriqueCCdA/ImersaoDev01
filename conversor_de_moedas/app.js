var valorEmDolarTexto = prompt("Qual o valo em dolar que você quer converter ?")

valorEmDolarNumerico = parseFloat(valorEmDolarTexto)


var cotacaoDolar = 5.50

var valorEmReal = valorEmDolarNumerico * cotacaoDolar

// o numero sera arredondado para duas casas decimais
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)

