// get user input by onclick

var gameArea = document.getElementById('gameArea')
var startGameButton = document.getElementById('start-game')


//start data
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: [ "alerts","strings", "booleans", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    
  ];
  var index = 0


  document.querySelector("#show-game").style="display:none";//invisivle
  document.querySelector("#start-game").style="display:''"//visible


//step1 - check the data-answer in the button with the user click
// if the data-answer matches the click, display correct and go to the ////next right away  (index++)
//if wrong click, substract 15 and go to next question (index++)


  document.querySelector("#start-game").addEventListener("click",function(){
    document.querySelector("#show-game").style="display:''"
    document.querySelector("#start-game").style="display:none"
    myFunction()
  })
  //helper functions
  var startGame = function(){
    //startover with new choices
    document.querySelector('#choices').innerHTML=""


    //add the title of the game
    //create h2
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


    var choice1 = document.createElement("button")
    choice1.textContent=questions[index].choices[0]
    choice1.setAttribute("data-answer",questions[index].answer)
     document.querySelector("#choices").appendChild(choice1)
      
     var choice2 = document.createElement("button")
     choice2.textContent=questions[index].choices[1]
     choice2.setAttribute("data-answer",questions[index].answer)
    document.querySelector('#choices').appendChild(choice2)
    
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


var numberCount=0;
var remainingTime = questions.length*15
// timer
function myFunction(){
   
    startGame()
    setInterval(function(){
        document.getElementById("timer").innerHTML="<b>"+ remainingTime+"</b>"
        console.log(remainingTime--)
        
      numberCount++
       if(numberCount===15 &&  index < questions.length ){
       
          index++
          numberCount=0; 
          startGame()
       }

        
    },1000)
}

