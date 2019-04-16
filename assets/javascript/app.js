
var userChoice;
var questionsAnswered = 0;
$("#q-answered").html("Questions Answered: " + questionsAnswered);
var correctChoice = 0;
$("#q-correct").html("Total Correct: " + correctChoice);
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
$(document).ready(function(){
var i = 0;

var shortTimer;
$("#qboard").html(question[i].text);
setInterval(questionChange, 5000);
setTimeout(function(){
    alert("Time's Up!")
}, 30000);

function questionChange(){
    i = (i + 1);
    $("#qboard").html(question[i].text);
    //shortTimer = setInterval(questionChange, 5000);
    //clearInterval(shortTimer);
    
    console.log(question[i]);
};
function clickHandler(){
    clearInterval(shortTimer);
    questionChange();
}
$(".userbtn").on("click", clickHandler);

}); 
$("#True").on("click", function(){
userChoice = $("#True").val().trim();
if(userChoice == question[i].value){
    correctChoice = (correctChoice + 1);
    questionsAnswered = (questionsAnswered + 1);
    $("#q-answered").html("Questions Answered: " + questionsAnswered);
    $("#q-correct").html("Total Correct: " + correctChoice);
    }
})
$("#False").on("click", function(){
    userChoice = $("#False").val().trim();
    if(userChoice == question[i].value){
        questionsAnswered = (questionsAnswered + 1);
        $("#q-answered").html("Questions Answered: " + questionsAnswered);
    }
})

console.log(question);
console.log(question.length)
