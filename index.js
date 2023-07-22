var buttonColor = ["red" , "green" , "yellow" , "blue"];
var gamePattern = [];
var userClickedPattern = [];
function nextSequence(){
    var randonNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColor[randonNumber];
     var button = document.querySelector('#'+ randomChosenColor);
     button.fadeIn(200).fadeOut();
    
    gamePattern.push(randomChosenColor);
    
}
var numberOfButton = document.querySelectorAll(".btn").length;
for(var i =0 ; i<numberOfButton ; i++ ){
   document.querySelectorAll(".btn")[i].addEventListener("click",handler);
}

function handler(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
}


function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
    document.querySelectorAll(".btn").addEventListener("click",function(){
        var buttonClicked = this.id;
        var audio = new Audio("sounds/"+buttonClicked+".mp3");
        audio.play();
    })
}

function animatePress(currentColor) {
    var button = document.querySelector('#'+currentColor);
    button.classList.add('pressed');

    setTimeout(function() {
      button.classList.remove('pressed');
    }, 100);
  }