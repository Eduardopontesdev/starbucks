let imagemCopo = document.querySelector(".imagem-copo");

let circulo = document.querySelector(".circulo");

console.log(circulo);

function mudaImagem(caminho) {
  imagemCopo.src = caminho;
}

function mudaCor(cor) {
  circulo.style.background = cor;
}
