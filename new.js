// starting data
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
  },
  {
    title: "aaaaa",
    choices: ["a", "b", "c", "d"],
    answer: "a"
  },
  {
    title: "bbbbb",
    choices: ["a", "b", "c", "d"],
    answer: "b"
  },
  {
    title: "ccccc",
    choices: ["a", "b", "c", "d"],
    answer: "c"
  }
]
var score = 0;
var questionsCounter = 0;
var description = document.getElementById("description");
var timer;
var timeLine = 1 * (questions.length + 1);

// create submit button
var submit = document.createElement("BUTTON");
submit.innerHTML = "submit";
submit.setAttribute("id", "submit");
// create input area
var inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("id", "input");
// creat go back button
var goBack = document.createElement("BUTTON");
goBack.innerHTML = "Go Back";
goBack.setAttribute("id", "goBack");
// creat cancle button
var cancle = document.createElement("BUTTON");
cancle.innerHTML = "Cancle Score";
cancle.setAttribute("id", "cancle");


// start button onclick function
$("#start").on("click", function start() {
  $("#start").remove();
  //set up timer
  timer = setInterval(function () {
    timeLine--
    $("#timer").text("Remaining Time " + timeLine);
    if (timeLine === 0) {
      $("#title").empty();
      $("#title").text("All Done!");
      $("#description").empty();
      $("#description").text("Your score is: " + score);
      $("#timer").remove();
      $("#result").empty();
      $("#result").text("Enter Initial: ");
      $("#result").append(inputName);
      document.body.append(submit);

      // submit page
      $("#submit").on("click", function () {
        // get input initial 
        var initial = document.getElementById("input").value;
        // show result page
        $("#title").empty();
        $("#title").text("High Score");
        $("#description").empty();
        $("#description").append(initial + " " + score);
        $("#result").empty();
        $("#submit").remove();
        $("viewHighscore").remove();
        document.body.append(goBack);
        // goBack button onclick
        $("#goBack").on("click", function () {
          start();
          $('#goBack').remove();
          $('#cancle').remove();
        });
        document.body.append(cancle);
        // cancle button onclick
        $("#cancle").on("click", function () {
          $("#description").empty();
        })
      });
    }
  }
    , 1000);
  counter();
});

function myFunction() {
  console.log("hspage");
}

//high score page

// function hspage (){
//     console.log("hspage");
// }

function counter() {
  var currentQuestion = questions[questionsCounter];

  $("#title").text(questions[questionsCounter].title);
  $("#description").empty();

  for (j = 0; j < 4; j++) {
    var choicesEl = document.getElementById("description");
    var choice = currentQuestion.choices[j];
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = j + 1 + ". " + choice;
    // attach click event listener to each choice
    choiceNode.onclick = questionClick;
    // display on the page
    choicesEl.appendChild(choiceNode);
  };
};

function questionClick() {
  if (this.value === questions[questionsCounter].answer) {
    score += 30;
    $("#result").text("Correct! Your score is:" + score + ".      When time run out will jump to next page.");
  }
  else {
    $("#result").text("Wrong, Your score is:" + score + ".      When time run out will jump to next page.");
  }
  if (questionsCounter < questions.length - 1) {
    questionsCounter++
  };
  console.log(questionsCounter);
  counter();
};







