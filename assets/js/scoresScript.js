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





var orderedList = document.createElement("li");
orderedList.innerHTML = "Name: " + userZero.userName + "\xa0\xa0\xa0\xa0\xa0\xa0 Score: " + userZero.score;
orderedList.className = "head-text"
orderedListEl.appendChild(orderedList);



var orderedList = document.createElement("li");
orderedList.innerHTML = "Name: " + userOne.userName + "\xa0\xa0\xa0\xa0\xa0\xa0 Score: " + userOne.score;
orderedList.className = "head-text"
orderedListEl.appendChild(orderedList);


var orderedList = document.createElement("li");
orderedList.innerHTML = "Name: " + userTwo.userName + "\xa0\xa0\xa0\xa0\xa0\xa0 Score: " + userTwo.score;
orderedList.className = "head-text"
orderedListEl.appendChild(orderedList);


var orderedList = document.createElement("li");
orderedList.innerHTML = "Name: " + userThree.userName + "\xa0\xa0\xa0\xa0\xa0\xa0 Score: " + userThree.score;
orderedList.className = "head-text"
orderedListEl.appendChild(orderedList);


var orderedList = document.createElement("li");
orderedList.innerHTML = "Name: " + userFour.userName + "\xa0\xa0\xa0\xa0\xa0\xa0 Score: " + userFour.score;
orderedList.className = "head-text"
orderedListEl.appendChild(orderedList);






