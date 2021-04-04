var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))

var operacao = prompt(" Digite 1 para fazer a uma divisão, 2 para multiplicação, 3 para soma e 4 para subração:")

var ok = true
if (operacao == 1){
  var resultado = primeiroValor / segundoValor
  var op = " / "  
}else if (operacao == 2){
  var resultado = primeiroValor * segundoValor
  var op = " * "  
}else if (operacao == 3){
  var resultado = primeiroValor + segundoValor
  var op = " + "  
}else if (operacao == 4){
  var resultado = primeiroValor - segundoValor
  var op = " - "  
}else{
  ok = false
  document.write("<h2>Opções inválida</h2>")
}

if (ok){
  document.write("<h2>" + primeiroValor + op + segundoValor + " = "+ resultado + "</h2>")
}