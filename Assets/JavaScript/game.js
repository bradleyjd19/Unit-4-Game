$(document).ready(function() {
  

  var crystals = [
    
    crystal1 = {
      name: "cry1",
      imgSrc: "./Assets/Images/crystal1.png"
    },
    crystal2 = {
      name: "cry2",
      imgSrc: "./Assets/Images/crystal2.png"
    },
    crystal3 = {
      name: "cry3",
      imgSrc: "./Assets/Images/crystal3.png"
    },
    crystal4 = {
      name: "cry4",
      imgSrc: "./Assets/Images/crystal4.png"
    },
  ];
  

  var targetNum = 0;
  var userTotal = 0;
  var wins = 0;
  var losses = 0;
  

  function startMenu() {
    $("p").hide();
    $("div").hide();
    $("#buttonContainer").show();
    startClick();
  }


  function startClick() {
    $("#startButton").on("click", function() {
      gameStart();
    })
  }


  startMenu();


  function randNum (min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
  }
  

  function resetGame() {
    $("#crystals").empty();
    userTotal = 0;  
    gameStart();
  }
  

  function gameWin() {
    wins++;  
    $("#gameResult").text("Well done, you are a Master of the Crystals!");
  }
  

  function gameLose() {
    losses++;
    $("#gameResult").text("The Power of the Crystals has Overcome your Mathematical Sorcery!");
  }
  

  // Choose target number, assign values to each crystal
  function gameStart() {
    $("h1").hide();
    $("#buttonContainer").hide();
    $("button").hide();
    $("p").show();
    $("div").show();

    var bgAudio = document.getElementById("bgAudio");
    bgAudio.play();
    bgAudio.volume = 0.3;

    targetNum = randNum(19, 120);
    $("#targetNum").text("Target Number: " + targetNum);
    $("#userNum").text("Your Total: " + userTotal);
    $("#totalWins").text("Total Wins: " + wins);
    $("#totalLosses").text("Total Losses: " + losses);
  
    crystals.forEach (function(crystal) {
      var crystalImage = $("<img>");
      crystalImage.addClass("crystal pulse img-fluid");
      crystalImage.attr("src", crystal.imgSrc);
      crystalImage.attr("value", randNum(1, 12));
      $("#crystals").append(crystalImage);    
    });
  
    // Create click event and capture value
    $(".crystal").on("click", function() {
      var cryValue = parseInt(($(this).attr("value")));
      userTotal += cryValue;
      $("#userNum").text("Your Total: " + userTotal);
    if (userTotal > targetNum) {
      gameLose();
      resetGame();
    }
    if (userTotal === targetNum) {
        gameWin();
        resetGame();
    }  
    })
  }


  var auraAudio = document.getElementById("auraAudio");
  $("#crystals").mouseenter(function() {
    auraAudio.play();
    auraAudio.volume = 0.4;
  })
  $("#crystals").mouseleave(function() {
    auraAudio.pause();
  }) 
  

});