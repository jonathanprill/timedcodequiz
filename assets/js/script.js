//Global Variables for selecting ID's within HTML

var headTextEl = document.querySelector("#head-text");
var informativeTextEl = document.querySelector("#informative-text");
var pageContentEl = document.querySelector("#page-content")
var choicesEl = document.querySelector("#choices");
var buttonsEl = document.querySelector("#buttons");



var score = 0;





//CREATES BUTTONS

var createButton1 = function() {
    var btn1 = document.createElement("button");
    btn1.textContent = "Answer 1";
    btn1.className = "btn";
    btn1.id = 'selection1';
    pageContentEl.appendChild(btn1);
}

var createButton2 = function() {
    var btn2 = document.createElement("button");
    btn2.textContent = "Answer 2";
    btn2.className = "btn";
    btn2.id = 'selection2';
    pageContentEl.appendChild(btn2);
}

var createButton3 = function() {
    var btn3 = document.createElement("button");
    btn3.textContent = "Answer 3";
    btn3.className = "btn";
    btn3.id = 'selection3';
    pageContentEl.appendChild(btn3);
}

var createButton4 = function() {
    var btn4 = document.createElement("button");
    btn4.textContent = "Answer 4";
    btn4.className = "btn";
    btn4.id = 'selection4';
    pageContentEl.appendChild(btn4);
}






//CREATES QUESTIONS

var createQuestion = function() {
    headTextEl = document.createElement("h1");
    headTextEl.innerHTML = "";
    headTextEl.className = "head-text"
    pageContentEl.appendChild(headTextEl);
}






//Correct Vs Incorrect Variables

var correctVar1 = function() {
    console.log("Right!");
    score++;
    question2();
}

var incorrectVar1 = function() {
    console.log("Wrong!")
    question2();
    timeLeft = timeLeft - 10;
}


var correctVar2 = function() {
    console.log("Right!");
    score++;
    question3();
}

var incorrectVar2 = function() {
    console.log("Wrong!")
    question3();
    timeLeft = timeLeft - 10;
}


var correctVar3 = function() {
    console.log("Right!");
    score++;
    question4();
}

var incorrectVar3 = function() {
    console.log("Wrong!")
    question4();
    timeLeft = timeLeft - 10;
}

var correctVar4 = function() {
    console.log("Right!");
    score++;
    question5();
}

var incorrectVar4 = function() {
    console.log("Wrong!")
    question5();
    timeLeft = timeLeft - 10;
}

var correctVar5 = function() {
    console.log("Right!");
    score++;
    question6();
}

var incorrectVar5 = function() {
    console.log("Wrong!")
    question6();
    timeLeft = timeLeft - 10;
}

var correctVar6 = function() {
    console.log("Right!");
    score++;
    question7();
}

var incorrectVar6 = function() {
    console.log("Wrong!")
    question7();
    timeLeft = timeLeft - 10;
}

var correctVar7 = function() {
    console.log("Right!");
    score++;
    question8();
}

var incorrectVar7 = function() {
    console.log("Wrong!")
    question8();
    timeLeft = timeLeft - 10;
}

var correctVar8 = function() {
    console.log("Right!");
    score++;
    question9();
}

var incorrectVar8 = function() {
    console.log("Wrong!")
    question9();
    timeLeft = timeLeft - 10;
}

var correctVar9 = function() {
    console.log("Right!");
    score++;
    question10();
}

var incorrectVar9 = function() {
    console.log("Wrong!")
    question10();
    timeLeft = timeLeft - 10;
}

var correctVar10 = function() {
    console.log("Right!");
    score++;
    endScreen();
}

var incorrectVar10 = function() {
    console.log("Wrong!")
    endScreen();
    timeLeft = timeLeft - 10;
}






//INTERACTIVE PAGES

var question1 = function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    headTextEl.innerHTML = "Which is NOT a Primitive Data Type?";
    selection1.innerHTML = "Function";
    selection2.innerHTML = "Number";
    selection3.innerHTML = "String";
    selection4.innerHTML = "Boolean";

    selection1.addEventListener("click", correctVar1);
    selection2.addEventListener("click", incorrectVar1);
    selection3.addEventListener("click", incorrectVar1);
    selection4.addEventListener("click", incorrectVar1);

}


var question2 = function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();
    
    headTextEl.innerHTML = "Which special characters incase an array?";
    selection1.innerHTML = "{}";
    selection2.innerHTML = "()";
    selection3.innerHTML = "[]";
    selection4.innerHTML = "<>";

    selection1.addEventListener("click", incorrectVar2);
    selection2.addEventListener("click", incorrectVar2);
    selection3.addEventListener("click", correctVar2);
    selection4.addEventListener("click", incorrectVar2);
   
}

var question3 = function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();
    
    headTextEl.innerHTML = "How would you form a conditional statement?";
    selection1.innerHTML = "for...";
    selection2.innerHTML = "for...loop";
    selection3.innerHTML = "function()";
    selection4.innerHTML = "if...else";

    selection1.addEventListener("click", incorrectVar3);
    selection2.addEventListener("click", incorrectVar3);
    selection3.addEventListener("click", incorrectVar3);
    selection4.addEventListener("click", correctVar3);
   
}

var question4 = function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();
    
    headTextEl.innerHTML = "What runs until a condition is false?";
    selection1.innerHTML = "loops";
    selection2.innerHTML = "functions";
    selection3.innerHTML = "objects";
    selection4.innerHTML = "methods";

    selection1.addEventListener("click", correctVar4);
    selection2.addEventListener("click", incorrectVar4);
    selection3.addEventListener("click", incorrectVar4);
    selection4.addEventListener("click", incorrectVar4);
   
}

var question5 = function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();
    
    headTextEl.innerHTML = "What word describes an action that travels upwards through parent elements?";
    selection1.innerHTML = "layering";
    selection2.innerHTML = "cascading";
    selection3.innerHTML = "fracturing";
    selection4.innerHTML = "bubbling";

    selection1.addEventListener("click", incorrectVar5);
    selection2.addEventListener("click", incorrectVar5);
    selection3.addEventListener("click", incorrectVar5);
    selection4.addEventListener("click", correctVar5);
   
}

var question6 = function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();
    
    headTextEl.innerHTML = "How could you target an HTML id in javascript";
    selection1.innerHTML = ".addEventListener";
    selection2.innerHTML = ".querySelector";
    selection3.innerHTML = ".createElement";
    selection4.innerHTML = ".parse";

    selection1.addEventListener("click", incorrectVar6);
    selection2.addEventListener("click", correctVar6);
    selection3.addEventListener("click", incorrectVar6);
    selection4.addEventListener("click", incorrectVar6);
   
}

var question7 = function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();
    
    headTextEl.innerHTML = "How do you pull something from local storage?";
    selection1.innerHTML = ".setItem";
    selection2.innerHTML = ".parse";
    selection3.innerHTML = ".pullItem";
    selection4.innerHTML = ".getItem";

    selection1.addEventListener("click", incorrectVar7);
    selection2.addEventListener("click", incorrectVar7);
    selection3.addEventListener("click", incorrectVar7);
    selection4.addEventListener("click", correctVar7);
   
}

var question8 = function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();
    
    headTextEl.innerHTML = "What function pertains to button clicks?";
    selection1.innerHTML = ".matches()";
    selection2.innerHTML = ".setItem";
    selection3.innerHTML = ".addEventListener()";
    selection4.innerHTML = ".setAttribute()";

    selection1.addEventListener("click", incorrectVar8);
    selection2.addEventListener("click", incorrectVar8);
    selection3.addEventListener("click", correctVar8);
    selection4.addEventListener("click", incorrectVar8);
   
}

var question9 = function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();
    
    headTextEl.innerHTML = "Which concept pertains to the DOM?";
    selection1.innerHTML = "Web API";
    selection2.innerHTML = "Bubbling";
    selection3.innerHTML = "Arrays";
    selection4.innerHTML = "Loops";

    selection1.addEventListener("click", correctVar9);
    selection2.addEventListener("click", incorrectVar9);
    selection3.addEventListener("click", incorrectVar9);
    selection4.addEventListener("click", incorrectVar9);
   
}

var question10 = function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();
    
    headTextEl.innerHTML = "Bonus: Which pawn is being gambitted in the Queens Gambit?";
    selection1.innerHTML = "E Pawn";
    selection2.innerHTML = "D Pawn";
    selection3.innerHTML = "F Pawn";
    selection4.innerHTML = "C Pawn";

    selection1.addEventListener("click", incorrectVar10);
    selection2.addEventListener("click", incorrectVar10);
    selection3.addEventListener("click", incorrectVar10);
    selection4.addEventListener("click", correctVar10);
   
}


var endScreen = function() {
    pageContentEl.innerHTML = "";
    headTextEl = document.createElement("h1");
    headTextEl.innerHTML = "You Scored a " + score + "/10";
    headTextEl.className = "head-text"
    pageContentEl.appendChild(headTextEl);

    informativeTextEl = document.createElement("p");
    informativeTextEl.innerHTML = "Enter Your Name: "
    informativeTextEl.className = "informative-text"
    pageContentEl.appendChild(informativeTextEl);

    var nameInput = document.createElement("input");
    informativeTextEl.appendChild(nameInput);

    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.type = 'submit';
    submitButton.className = "btn";
    submitButton.id = 'submitId';
    pageContentEl.appendChild(submitButton);
    
    
    

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        

        // Learned how to add to an existing array in local storage here https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage 
        // Learned how to sort and keep just top scores in array here https://stackoverflow.com/questions/47858518/highscore-in-local-storage-javascript
        const result = {userName: nameInput.value, score: score}
        const savedScores = localStorage.getItem('scoreKey') || '[]' // get the score, or the initial value if empty
        const highscores = [...JSON.parse(savedScores), result] // add the result
          .sort((a, b) => b.score - a.score) // sort descending
          .slice(0, 5) // take highest 5
        localStorage.setItem('scoreKey', JSON.stringify(highscores))


        window.location.assign("index.html");           //got this code from youTube video https://www.youtube.com/watch?v=DFhmNLKwwGw
    });
    
}

//COUNTDOWN TIMER - Got some of this code from classwork example

var timerEl = document.getElementById('timer');
var timeLeft = 75;
function countdown() {
    
  
    
    var timeInterval = setInterval(function() {
  
      timerEl.innerHTML = timeLeft;
      if (timeLeft <= 0) {
        endScreen();
        clearInterval(timeInterval);
        timerEl.textContent = "";
      }

      timeLeft--;

    }, 1000);
}






//starts the game

buttonsEl.addEventListener("click", question1);
buttonsEl.addEventListener("click", countdown);






