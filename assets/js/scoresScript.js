var pageContentEl = document.querySelector("#page-content")

var headTextEl = document.querySelector("#head-text");

var orderedListEl = document.querySelector("#ordered-list");









var listOfScores = JSON.parse(localStorage.getItem("scoreKey")); 


var list = document.createElement("li");
    list.innerHTML = listOfScores
    list.className = "head-text"
    orderedListEl.appendChild(list);







    
    // setItem("scoreKey", JSON.stringify(existingEntries));
    // JSON.parse(localStorage.getItem("scoreKey")); 
