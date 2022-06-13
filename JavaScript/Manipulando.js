//var y = 0; (comentario de linha)

/*
comentario em bloco
comentario em bloco
*/

//!MANIPULANDO UM ARQUIVO
//VARIAVEIS
//var preco = 2;
/*
var desconto = 0.2;
const PRECO = 2;
var total  = PRECO - desconto;
*/

//! FUNÇÕES
/*
function soma(a, b) { // essa func vai retornar o valor de a + b
  return a + b;
  console.log(a + b);// para ter certeza que o codigo esta funcionando 
  }

soma( 3 + 5);  // declarando valor para a + b e CHAMANDO A FUNÇÃO
 
*/

function returnEvenValues(array) { //returnEvenValue é um comando que retorna num. pares
  let envenNums = [];
  for (let i = 0; i < array.lenght; i++){    //declaranção a função
    if( array[i] % 2 === 0) {
      envenNums.push(array[i]);
    }

  }
  console.log('os numeros pares sao: ' + envenNums);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8]; // dandos dados para a função

returnEvenValues(array);  // chamando a função com os numero pares