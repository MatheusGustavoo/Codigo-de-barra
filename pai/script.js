function verificar() {
  let codigo = document.querySelector("#certo-texto").value;
  let copiado = document.querySelector(".copiado");
  let teste = codigo.match(/(\d{11}[-]\d)/g);
  console.log(teste);
  copiado.innerText = teste.join(" ");
}
let botao = document.querySelector("#copiado");
botao.addEventListener("click", () => {
  botao.select();
  document.execCommand("copy");
});
