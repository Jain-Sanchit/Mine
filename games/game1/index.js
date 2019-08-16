

play=function(){var composers =["hydrogen","helium","lithium","beryllium","boron","carbon"];
var randomComposer = composers[Math.floor(Math.random() * composers.length)];
var guessComposer = [];

    for (var i=0; i<randomComposer.length; i++){
    guessComposer[i] = "_";
    }
    var el = document.getElementById('guessword');
        el.innerHTML=guessComposer.join(" ");


var wrongGuesses = [];


var guessesLeft = 5;
var ele = document.getElementById('remaining');
        ele.innerHTML=guessesLeft;

var wins = 0;
var ele1 = document.getElementById('nwins');
        ele1.innerHTML=wins;

var guessedElements=[];
document.onkeyup = function(event) {

    
    var userGuess = event.key;

    let x=0;
    for(var j=0; j<randomComposer.length; j++){

    if(randomComposer[j]===userGuess){
            guessComposer[j]=userGuess;
            x=1;
            }
    }

    if (x==0){
            wrongGuesses.push(userGuess);
            guessesLeft --;
            var wg = document.getElementById('wrong');
            wg.innerHTML=wrongGuesses;
        }
    
    let y=1;

    for (var i=0; i<randomComposer.length; i++){
        if(guessComposer[i] != randomComposer[i]){
            y=0;
        }
    }
    if(y==1){
       // alert("Congratulations, You Won!");
       guessedElements.push(randomComposer);
       wins++ ;
       var ge = document.getElementById('guessed');
       ge.innerHTML=guessedElements;
       
    }

        if(guessesLeft===0){
            //alert("You lost, study more music...");
            
        }

        var el = document.getElementById('guessword');
        el.innerHTML=guessComposer.join(" ");

        var ele = document.getElementById('remaining');
        ele.innerHTML=guessesLeft;
       
        var ele1 = document.getElementById('nwins');
       ele1.innerHTML=wins;
        console.log(randomComposer.length);
}
}

play();

document.getElementById('reset').onclick=function(){
   
};