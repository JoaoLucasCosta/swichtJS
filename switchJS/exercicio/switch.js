var prompt = require ("prompt-sync")()
//EXERCÍCIO 1 Utilizando *switch…case* , crie um programa que pergunte qual bebida o usuário deseja dentre as opções listadas (água/suco/refrigerante/café),
//e então leia o numero digitado e exiba a mensagem correspondente:

let pedido = parseInt (prompt ("Qual bebida o senhor(a) deseja? Água(1) /suco(2) /refrigerante (3)/café (4)?"))

switch (pedido) {
    case 1:
        console.log("Aqui está sua Água. Se hidrate para evita pedra no rim.")
        break
    case 2:
        console.log("Aqui está seu Suco. Natural, aquele tang ainda vai te dar problema vai veno.")
        break
    case 3:
        console.log("Aqui está seu Refrigerente. E o projetinho academia? nunka?")
        break
    case 4:
        console.log("Aqui está seu Café. Aproveite! Café sempre é uma boa.")
        break
    default :
        console.log("OPÇÃO INVÁLIDA.")
    }

//EXERCÍCIO 2:Menu de Operações Matemáticas
//Crie um programa que exiba um menu de opções para o usuário escolher uma operação matemática:

let operacao = parseInt (prompt ("Qual a operação que você deseja realizar? (1- soma; 2- subtração; 3- multiplicação; 4- divisão.)")) ;
let numero1 = parseFloat (prompt ("Escreva o primeiro numero da operação:"));
let numero2 = parseFloat (prompt ("Escreva o segundo numero da operação:"));

switch (operacao) {
    case 1:
        console.log ("O resultado da soma de:" + numero1 + " e " + numero2 + ", é:" +(numero1 + numero2) + ".")
        break
    case 2:
        console.log ("O resultado da subtração de:" + numero1 + " e " + numero2 + ", é: " +(numero1 - numero2) + ".")
        break
    case 3:
        console.log ("O resultado da multiplicação de:" + numero1 + " e " + numero2 + ", é: " +(numero1 * numero2) + ".")
        break 
    case 4:
        console.log ("O resultado da divisão de:" + numero1 + " e " + numero2 + ", é: " +(numero1 / numero2) + ".")
        break
    default :
        console.log ("OPÇÃO INVÁLIDA!!!")
    }
    
//EXERCÍCIO 3: Dicionário de cores
//Crie um programa que leia o nome de uma cor em inglês e exiba sua tradução em português. Considere as seguintes cores:

let colorTranslator = prompt ("Tradutor de cores! Qual o nome da cor em inglês você quer traduzir?")

switch (colorTranslator) {
    case "red":
        console.log ("Red, significa vermelho.")
        break
    case "blue":
        console.log ("Red, significa azul.")
        break
    case "green":
        console.log ("Red, significa verde.")
        break   
    default :
        console.log ("COR DESCONHECIDA!!!") 
}

// DESAFIO - Sistema de Cadastro de Eventos
//Crie um programa que ajude no gerenciamento de inscrições para eventos. 
//O programa deve permitir que o usuário escolha o tipo de evento, forneça algumas informações e mostre um resumo ao final.


// Menu de opções
console.log("Escolha o tipo de evento:");
console.log("1. Workshop");
console.log("2. Palestra");
console.log("3. Hackathon");

const opcao = 1; // Altere para testar (exemplo: escolha 1 para Workshop)

// Variáveis para armazenar os dados
let tipoEvento = "";
let custoTotal = 0;

switch (opcao) {
  case 1: // Workshop
    tipoEvento = "Workshop";
    const participantes = 20; // Altere para testar (exemplo: 20 participantes)
    custoTotal = participantes * 50;
    console.log(`Tipo de evento: ${tipoEvento}`);
    console.log(`Número de participantes: ${participantes}`);
    break;

  case 2: // Palestra
    tipoEvento = "Palestra";
    const duracao = 3; // Altere para testar (exemplo: 3 horas)
    custoTotal = duracao * 100;
    console.log(`Tipo de evento: ${tipoEvento}`);
    console.log(`Duração: ${duracao} horas`);
    break;

  case 3: // Hackathon
    tipoEvento = "Hackathon";
    const dias = 2; // Altere para testar (exemplo: 2 dias)
    const equipes = 5; // Altere para testar (exemplo: 5 equipes)
    custoTotal = dias * equipes * 500;
    console.log(`Tipo de evento: ${tipoEvento}`);
    console.log(`Número de dias: ${dias}`);
    console.log(`Número de equipes: ${equipes}`);
    break;

  default: // Opção inválida
    console.log("Opção inválida");
    break;
}

// Exibir o custo total, caso seja válido
if (custoTotal > 0) {
  console.log(`Custo total: R$ ${custoTotal}`);
}

