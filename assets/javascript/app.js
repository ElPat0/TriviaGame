
var userChoice = 0;
var questionsAnswered = 0;
var correctChoice = 0;
var question = [
    {text: "The trunk of an elephant is prehensile.",
    value: "True",
},
    {text: "What the eye percieves as 'black' is actually the absence of light.",
    value: "True",
}, 
    {text: "3x3x3 = 36",
    value: "False",
}, 
    {text: "The state fish of Hawai'i is named Humuhumunukunukuapua'a.",
    value: "True",
},
    {text: "All Lagrange points are stable.",
    value: "False",
},
    {text: "Plant cells without deformity always replicate perfectly.",
    value: "True",
},
    {text: "Brevity is the soul of wit.",
    value: "True",
},
    {text: "Console gaming platforms are computers with less funcitonality.",
    value: "True", 
},
    {text: "Science has proven that children with balloons are 100% happier than children without balloons.",
    value: "False",
},
    {text: "Not all infinities are equal.",
    value: "True",
},
    {text: "It is possible for two separate consciousnesses to percieve a single event and form conflicting memories.",
    value: "True",
},
    {text: "George Washington declined the Presidency the first time it was offered to him.",
    value: "True",
}, 
    {text: "Canadian bacon is bacon.",
    value: "False",
}, 
    {text: "Three times an imaginary number, doubled, is still an imaginary number.",
    value: "True",
},
    {text: "It's ok to offer to pay artists with exposure.",
    value: "False",
}];
//$(document).ready(function(){
var i = 0;
$("#qboard").html(question[i].text);


$(".userbtn").on("click", function questionchange(){
    if(userChoice == question[i].value){
        correctChoice = (correctChoice++);
        questionsAnswered = (questionsAnswered++);
    }
    else{
        questionsAnswered = (questionsAnswered++)
    }
    var i = (i=i++);
    $("#qboard").html(question[i].text);
    window.setTimeout(30000, function(){
        alert("Time's Up!");
//This is supposed to be cycling the question, and begin the 30 second timer
});
window.setInterval(questionchange, 5000);
// automatically change question every 5 seconds
});

  //  if(i > question.length){
    //    alert("You've answered all the questions!");
   // After ansewring all 15 questions, end cycle.
//})
//for(let i = 0; i < question.length; i++){;
//$("#qboard").text(question[i].text);
//} This for loop was just cycling to the last value each time.


$("#true", "#false").on("click", function(){
  i=(i++);
}); 
//This is supposed to be advancing the question with each user selection, and comparing the button value to the array element value to determine correct/incorrect

console.log(question);
console.log(question.length)
