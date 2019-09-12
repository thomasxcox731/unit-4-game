//Variables

var totalScore = 0;
var wins = 0;
var losses = 0;

//create random crystal numbers
var crystalNumber1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
$("#image1").attr("data-value", crystalNumber1);
var crystalNumber2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
$("#image2").attr("data-value", crystalNumber2);
var crystalNumber3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
$("#image3").attr("data-value", crystalNumber3);
var crystalNumber4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
$("#image4").attr("data-value", crystalNumber4);

//create random compNumber
var compNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
console.log(compNumber);
$("#compNumber").text("Computer Generated Number: " + compNumber);

//create randomizer for crystalNumber
//function - if a button is clicked, add its number to "total score"
$(".button").on("click", function () {
    // var crystalNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    // console.log("crystal number: " + crystalNumber);
    var num = +$(this).attr("data-value");
    console.log(num);
    //see image's number value to totalScore 
    totalScore = num + totalScore;
    console.log("total score: " + totalScore);
    $("#totalScore2").text(totalScore);
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
    var crystalNumber1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    $("#image1").attr("data-value", crystalNumber1);
    var crystalNumber2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    $("#image2").attr("data-value", crystalNumber2);
    var crystalNumber3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    $("#image3").attr("data-value", crystalNumber3);
    var crystalNumber4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    $("#image4").attr("data-value", crystalNumber4);
    totalScore = 0;

}
