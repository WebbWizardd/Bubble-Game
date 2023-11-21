let timer = 60;
var score = 0;
var hitno = 0;
function totalscore(){
    score += 10;
    document.getElementById('score').innerHTML = score;
}

function makebubbles(){
    var bubbles = "";
for(var i=0; i<=146; i++){
    num = parseInt(Math.random()*10);
    bubbles += `<div class='bubble'>${num}</div>`;
}

document.getElementById('game_section').innerHTML = bubbles;
}

function runtimer(){
    var timeinter = setInterval(function(){
        if(timer > 0){
            timer--;
            document.getElementById('timer').innerHTML = timer;
        }
        else{
            clearInterval(timeinter);
            document.getElementById("game_section").innerHTML = `<div class='gameover_div'><h1 class='game_over'>Game Over</h1><h2 class="dis_score">Your Score is :${score}</h2></div>`;
        }
    },1000);
}

function hitNumber(){
    hitno = parseInt(Math.random()*10);
    document.getElementById('hit').innerHTML = hitno;
}

document.getElementById('game_section').addEventListener("click",function(details){
    var clickwala = parseInt(details.target.innerHTML);
    if(clickwala === hitno){
        totalscore();
        makebubbles();
        hitNumber();
    }
    else{
        makebubbles();
        hitNumber();
    }
})

makebubbles();
runtimer();
hitNumber();