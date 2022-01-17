var pageContentEl = document.querySelector("#page-content")

var headTextEl = document.querySelector("#head-text");

var orderedListEl = document.querySelector("#ordered-list");






var topScorerZero = JSON.parse(localStorage.getItem("scoreKey")); 
var userZero = topScorerZero[0];     

var topScorerOne = JSON.parse(localStorage.getItem("scoreKey")); 
var userOne = topScorerOne[1];  

var topScorerTwo = JSON.parse(localStorage.getItem("scoreKey")); 
var userTwo = topScorerTwo[2];  

var topScorerThree = JSON.parse(localStorage.getItem("scoreKey")); 
var userThree = topScorerThree[3];  

var topScorerFour = JSON.parse(localStorage.getItem("scoreKey")); 
var userFour = topScorerFour[4];  





var listZero = document.createElement("li");
listZero.innerHTML = "Name: " + userZero.userName + "\xa0\xa0\xa0\xa0\xa0\xa0 Score: " + userZero.score;
listZero.className = "head-text"
orderedListEl.appendChild(listZero);



var listOne = document.createElement("li");
listOne.innerHTML = "Name: " + userOne.userName + "\xa0\xa0\xa0\xa0\xa0\xa0 Score: " + userOne.score;
listOne.className = "head-text"
orderedListEl.appendChild(listOne);


var listOne = document.createElement("li");
listOne.innerHTML = "Name: " + userTwo.userName + "\xa0\xa0\xa0\xa0\xa0\xa0 Score: " + userTwo.score;
listOne.className = "head-text"
orderedListEl.appendChild(listOne);


var listOne = document.createElement("li");
listOne.innerHTML = "Name: " + userThree.userName + "\xa0\xa0\xa0\xa0\xa0\xa0 Score: " + userThree.score;
listOne.className = "head-text"
orderedListEl.appendChild(listOne);


var listOne = document.createElement("li");
listOne.innerHTML = "Name: " + userFour.userName + "\xa0\xa0\xa0\xa0\xa0\xa0 Score: " + userFour.score;
listOne.className = "head-text"
orderedListEl.appendChild(listOne);






