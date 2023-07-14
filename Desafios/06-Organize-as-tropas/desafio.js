const fs = require('fs')
const TROPAS = fs.readFileSync('./Arquivos/desafio06.txt', 'utf-8')

/*-------------------------------------------------------------------------------------------*/
//
// Desafio: Organize as tropas na seguinte ordem:
//          Médicos, Espadachins, Lanceiros, Arqueiros, Defensores
//          Lembre que soldados vem ANTES de aprendizes de cada classe
//
// Seu output deve ser uma impressão na tela com o seguinte formato:
//      {numero} - MMMMMMMMM...
//      {numero} - mmmmmmmmm...
//      {numero} - EEEEEEEEE...
//      {numero} - eeeeeeeee...
//      {numero} - LLLLLLLLL...
//      .
//      .
//      .
//
/*-------------------------------------------------------------------------------------------*/

