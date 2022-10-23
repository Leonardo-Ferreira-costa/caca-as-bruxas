const pokemonDiv = document.querySelector('.flip-card');

document.querySelector(".btn-primary").addEventListener('click', () => {
  
  //############## NÃO MEXER NESTA CHAMADA DE FUNÇÃO ############//
    /*####################*/    score(1);  /*#######################*/ 
    //############## NÃO MEXER NESTA CHAMADA DE FUNÇÃO ############//
  
  let requisicao = new XMLHttpRequest();
  let pokemon = Math.floor(Math.random() * 905);
  
  requisicao.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  requisicao.send();

  requisicao.onload = function ()  {
    
    if (requisicao.status == 200) {
      //############## NÃO MEXER NESTA CHAMADA DE FUNÇÃO ############//
    /*####################*/    score(2);  /*#######################*/ 
    //############## NÃO MEXER NESTA CHAMADA DE FUNÇÃO ############//
      resposta = requisicao.response;
      responseObj = JSON.parse(resposta);

      insertInfo();
      
  
    }
  };  
});


function insertInfo(){

    pokemonDiv.querySelector("namePokemon").innerHTML = responseObj.name;
      
    pokemonDiv.queryselector("Avatar").src = responseObj.sprites.other.dream_world.front_default;
      
    pokemonDiv.querySelector("movesPokemon").innerHTML == responseObj.moves[0].move.name;

    //############## NÃO MEXER NESTA CHAMADA DE FUNÇÃO ############//
    /*####################*/    score(3);  /*#######################*/ 
    //############## NÃO MEXER NESTA CHAMADA DE FUNÇÃO ############//

}





















































//#### Não mexer nesta função, ela está marcando os seus pontos ####//
function score(pontos){
    localStorage.setItem("Pontos", pontos );
    document.querySelector(".score").innerHTML = localStorage.getItem("Pontos");
    
}
//#### Não mexer nesta função, ela está marcando os seus pontos ####//