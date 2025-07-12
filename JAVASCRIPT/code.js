var playing = false;
var score;
var action;
var timeRemaining;
var correctAnwer;

// if we click on the start/reset
document.getElementById("startReset").onclick = function(){
    // if we are playing
    if(playing == true){
        hide("gameOver");
        // reload page
        location.reload();
    }
    // if we are not playing
    else{
        // change mode to playing
        playing = true;
        // set score to 0
        score = 0;
        hide("gameOver");
        document.getElementById("scoreValue").innerHTML = score;
        // show countdown box
        show("timeRemaining");
        timeRemaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
        // change button to reset
        document.getElementById("startReset").innerHTML = "Reset Game";
        // Start Countdown
        startCountdown();
        // generate Q&A
        generateQA();

    }

}

document.getElementById("box1").onclick = function(){
    if(playing == true){
        if(document.getElementById("box1").innerHTML == correctAnwer){
            score++;
            document.getElementById("scoreValue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);
            generateQA();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000);
        }
    }
}
document.getElementById("box2").onclick = function(){
    if(playing == true){
        if(document.getElementById("box2").innerHTML == correctAnwer){
            score++;
            document.getElementById("scoreValue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);
            generateQA();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000);
        }
    }
}
document.getElementById("box3").onclick = function(){
    if(playing == true){
        if(document.getElementById("box3").innerHTML == correctAnwer){
            score++;
            document.getElementById("scoreValue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);
            generateQA();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000);
        }
    }
}
document.getElementById("box4").onclick = function(){
    if(playing == true){
        if(document.getElementById("box4").innerHTML == correctAnwer){
            score++;
            document.getElementById("scoreValue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);
            generateQA();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000);
        }
    }
}



function startCountdown(){
    action = setInterval(function(){
        timeRemaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
        if(timeRemaining  == 0){
            // game over
            stopCountdown();
            show("gameOver");
            document.getElementById("finalscore").innerHTML = score;
            hide("timeRemaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startReset").innerHTML = "Start Game";
        }
    },1000);
}

function stopCountdown(){
    clearInterval(action);
}

function hide(id){
    document.getElementById(id).style.display = "none";
}

function show(id){
    document.getElementById(id).style.display = "block";
}

function generateQA(){
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    correctAnwer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnwer;
    var answers = [correctAnwer];
    for(i=1; i<5; i++){
        if(i != correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer = (1 + Math.round(9*Math.random())) * (1 + Math.round(9*Math.random()))
            }
            while(answers.indexOf(wrongAnswer) > -1){}
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

























