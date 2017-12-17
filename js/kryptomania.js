// Matt P. Seltzer
// Dec. 16, 2017
// kryptomania.js
"use strict";

// global variables
var currentQuestion;
var correctAnswers = [];
var responses = [];
var quizQuestions = [];
var choices = [];
var labels = document.getElementsByClassName("choiceText");
var radios = document.getElementsByClassName("choice");
// end global variables

function setUpQuiz(){
    correctAnswers = [1,
                      2,
                      3];
    
    quizQuestions = ["The mother of Superman's son is ",
                     "During his Superboy career in Smallville, Superman's secret identity was known by ",
                     "Supergirl's adoptive parents were "];
    choices =       [["Lori Lemaris","Lois Lane","Lana Lang","Luma Lynai"],
                     ["Lana Lang","Lex Luthor","Pete Ross","Bruce Wayne"],
                     ["Zor-El and Alura", "Jor-El and Lara", "Van-Zee and Sylvia", "Fred and Edna Danvers"]
                    ]; 

    // syntax to retrieve values from choices two-dimensional array is choices[i][j], 
    // where, in this case, (i >= 0 and <= quizQuestions.length - 1) and (j >=0 and j < 4)

    var quiz = document.getElementById("quiz");
    quiz.style.display = "block";
    currentQuestion = 0;
    clearSelections();  
    refreshContent(); 
   
}
/*
function isChecked(){
    
        else
        {
            return false;
        }
    }    
}
*/
function moveNext(){
    if (currentQuestion < quizQuestions.length){
        setUserResponse();                 
        currentQuestion += 1; 
        if (currentQuestion < quizQuestions.length){
            clearSelections();          
            refreshContent();
        }
        else if (currentQuestion = quizQuestions.length)
        {
            setUserResponse();         
        }          
    }
    else 
    {
        window.alert("Congratulations!  You've reached the end of the quiz!  Your score is " + score() + ".");
    }
} 
    
// updates radio button label content and text of quiz question
function refreshContent(){
    if (currentQuestion < quizQuestions.length){
        document.getElementById("questionNumberAndText").innerHTML = (currentQuestion + 1) + ". " + quizQuestions[currentQuestion];    
        for (var j = 0; j <= labels.length - 1; j++){
            labels[j].innerHTML = choices[currentQuestion][j];       
        }
    }            
}

function setUserResponse(){
    for(var i = 0; i < radios.length - 1; i++){
        if (radios[i].checked === true) {
           responses.push(i);
        }
    }       
}

function clearSelections(){
    for (var i = 0; i < radios.length -1; i++){
        radios[i].checked = false;
    }

}
function createEventListeners(){
    var next = document.getElementById("next");
    if (next.addEventListener){
        next.addEventListener("click", moveNext, false);
    }
}

function score(){
    var numberCorrect = 0;
    for(var i = 0; i < quizQuestions.length; i++){
        if (responses[i] === correctAnswers[i]){
            numberCorrect += 1;
        }
    }
    return ((1.0 * numberCorrect)/(1.0 * quizQuestions.length) * 100.0).toFixed(1) + "%";
}

window.addEventListener("load", createEventListeners, false);
window.addEventListener("load", setUpQuiz, false);