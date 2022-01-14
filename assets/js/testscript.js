var headTextEl = document.querySelector("#head-text");
var informativeTextEl = document.querySelector("#informative-text");
var pageContentEl = document.querySelector("#page-content")

var choicesEl = document.querySelector("#choices");

var buttonsEl = document.querySelector("#buttons");







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

//END CREATES BUTTONS






//CREATES QUESTIONS

var createQuestion = function() {
    headTextEl = document.createElement("h1");
    headTextEl.innerHTML = "";
    headTextEl.className = "head-text"
    pageContentEl.appendChild(headTextEl);
}


//END CREATES QUESTIONS





var question1 = function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    headTextEl.innerHTML = "What should question 1 be?";
    createButton1();
    createButton2();
    createButton3();
    createButton4();
   
    
    selection1.addEventListener("click", question2);
    selection2.addEventListener("click", question2);
    selection3.addEventListener("click", question2);
    selection4.addEventListener("click", question2);
}


var question2 = function() {
    pageContentEl.innerHTML = "";
    createQuestion();
    headTextEl.innerHTML = "What should question 2 be?";
    createButton1();
    createButton2();
    createButton3();
    createButton4();
   
   
}




buttonsEl.addEventListener("click", question1);






