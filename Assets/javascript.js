//Variables
var compNumber = Math.floor(Math.random() * 120);
var crystalNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var totalScore = "";
var wins = 0;
var losses = 0;
//create random compNumber
function setTimout () {
    compNumber = Math.floor(Math.random() * 19);
    $("#compNumber").text(compNumber);
}
//create randomizer for crystalNumber
//function - if a button is clicked, add its number to "total score"
//function - if total score = compNumber, win++, call restart game()
//function - if total score > compNumber, losses++, call restart game()
function restartGame(){
    //new random number generated, new random crystal numbers generated, "total score" and the counter reset to 0.//
}