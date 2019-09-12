//Variables
// var crystalChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
// var crystalNumber = crystalChoices[Math.floor(Math.random() * crystalChoices.length)];
//create random compNumber
var compNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
console.log(compNumber);
$("#compNumber").text("Computer Generated Number: " + compNumber);

var totalScore = 0;
var wins = 0;
var losses = 0;

//create randomizer for crystalNumber
//function - if a button is clicked, add its number to "total score"
$(".button").on("click", function () {
    var crystalNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log(crystalNumber);
    //see image's number value to totalScore 
    totalScore = crystalNumber + totalScore;
    console.log(totalScore);
    $("totalScore2").text(totalScore);
    //if total score = compNumber, win++, call restart game()
    if (totalScore === compNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
        restartGame();
    }
    //function - if total score > compNumber, losses++, call restart game()
    if (totalScore > compNumber) {
        losses++;
        $("#losses").text("Losses: " + losses);
        restartGame();
    }
})
function restartGame() { 
        //new random number generated, new random crystal numbers generated, "total score" and the counter reset to 0.//
        var compNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        console.log(compNumber);
        $("#compNumber").text("Computer Generated Number: " + compNumber);
        totalScore = 0;

    }
//set text of scoreboard 
// var winsText = $("#wins").text("Wins: " + wins);
// var lossesText = $("#losses").text("Losses: " + losses);
// var scoreText = $("totalScore2").text(totalScore);
// var crystalChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
// var crystalNumber = crystalChoices[Math.floor(Math.random() * crystalChoices.length)];