

$(document).ready(function() {

  var wins = 0;
  var loses = 0;

  var totalScore = 0;
  var randomNo = 0

  var redDiamond = 0
  var clearDiamond = 0
  var blueDiamond = 0
  var blueDiamond = 0


  function restart() {

      totalScore = 0
      $("#totalScore").text(0);

      var randomNo = 0;
      $("#randomNum").text(0);

      var redDiamond = 0
      var clearDiamond = 0
      var blueDiamond = 0
      var blueDiamond = 0
      game()

  }

  function score() {
      if (totalScore === numRandom) {
          alert("You won!");
          wins++;
          restart();
      }
      if (totalScore > numRandom) {
          alert("You lose!");
          loses++;
          restart();
      }
  }


  function game() {

      var randomNo = Math.floor(Math.random() * 90 + 10);
      numRandom = randomNo; //create local variable so it does not take the 0 from the global scope
      $("#randomNum").text(numRandom);
      console.log(numRandom);

      // console.log(randomNo);
      //create the random numbers locally in the function
      var redDiamond = Math.floor(Math.random() * 9 + 1);
      var clearDiamond = Math.floor(Math.random() * 9 + 1);
      var blueDiamond = Math.floor(Math.random() * 9 + 1);
      var greenDiamond = Math.floor(Math.random() * 9 + 1);


      $("#winsScore").text("Wins: " + wins);
      $("#losesScore").text("Loses: " + loses);



      $("#redDiamond").on("click", function() {
          totalScore = totalScore + redDiamond;
          console.log("wink number is: " + redDiamond);
          console.log("User total: " + totalScore);
          $("#totalScore").text(totalScore);
          score();
      })


      $("#clearDiamond").on("click", function() {
          totalScore = totalScore + clearDiamond;
          console.log("drop number is: " + clearDiamond);
          console.log("User total: " + totalScore);
          $("#totalScore").text(totalScore);
          score();

      })

      $("#blueDiamond").on("click", function() {
          totalScore = totalScore + blueDiamond;
          console.log("heart number is: " + blueDiamond);
          console.log("User total: " + totalScore);blueDiamond
          $("#totalScore").text(totalScore);
          score();
      })

      $("#greenDiamond").on("click", function() {
          totalScore = totalScore + greenDiamond;
          console.log("mad number is: " + greenDiamond);
          console.log("User total: " + totalScore);
          $("#totalScore").text(totalScore);
          score();
      })

  }

  game()
});