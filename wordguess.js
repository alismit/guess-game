var userInput = document.getElementById("guess");
var guessWord=userInput.value;
var emptyArray=[];

var alphabets=["a","b","c","d","e","f","i","j","k","k","l","m","n","o","p"
 ,"q","r","s","t","u","v","w","x","y","z"];

function randomWord() {
 for(var i=1; i<=Math.floor(Math.random())+3; i++) {
   random = alphabets [Math.round(Math.random()*alphabets.length)];
   emptyArray.push(random);
}

emptyArray=emptyArray.join("");

if (guessWord === emptyArray) {
 alert("You guessed right.");

}

else if (guessWord !== emptyArray){
 alert("Sorry! You are Wrong.");
 document.getElementById("correct").innerHTML=(" <h4>The Correct Answer is '" + emptyArray+"'</h4>");
}
};

var colors = ["#eb3434", "#ebe234", "#49eb34", "rgb(253, 216, 4)","#eb3434","#eb349f"];
document.body.style.backgroundColor = colors[Math.round(Math.random() * 6)];
