const fs = require('fs')
const TROPAS = fs.readFileSync('./Arquivos/desafio03.txt', 'utf-8')

/*-------------------------------------------------------------------------------------------*/
//
// Desafio: Separe cada função de suas tropas
//
// A partir de agora a informação a seguir pode ser usada em qualquer outro desafio:
//
// Cada classe tem uma função específica:
//      Suporte: Médicos e Defensores
//      Combate a curta distancia: Espadachins e Lanceiros
//      Combate a longa distancia: Arqueiros
//
// Seu output deve ser uma impressão na tela com o seguinte formato:
//  Suporte: {numero}
//  Curta: {numero}
//  Longa: {numero}
//
/*-------------------------------------------------------------------------------------------*/
