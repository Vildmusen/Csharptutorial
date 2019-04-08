// window.onload(alert("helo"));

var current = 0;
var last = 3;

window.onload = (function showfirst (){
    document.getElementById("0").style.display = "block";
    document.getElementById("left").disabled = true;
    
});

function showHelp (){
    var currentsolution = document.getElementById("sol" + current);
    if(currentsolution.style.display == "block"){
        currentsolution.style.display = "none";
    }
    else {
        currentsolution.style.display = "block";
    }
}

function Step (step){

    if(step === 0){
        document.getElementById(current.toString()).style.display = "block";
    } else {
        var currentStep = document.getElementById(current.toString());
        var nextStep = document.getElementById((current + step).toString());

        currentStep.style.display = "none";
        nextStep.style.display = "block";

        current += step;
    }

    updateButtons();
    
}

function jump (){
    
    alert("Funkar inte än :'(");
    // var jumpto = prompt("Vilket steg?", "");

    // if(parseInt(jumpto)){
    //     if(Math.abs(parseInt(jumpto)) <= last){
    //         document.getElementById(current.toString()).style.display = "none";
    //         current = jumpto;
    //         Step(0);
    //     } else {
    //         alert("Ange en siffra mellan 1 - " + last + "!");
    //     }
    // } else {
    //     alert("Ange en siffra mellan 1 - " + last + "!");
    // }
}

function updateButtons (){

    if(current === 0){
        document.getElementById("left").disabled = true;
    } else {
        document.getElementById("left").disabled = false;
    }

    if(current === last){
        document.getElementById("right").disabled = true;
    } else {
        document.getElementById("right").disabled = false;
    }
}