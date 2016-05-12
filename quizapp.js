var questions = [{
	question : "Who Sculpted this version of David?",
	choices : [" Donatello", " Michelangelo", " Leonardo da Vinci", " Raphael"],
	IMG : "images/question0.jpg",
	answer : 1
},{
	question : "Which renniassance artist is depicted in this self portrait?",
	choices : [" Donatello", " Donato Bramante", " Leonardo da Vinci", " Johannes Vermeer"],
	IMG : "images/question1.jpg",
	answer : 2
},{
	question : "Who's work is this early renaissance sculpture of St. George?",
	choices : [" Donatello", " Michelangelo", " Leonardo da Vinci", " Raphael"],
	IMG : "images/question2.jpg",
	answer : 0
},{
	question : "Who painted this piece \"The Music Lesson\", and was known for \"painting with light\"?",
	choices : [" Johannes Vermeer", " Michelangelo", " Leonardo da Vinci", " Raphael"],
	IMG : "images/question3.jpg",
	answer : 0
},{
	question : "Which of these renaissance artists painted this piece \"The School of Athens\"?",
	choices : [" Johannes Vermeer", " Michelangelo", " Leonardo da Vinci", " Raphael"],
	IMG : "images/question4.jpg",
	answer : 3
},{
	question : "Who's responsible for this architecture at the vatican musuem?",
	choices : [" Donatello", " Donato Bramante", " Leonardo da Vinci", " Johannes Vermeer"],
	IMG : "images/question5.jpg",
	answer : 1
}]

//global variables
var currentquestion = 0; 
var numbercorrect = 0; // Keep track of score
var inputValue;        //____Input value is found with loop below


function submitf(){                  //_____________________invoked in HTML with onclick
	event.preventDefault();
	var radios = document.getElementsByName("choices");
	for(var i = 0; i < radios.length; i++){   //______________Loops through radios to find checked radio and assigns HTML value to variable.
		if(radios[i].checked){
			inputValue = radios[i].value;
		}
	}
	if (currentquestion < 5){
	answercheck();
	currentquestion+=1;
	updatepage();
	} else {
	answercheck();	
	finalscore();
	}
}

function updatepage(){
	document.getElementById("pic").src = questions[currentquestion].IMG // updates image
	document.getElementById("question").innerHTML = questions[currentquestion].question // updates question
	for(var i=0; i < 4; i++) {
		document.getElementById("L" + i).innerHTML = questions[currentquestion].choices[i];

	}
}

function answercheck(){
	if (inputValue == questions[currentquestion].answer) {
		alert("You are correct");
		numbercorrect+=1;
	} else if (inputValue != questions[currentquestion].answer) {
		alert("Sorry, the correct answer was " + questions[currentquestion].choices[questions[currentquestion].answer]); //_____Returns the correct answer from the choices array, by selecting with object property answer.
	}
}

function finalscore(){
		alert("You got " + numbercorrect + " right out of 6, to play again refresh the page");
}
