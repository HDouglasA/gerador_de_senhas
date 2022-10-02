const obterLetraMinuscula = () => {
  return String.fromCharCode(Math.floor(Math.random()*26) +97)
}

const obterLetraMaiuscula = () => {
  return String.fromCharCode(Math.floor(Math.random()*26) +65)
}

const obterNumero = () => {
  return Math.floor(Math.random()*10).toString()
}

const obtersimbolo = () => {
  let simbolos = "[]{}()!@#$%&*/?|+,.<>="
  return simbolos[Math.floor(Math.random()*simbolos.length)] 
}

const gerarSenha = (funcao01, funcao02, funcao03, funcao04) => {

  let senha = ""
  const tamanhoSenha = 12

  const funcoes = [funcao01, funcao02, funcao03, funcao04]

  for (let i= 0; i < tamanhoSenha; i += gerarSenha.length ) {
    funcoes.forEach(()=> {
      const valorSenha =funcoes[Math.floor(Math.random() *funcoes.length)]()
      senha += valorSenha
    });
  }
  let ElementoSenhaGerada= document.getElementById("senha-gerada")
  ElementoSenhaGerada.style.display = "block"
  ElementoSenhaGerada.querySelector("h4").innerText = senha
}

const obterSenha = () => {
  gerarSenha(obterLetraMinuscula, obterLetraMaiuscula, obterNumero, obtersimbolo)
}
