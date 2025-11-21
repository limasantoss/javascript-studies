function alerta() {
  //Criei um função alerta para eu encapsular o bloco de codigo 
  // a funçao alerta foi criada
  var pote = "bombom";
  // criei uma variavel pote e essa variavel esta recebendo o tipo de dado string com o valor Bombom
  alert(pote);
  //Criei o pop Up alert para ele pode mostrar na tela o valor da variavel pote
}
alerta();// chamei a função alerte para o bloco de codigo executar a ação que eu desejo que é chamar um popUp alert na tela 
/*No javascript temos 3 palavras-chaves para declaração
var
let
const

*/
function segundoBloco() {
  //Criei uma função segundobloco para eu encapsular o bloco de codigo 
  // a ffunção segundoBloco foi criada

  //Declaração de variaveis
  //var a,b,c;
  var a, b, c;
  // primerio creie variavel a , b e c e por enquantos estão sem valor definidos
  a = 2;
  //na segunda linha atribui valor para variavel a o valor foi um tipo de dado number com o valor 2 
  b = 3;
  // na terceira linha atribui valor para variavel B e o valor foi um tipo de dado number com valor 3 
  c = a + b;
  // na terceira linha ja na variavel c estou atribuido o o resultado da operação de soma entre a + b ,o resultado vai ser armazenado na variavel C
  document.getElementById("texto").innerHTML =
  //nessa etapa estou criando um Dom e utilizando o metodo de captura o ID da tag  
  //ja com o Id capturado eu agora vou utilizar uma propriedade do DOM para inserir um texto na tag onde o ID esta capturado 
    " valor de a + b é igual a" + "  " + c;
    //o valor que eu vou colocar é essas caracteres e vou fazer a concatenação de mais o valor da soma que esta armazenada na variavel C
}
segundoBloco();// aqui chamo a funcão para ela ser executada e mostar que o vaalor de a + b é igual a 5 que é o valor que foi processado e esta armazenado na variavel C 

function terceiroBloco() {
  //aqui inicie uma funcção terceiroBloco onde para encapsular o bloco de codigo
  var a, b, c;
  //aqui iniei com variaveis a , b e c variaveis que estão sem valor defenidido por momento 
  a = 10;
  //aqui criei estou atribuido a variavel o valor 10  um tipo de dado number
  b = 30;
  // aqui estou atribuido a variavel b o valor 30 um tipo de dado number
  c = a + b;
  //aqui estou atribuido a variavel c o restulddado da soma de a + b e estou armazendo o resultado nela 
  document.getElementById("paragrafo").innerHTML =
  // aqui estou utilizando o dom e seu metodo para procurar um ID que esse id é o paragrafo que esta na tag do html
  //com o id ja capturado adiciono uma propriedade para pode adicionar algo na tag onde o id esta sendo capturado
  
    " valor de a + b é igual a" + "  " + c;
    //e mostro na tela os caracteres e o resultado que esta armazenado na variavel C
}
terceiroBloco(); // aqui chamo a fanção para executar e mostrar os caracteres e o resultado de da variavel C
function nome() {
  //aquii crio uma função nome e encapsulo o bloco de codigo 
  let nome, sobrenome;
  // aqui crio duas variaveis nome e sobrenome , ambas com o valor undefined por enqunto
  nome = "Igor Lima dos ";
  //aqui atribuo o valor para a variavel tipo dado caracter com  o valor 'igor lima 
  sobrenome = "Santos";
  // aqui atribuo o valor a variavel um tipo de dado caracter ou string  com o valor 'santos'
  document.getElementById("NomeEsobrenome").innerHTML = nome + " " + sobrenome;
  //aqui crio um DOM e utilizo o metodo para capturar o ID nomeEsobrenome 
  // ja com o Id capturado aagora vou utilizar uma propriedade para poder colocar conteudo dentro da Tag 
  // o conteudo sera o valor que esta na variavel nome concatenando com o valor da variavel sobrenome 
}
nome();// aqui chamo a funcção nome para poder mostrar o valor que eu quero na tela 
//atribuição dos valores
//var a = 2 ;
//var b = 3 ;
// nao vai entender vai dar NAN c = a + b; pq na hora da aula var a = 2 e var b = 3 estava comentados e ele nao iria achar o valor das variaveis
/*a = 2;
 b = 3;
 c = a + b;

 var a = 5 ;
alert(a);*/

//Declaração de variaveis
/*var dataNascimento, sobrenome, nomeCompleto , soma;

//atribuição de valores;
nome = "Igor lima";
sobrenome = "Santos";
idade = 30;

nomeCompleto = nome + " " + sobrenome;

soma = idade + 10;
pessoa = nome  +" "+ soma;

document.getElementById("texto").innerHTML = pessoa;*/

/*var pessoa = "Igor "
var pessoa = "Joao"

alert(pessoa)*/

/*let  x = 10 ; // aqui é 10
{
   let  x = 2; // aqui é 2   so vai funcionar dentro desse escopo !!! 


}
//aqui também vai ser 10
document.getElementById("texto").innerHTML = x*/
