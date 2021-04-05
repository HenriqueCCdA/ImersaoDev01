function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  validaFilme(filmeFavorito)
  campoFilmeFavorito.value = ""
}

function validaFilme(filme){
   if (filme.endsWith('.jpg')){
    listarFilmesNaTela(filme)  
  }
  else{
    alert("Não é uma imagem!!")
  } 
}

function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML += elementoFilme
}