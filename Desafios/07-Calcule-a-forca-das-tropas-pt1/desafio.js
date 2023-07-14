const fs = require('fs')
const TROPAS = fs.readFileSync('./Arquivos/desafio07.txt', 'utf-8')

/*-------------------------------------------------------------------------------------------*/
//
// Desafio: Calcule a força de suas tropas.
//          O número deve conter duas casa decimais.
//
// A partir de agora a informação a seguir pode ser usada em qualquer outro desafio:
//
//      Cada tropa tem pontos de força pré-determinados:
//          Medico - 1
//          Espadachim - 1.2
//          Lanceiros - 1.8
//          Arqueiro - 1.6
//          Defensores - 1.5   
//      Aprendizes de cada classe equivalem a metade dos pontos de força pré-mencionados
//
// Seu output deve ser uma impressão na tela com o seguinte formato:
//      Força das tropas: {numero}
//
//
/*-------------------------------------------------------------------------------------------*/

