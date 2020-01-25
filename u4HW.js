

var gameArea = document.getElementById('gameArea')
var startGameButton = document.getElementById('start-game')


//start data
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["alerts", "strings", "booleans", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },  {
    title: "aaaaaaaa",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  }

];
var index = 0


document.querySelector("#show-game").style = "display:none";//invisible
document.querySelector("#start-game").style = "display:''"//visible
document.querySelector("#Highscores").style = "display:'none'"

//step1 - check the data-answer in the button with the user click
// if the data-answer matches the click, display correct and go to the ////next right away  (index++)
//if wrong click, substract 15 from current time and go to next question (index++)

// onclick start game
document.querySelector("#start-game").addEventListener("click", function () {
  document.querySelector("#show-game").style = "display:''"
  document.querySelector("#start-game").style = "display:none"
 initializeGame()
})
//helper functions
var startGame = function () {
  //startover with new choices
  document.querySelector('#choices').innerHTML = ""
gameArea.innerHTML=""

  //add the title of the game
  //create <h2>question title</h2>
  var questionTitle = document.createElement('h2');
  //build the content
  questionTitle.textContent = questions[index].title;
  //display the data into the game area
  gameArea.appendChild(questionTitle);

  //add the choice of the game
  //create h3
  var questionChoice = document.createElement('h3');
  //build the content
  questionChoice.textContent = questions[index].choices;
  //display the data into the game area
  gameArea.appendChild(questionChoice);
/* "alerts", "strings", "booleans", "numbers"
<div id="choices">
<button data-answer="alerts">alerts</buttton>  , i=0
<button data-answer="alerts">strings</buttton>  , i=1
<button data-answer="alerts">booleans</buttton>  , i=2
<button data-answer="alerts">numbers</buttton>  , i=3
</div>
*/
for (let i = 0; i <  questions[index].choices.length; i++) {
  var   choiceBtn = document.createElement("button")
  choiceBtn.textContent = questions[index].choices[i]
  choiceBtn.setAttribute("data-answer", questions[index].answer)
  choiceBtn.setAttribute("class","choices")
  choiceBtn.onclick=checkAnswer
  document.querySelector("#choices").appendChild(choiceBtn)
  
}
  
}

function checkAnswer(){
   var getAnswer=this.getAttribute("data-answer")
    var choices= document.querySelector(".choices").textContent
    if(getAnswer===choices){
      document.getElementById("results").innerHTML="Correct"
    }
    else{
      document.getElementById("results").innerHTML="Wrong"
    
    }
}

// startGame()
// function display choices
//  var choiceBtn = function(){

//  }

// //

// //  function check answer

//  choiceButton.addEventListener('click',checkChoice)


//   //user input // event listeners 
//   startGameButton.addEventListener('click',startGame)

// control timer


var numberCount = 0;
var remainingTime = questions.length * 15
// timer
function initializeGame() {

  startGame()
  setInterval(countdown, 1000)
}

function countdown (){
  numberCount++

  document.getElementById("timer").innerHTML = "<b>" + remainingTime + "</b>"
  console.log(remainingTime--)

  if (numberCount === 15 && index < questions.length) {

    index++
    numberCount = 0;
    startGame()
  }

}

