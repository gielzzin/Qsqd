const prompt = require('prompt-sync')(); 
const senhaCorreta = "2024";

let entrada; 
do {
  entrada = prompt("Digite a senha: ");

  if (entrada !== senhaCorreta) {
    console.log("Senha incorreta. Tente novamente.");
  } 
} while (entrada !== senhaCorreta);

console.log("Acesso permitido!");