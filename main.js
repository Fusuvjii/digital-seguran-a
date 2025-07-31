const numeroSenha = document.querySelector('.parâmetro-senha__texto');
Let tamanhoSenha = 12;
numeroSenha.textContent = TamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
cons letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll(parametro-senha__botao');
const Camposenha = document.querySelector(#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelectorAll('.forca');


 botoes [0].onclick =diminuiTamanho;
 botoes [1].onclick= aumentaTamanho;

 function diminuiTamanho () {
    if (tamanhoSenha > 1){
    //tamanho-Senha = tamanho-1;
    tamanhoSenha--;
     }
     numeroSenha.textContent = tamanhoSenha;
      geraSenha();
      }
      function aumentaTamanho() {
        if (tamanhoSenha < 20) {
    

