const fs = require('fs')
const TROPAS = fs.readFileSync('./Arquivos/desafio04.txt', 'utf-8')

/*-------------------------------------------------------------------------------------------*/
//
// Desafio: Conte quantos aprendizes as tropas tem a mais ou a menos que soldados.
//
// A partir de agora a informação a seguir pode ser usada em qualquer outro desafio:
//
// Cada classe agora tem aprendizes.
// O aprendiz de cada classe é representado pela respectiva letra minúscula de sua classe.
// Por exemplo: Um aprendiz de Médico será representado por um 'm' em suas tropas.
//
// Seu output deve ser uma impressão na tela com o seguinte formato:
//      m tem {numero} a mais
//      e tem {numero} a menos
//      l tem {numero} a mais
//      a tem {numero} a menos
//      d tem {numero} a mais
//
// Se houver o mesmo número, imprima:
//      m tem 0 a mais
// Com o respectivo caracter correspondente
//
/*-------------------------------------------------------------------------------------------*/

