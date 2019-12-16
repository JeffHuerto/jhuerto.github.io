  //start the game! 

  let startButton = document.querySelector("#btn");
  let gameLog = document.querySelector("#gameLog");
  let choiceSelect = document.querySelector("#choiceSelect");

  let winCount = 0
  let loseCount = 0

  let choiceButtons = choiceSelect.querySelectorAll("button");
  choiceButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      game(button.id);
    });
  });

  //function playGame(playerChoice) {



  startButton.addEventListener("click", game);

      function random1To3() { 
        return Math.floor(Math.random()* (3 - 1 + 1)) + 1;
      }
      function computerPlay() {
        switch (random1To3()) {
        case 1:
        return "rock";
        case 2:
        return "scissors";
        case 3:
        return "paper";
        }
      }
      function playRound(playerChoice, computerChoice) {
        let winState = "false";
        let tieState = "false";
       switch (playerChoice) {
         case "rock":
         if (computerChoice == "rock") {
           tieState = "true";
         } else if (computerChoice == "scissors") {
           winState = "true";
         } else if (computerChoice == "paper") {
           winState = "false";
         }
         break;
         case "paper":
         if (computerChoice == "rock") {
           winState = "true";
         } else if (computerChoice == "scissors") {
           winState = "false";
         } else if (computerChoice == "paper") {
           winState = "true";
         }
         break;
         case "scissors":
           if (computerChoice == "rock") {
           winState = "false";
         } else if (computerChoice == "scissors") {
           tieState = "true";
         } else if (computerChoice == "paper") {
           winState = "true";
         }
         break;
         default:
          return "Please enter a valid option";
       }
       if (tieState == "true") {
         return "You have tied! You both picked the same choice!";
       } else if (winState == "true") {
         return "You won! " + playerChoice + " defeats " + computerChoice;
       } else if (winState == "false") {
         return "You lost! " + playerChoice + " loses to " + computerChoice;
       }
      }
     function game(playerChoice) {
        let computerChoice = computerPlay();
        let result = playRound(playerChoice, computerChoice);
        if (result.search("won") != -1) {
           winCount ++;
         } else if (result.search("lost") != -1) {
           loseCount ++;
         }
         //alert(result + " Wins: " + winCount + " Losses: " + loseCount);
         logResult(result, winCount, loseCount);
         //console.log(result + " Wins: " + winCount + " Losses: " + loseCount);
        if (winCount == 5 || loseCount == 5) {
          decideGame();
        }
        function decideGame() {
        if (winCount > loseCount) {
          //alert("You won the game, congratulations!");
          alert("You won the game, congratulations!");
        } else {
          //alert("You lost this time, try again!");
          alert("You lost this time, try again!");
        }
        winCount = 0;
        loseCount = 0;
        let clear = document.getElementById("gameLog");
          while (clear.hasChildNodes()) {
            clear.removeChild(clear.firstChild);
          }
        }
     }

     function logResult(result, winCount, loseCount) {
       let pResult = document.createElement("p");
       pResult.textContent = result + " Wins: " + winCount + " Losses: " + loseCount
       gameLog.appendChild(pResult);
     }
