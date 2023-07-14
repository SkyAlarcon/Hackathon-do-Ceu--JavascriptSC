const fs = require('fs')
const TROPAS = fs.readFileSync('./Arquivos/desafio05.txt', 'utf-8')

/*-------------------------------------------------------------------------------------------*/
//
// Desafio: Calcule a proporção de aprendizes por soldado de cada classe e do total de aprendizes por soldados.
//          O valor final deve ter precisão de três casas decimais.
//          O número 5 deve ser arredondado para baixo.
//
// A partir de agora a informação a seguir pode ser usada em qualquer outro desafio:
//
// Seu output deve ser uma impressão na tela com o seguinte formato para todas as classes:
//      m/M - {proporcao}
//      D/d - {proporcao}
//      A/a - {proporcao}
//      E/e - {proporcao}
//      L/l - {proporcao}
//      total/TOTAL - {proporcao}
//
/*-------------------------------------------------------------------------------------------*/


