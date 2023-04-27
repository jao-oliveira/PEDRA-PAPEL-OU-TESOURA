
var elementos = document.querySelectorAll('.player-options div > img'); // variavel que seleciona todas as fotos
var playerOpt = ""; // var que recebe a opçao do player 
var inimigoOpt = "";// var que recebe a opçao do player 



function validarvitoria(){

   let vencedor = document.querySelector('.resultado')

    //se for papel
     if(playerOpt == "papel"){

        if(inimigoOpt == "papel"){
          
            vencedor.innerHTML = "O jogo foi empatado";
        }else if(inimigoOpt == "tesoura"){
           
            vencedor.innerHTML = "O inimigo ganhou";
        }else if(inimigoOpt == "pedra"){
          
            vencedor.innerHTML = "O player ganhou";
        }
    }


    if(playerOpt == "pedra"){

        if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "O jogo foi empatado"
        }else if(inimigoOpt == "papel"){
            vencedor.innerHTML = "O inimigo ganhou";
        }else if(inimigoOpt == tesoura){
            vencedor.innerHTML = "O player ganhou";
        }

    }

    if(playerOpt == "tesoura"){

        if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "O jogo foi empatado"
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "O inimigo ganhou";
        }else if(inimigoOpt == "papel"){
            vencedor.innerHTML = "O player ganhou";
        }

    }

}



// Reseta a opacidade da opçao selecionada
function resetinimigo(){
    const enemyoptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < elementos.length; i++){
        enemyoptions[i].childNodes[0].style.opacity = 0.3;
    }
}

// IA que joga automaticamente contra o player
function inimigoJogar(){
    let rand = Math.floor(Math.random()*3); // gera um numero aleatorio de 0 a 2
    
    const enemyoptions = document.querySelectorAll('.enemy-options div');
    resetinimigo();
    for(i = 0; i  < enemyoptions.length; i++){
        if( i == rand){
            enemyoptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyoptions[i].childNodes[0].getAttribute('opt');
           
        }
    }
    validarvitoria();
}



function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');
       inimigoJogar();
      

    });
}

