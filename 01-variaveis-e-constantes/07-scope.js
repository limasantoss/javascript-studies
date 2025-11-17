

console.log(user); // Igor Li
var user = "Igor Lima";

//Hoisting: eleva a declaração da variável para o topo do escopo
var user 
console.log(user)

//Escopo Global

var email = "igorlima@gmail.com";
{
    //Escopo de bloco
    console.log(email); //
}

{
    var age = 18
}
console.log(age); // Erro: age is not defined


{   
   // console.log(address); // Erro: vai dar erro 
    let address = "Rua x"
    console.log(address); // funciona normalmente    

}

let nome = "Igor"
{
    console.log(nome)

}