// Code key:

// vars
// score & score1 = input
// player = h1 & player 1 display span
// button = player 1 button
// player2 = h1 & player 2 display span 2
// button2 = player 2 button
// play = h2 & winningScore display span 
// rbutton = reset button
// winningScore = winning score for game


// keeping track of the winning score
var winningScore = play;
if (player === player2){
	player <= play; 
}
else if (player2 === player){
	player2 <= play;
}

// adding an EventListener to both player buttons when they reach the winningScore
// var button = document.getElementById("enter");
// var button2 = document.getElementById("add");
// button.addEventListener("toggle", function() {
// 	if(player.textContent == winningScore) {
// 		player.textContent = winningScore;
// 		player.textContent.color = 'green';
// 	}
// 	else{
// 		return score;
// 	}
// });

// button2.addEventListener("toggle", function() {
// 	if(player2.textContent == winningScore) {
// 		player2.textContent = winningScore;
// 		player2.textContent.color = 'blue';
// 	}
// 	else{
// 		return score1;
// 	}
// });


// I'm connecting player 1 to button and display 1
var score = 0;
var player = document.getElementById("p1");
var button = document.getElementById("enter");
button.addEventListener("click", function() {
	
	 if(score !== winningScore) {
		score++;
	// 	player.textContent = score; 
	  }
	 else if(score === winningScore) {
	 	score = winningScore;
	 }
 	
});


// linking player 2 button to display
var score1 = 0;
var player2 = document.getElementById("p2");
var button2 = document.getElementById("add");
button2.addEventListener("click", function() {
	 
	if(score1 !== winningScore) {
		score1++;
		player2.textContent = score1;
	}
	else if(score1 === winningScore) {
		score1 = winningScore;
	}
	
});


// linking my input field to my h2 display
var value = 3;
var input = document.getElementById("score");
var play = document.getElementById("range");
input.addEventListener("change", function() {
	play.textContent = input.value;
});

// activating the reset button
var rbutton = document.querySelectorAll("button")[2];
rbutton.addEventListener("click", function() {
	score = score1 = 0;
	player.textContent = player2.textContent = "0";

	
});


// stopping the scoreboard after it reaches the goal
// var pl1 = stop; 
// var pl2 = stop;
// if(score == player.textContent == winningScore) {
// 	player.textContent.color = "";
// }
// else if(score1 == player2.textContent == winningScore) {
// 	player2.textContent.color = "";
// }



// I'm using event listener to make each button active to
 // var p1button = document
 // var p2button = document
 // var resetbutton = document {
// 	button.addEventListener("click", function() {
// 	button.classList.toggle("score");
// 	})
// }
// var h0 = document.getElementById("p2");
// var press = document.getElementById("add");

// press.addEventListener("click", function() {
// 	h0.classList.toggle("p2");
// });
// var h1 = document.querySelector("button")[0];
// button.addEventListener("click", function() {
// 	h1.classList.toggle("points");
// })

// var h1 = document.querySelector("h1");
// for (var i = 0; i < h1.length; i++) {
// 	p2[i].addEventListener("click", function() {
// 		console.log(p2.value);
// 	})
// }

// // var h1 = document.getElementById("MyH1");
// //  var button = document.getElementById("click");
// //   button.addEventListener("click", function() {
// //   	h1.classList.toggle("important",);
// //   });