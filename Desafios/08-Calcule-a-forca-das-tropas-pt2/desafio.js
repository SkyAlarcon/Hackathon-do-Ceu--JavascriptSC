const fs = require('fs')
const TROPAS = fs.readFileSync('./Arquivos/desafio07.txt', 'utf-8')

/*-------------------------------------------------------------------------------------------*/
//
// Desafio: Calcule a força de suas tropas.
//          O número deve conter duas casa decimais.
//
// A partir de agora a informação a seguir pode ser usada em qualquer outro desafio:
//
//      As forças das tropas dependem da quantidade relativa entre elas,
//      portanto algumas regras devem ser seguidas:
//          1. Se o número de Médicos (soldados e aprendizes) for menor que a metade do total das tropas
//              a força dos Médicos cai para 80% do total.
//          2. Se o número de Lanceiros (soldados e aprendizes) for maior que o de Defensores (soldados e aprendizes)
//              a força dos Lanceiros cai para 90% do total.
//          3. Se o número de Espadachins (soldadoes e aprendizes) for menor que o de Arqueiros (soldados e aprendizes)
//              a força dos Espadachins cai para 90% do total.
//
// Seu output deve ser uma impressão na tela com o seguinte formato:
//      Força das tropas: {numero}
//
//
/*-------------------------------------------------------------------------------------------*/

