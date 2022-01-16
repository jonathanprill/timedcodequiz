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






//CREATES QUESTIONS and ALTERNATE SCREENS

var createQuestion = function() {
    headTextEl = document.createElement("h1");
    headTextEl.innerHTML = "";
    headTextEl.className = "head-text"
    pageContentEl.appendChild(headTextEl);
}

// var CreateEndScreen = function() {
//     headTextEl = document.createElement("h1");
//     headTextEl.innerHTML = "All Done!";
//     headTextEl.className = "head-text"
//     pageContentEl.appendChild(headTextEl);

//     informativeTextEl = document.createElement("p");
//     informativeTextEl.innerHTML = "Your high score is " + score + "/5"
//     informativeTextEl.className = "informative-text"
//     pageContentEl.appendChild(informativeTextEl);
// }





//Correct Vs Incorrect Variables

var correctVar1 = function() {
    console.log("Right!");
    score++;
    question2();
}

var incorrectVar1 = function() {
    console.log("Wrong!")
    question2();
}


var correctVar2 = function() {
    console.log("Right!");
    score++;
    question3();
}

var incorrectVar2 = function() {
    console.log("Wrong!")
    question3();
}


var correctVar3 = function() {
    console.log("Right!");
    score++;
    question4();
}

var incorrectVar3 = function() {
    console.log("Wrong!")
    question4();
}

var correctVar4 = function() {
    console.log("Right!");
    score++;
    question5();
}

var incorrectVar4 = function() {
    console.log("Wrong!")
    question5();
}

var correctVar5 = function() {
    console.log("Right!");
    score++;
    endScreen();
}

var incorrectVar5 = function() {
    console.log("Wrong!")
    endScreen();
}











//INTERACTIVE PAGES

var question1 = function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    createButton1();
    createButton2();
    createButton3();
    createButton4();

    headTextEl.innerHTML = "What animal is best?";
    selection1.innerHTML = "Dogs";
    selection2.innerHTML = "Cats";
    selection3.innerHTML = "Squirrels";
    selection4.innerHTML = "Birds";

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
    
    headTextEl.innerHTML = "What my favorite food?";
    selection1.innerHTML = "Pizza";
    selection2.innerHTML = "Burgers";
    selection3.innerHTML = "BBQ";
    selection4.innerHTML = "Pasta";

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
    
    headTextEl.innerHTML = "What my favorite sport?";
    selection1.innerHTML = "Tennis";
    selection2.innerHTML = "Chess";
    selection3.innerHTML = "Surfing";
    selection4.innerHTML = "MTBing";

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
    
    headTextEl.innerHTML = "What do I do most?";
    selection1.innerHTML = "Gym";
    selection2.innerHTML = "Sauna";
    selection3.innerHTML = "Bike";
    selection4.innerHTML = "Hike";

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
    
    headTextEl.innerHTML = "What the hardest chess opening?";
    selection1.innerHTML = "London";
    selection2.innerHTML = "Karo Cann";
    selection3.innerHTML = "Kings Indian";
    selection4.innerHTML = "Neidorph";

    selection1.addEventListener("click", incorrectVar5);
    selection2.addEventListener("click", incorrectVar5);
    selection3.addEventListener("click", incorrectVar5);
    selection4.addEventListener("click", correctVar5);
   
}

var endScreen = function() {
    pageContentEl.innerHTML = "";
    headTextEl = document.createElement("h1");
    headTextEl.innerHTML = "You Scored a " + score + "/5";
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
    var existingEntries = JSON.parse(localStorage.getItem("scoreKey")); 
    if(existingEntries == null) existingEntries = [];
    var highScores = [nameInput.value.trim(), score];
    existingEntries.push(highScores);
    localStorage.setItem("scoreKey", JSON.stringify(existingEntries));
    window.location.assign("index.html");           //got this code from youTube video https://www.youtube.com/watch?v=DFhmNLKwwGw
    });
    
}









//starts the game

buttonsEl.addEventListener("click", question1);






