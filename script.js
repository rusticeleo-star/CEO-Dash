/* ========================= */
/* HTML ELEMENTS */
/* ========================= */

const player =
  document.getElementById("player");

const playerImage =
  document.getElementById("playerImage");

const gameArea =
  document.getElementById("gameArea");

const progressBar =
  document.getElementById("progressBar");

const rankDisplay =
  document.getElementById("rankDisplay");

const pauseButton =
  document.getElementById("pauseButton");

const winScreen =
  document.getElementById("winScreen");

const restartButton =
  document.getElementById("restartButton");

const questionScreen =
  document.getElementById("questionScreen");

const questionText =
  document.getElementById("questionText");

const answerButtons =
  document.getElementById("answerButtons");

const questionFeedback =
  document.getElementById("questionFeedback");

const startScreen =
  document.getElementById("startScreen");

const startButton =
  document.getElementById("startButton");

const promotionPopup =
  document.getElementById("promotionPopup");

const promotionText =
  document.getElementById("promotionText");

const grandePopup =
  document.getElementById("grandePopup");


/* ========================= */
/* GAME STATE */
/* ========================= */

let currentLane = 1;

let progress = 0;

let rankIndex = 0;

let gameStarted = false;

let gamePaused = true;

let gameOver = false;


/* ========================= */
/* LANES */
/* ========================= */

const lanePositions = [
  120,
  275,
  430
];


/* ========================= */
/* RANKS */
/* ========================= */

const ranks = [

  {
    name: "Down Bad",
    color: "saddlebrown",
    theme: "theme-downbad",
    character: "downbad-character.png"
  },

  {
    name: "Cubicle Warrior",
    color: "dodgerblue",
    theme: "theme-cubicle",
    character: "cubicle-character.png"
  },

  {
    name: "Miami Finance Bro",
    color: "limegreen",
    theme: "theme-miami",
    character: "miami-character.png"
  },

  {
    name: "Tax Bracket Terror",
    color: "red",
    theme: "theme-mansion",
    character: "terror-character.png"
  },

  {
    name: "Billionaire Boss",
    color: "gold",
    theme: "theme-yacht",
    character: "boss-character.png"
  }

];


/* ========================= */
/* OBSTACLES */
/* ========================= */

const obstacleTypes = [

  {
    name: "DEBT",
    className: "debtObstacle"
  },

  {
    name: "LAWSUIT",
    className: "lawsuitObstacle"
  },

  {
    name: "TAXES",
    className: "taxObstacle"
  },

  {
    name: "BANK FEES",
    className: "bankObstacle"
  },

  {
    name: "BAD DEAL",
    className: "badDealObstacle"
  }

];


/* ========================= */
/* VOCAB */
/* ========================= */

const vocab = [

  {
    term: "Market",
    definition:
      "A physical or virtual space where sellers interact with buyers."
  },

  {
    term: "Local Market",
    definition:
      "A market serving a limited geographic area."
  },

  {
    term: "Regional Market",
    definition:
      "A market covering a broader geographic area."
  },

  {
    term: "Global Market",
    definition:
      "A market connecting buyers and sellers across countries."
  },

  {
    term: "Seller",
    definition:
      "A business offering a good or service in a market."
  },

  {
    term: "Buyer",
    definition:
      "A customer purchasing a good or service."
  },

  {
    term: "Voluntary Exchange",
    definition:
      "A trade both sides choose because each expects to benefit."
  },

  {
    term: "Revenue",
    definition:
      "Money a business receives from selling goods or services."
  },

  {
    term: "Prevailing Market Price",
    definition:
      "The price that tends to emerge from buyer-seller interaction in a competitive market."
  },

  {
    term: "Competitive Advantage",
    definition:
      "The ability to outperform rivals in the same market."
  },

  {
    term: "Rival",
    definition:
      "Another business competing in the same market."
  },

  {
    term: "Market Share",
    definition:
      "A business's portion of sales or customers in a market."
  },

  {
    term: "Differentiation",
    definition:
      "Making a product meaningfully distinct from rivals in a way customers value."
  },

  {
    term: "Differentiated Product",
    definition:
      "A product with distinguishing features."
  },

  {
    term: "Commodity",
    definition:
      "A standardized product that is difficult to distinguish from competing offerings."
  },

  {
    term: "Efficiency",
    definition:
      "Using resources in a way that lowers the cost of producing or providing a product."
  },

  {
    term: "Quality",
    definition:
      "How well a product performs or meets customer expectations."
  },

  {
    term: "Unique Product Features",
    definition:
      "Distinct characteristics or functions that rivals do not offer in the same way."
  },

  {
    term: "Customer Service",
    definition:
      "Support and experience provided before, during, and after a sale."
  },

  {
    term: "Marketing",
    definition:
      "How a business communicates and promotes product value to customers."
  },

  {
    term: "Barrier to Entry",
    definition:
      "An obstacle that makes it difficult for new firms to enter and compete."
  },

  {
    term: "Intellectual Property Rights",
    definition:
      "Legal protections for creations or inventions."
  },

  {
    term: "Patent",
    definition:
      "A type of intellectual property protection for an invention."
  },

  {
    term: "Regulation",
    definition:
      "A government rule affecting how businesses operate."
  },

  {
    term: "Supplier Access",
    definition:
      "A business's ability to obtain needed resources."
  },

  {
    term: "Startup Costs",
    definition:
      "Initial expenses required to begin operating a business."
  },

  {
    term: "Operating at Scale",
    definition:
      "Serving or producing at a large scale in a way that can lower costs per unit."
  },

  {
    term: "Monopoly",
    definition:
      "A market with no competition in which one business produces a unique good or service."
  }

];


/* ========================= */
/* MOVE PLAYER */
/* ========================= */

function movePlayer() {

  player.style.left =
    lanePositions[currentLane] + "px";

}


/* ========================= */
/* UPDATE RANK */
/* ========================= */

function updateRankDisplay() {

  rankDisplay.innerText =
    ranks[rankIndex].name;

  rankDisplay.style.color =
    ranks[rankIndex].color;


  gameArea.classList.remove(
    "theme-downbad",
    "theme-cubicle",
    "theme-miami",
    "theme-mansion",
    "theme-yacht"
  );


  gameArea.classList.add(
    ranks[rankIndex].theme
  );


  playerImage.src =
    ranks[rankIndex].character;

}


/* ========================= */
/* PROMOTION */
/* ========================= */

function showPromotion() {

  promotionText.innerText =
    "PROMOTED TO " +
    ranks[rankIndex].name +
    "!";


  promotionPopup.style.display =
    "block";


  setTimeout(function() {

    promotionPopup.style.display =
      "none";

  }, 1500);

}


/* ========================= */
/* PROGRESS */
/* ========================= */

function updateProgress(amount) {

  progress += amount;


  if (progress < 0) {
    progress = 0;
  }


  if (progress > 100) {
    progress = 100;
  }


  progressBar.style.width =
    progress + "%";


  checkRankUp();

}


/* ========================= */
/* CHECK RANK */
/* ========================= */

function checkRankUp() {

  if (progress >= 100) {

    if (
      rankIndex <
      ranks.length - 1
    ) {

      rankIndex++;

      progress = 0;


      progressBar.style.width =
        "0%";


      updateRankDisplay();

      showPromotion();

    }

    else {

      progress = 100;

      progressBar.style.width =
        "100%";


      winGame();

    }

  }

}


/* ========================= */
/* WIN */
/* ========================= */

function winGame() {

  gameOver = true;

  gamePaused = true;


  winScreen.style.display =
    "flex";

}


/* ========================= */
/* KEYBOARD */
/* ========================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      !gameStarted ||
      gamePaused ||
      gameOver
    ) {

      return;

    }


    if (
      event.key === "ArrowLeft" &&
      currentLane > 0
    ) {

      currentLane--;

      movePlayer();

    }


    if (
      event.key === "ArrowRight" &&
      currentLane < 2
    ) {

      currentLane++;

      movePlayer();

    }

  }
);


/* ========================= */
/* MONEY */
/* ========================= */

function spawnMoney() {

  if (
    !gameStarted ||
    gamePaused ||
    gameOver
  ) {

    return;

  }


  const money =
    document.createElement("div");


  money.classList.add("money");

  money.innerText = "💵";


  const randomLane =
    Math.floor(
      Math.random() * 3
    );


  money.style.left =
    lanePositions[randomLane] +
    "px";


  gameArea.appendChild(money);


  let moneyTop = -50;


  const moneyMovement =
    setInterval(
      function() {

        if (gameOver) {

          clearInterval(
            moneyMovement
          );

          money.remove();

          return;

        }


        if (
          gamePaused ||
          !gameStarted
        ) {

          return;

        }


        moneyTop += 5;


        money.style.top =
          moneyTop + "px";


        const playerRect =
          player.getBoundingClientRect();


        const moneyRect =
          money.getBoundingClientRect();


        const touching =

          moneyRect.bottom >
            playerRect.top &&

          moneyRect.top <
            playerRect.bottom &&

          moneyRect.right >
            playerRect.left &&

          moneyRect.left <
            playerRect.right;


        if (touching) {

          updateProgress(10);


          money.remove();


          clearInterval(
            moneyMovement
          );

          return;

        }


        if (moneyTop > 700) {

          money.remove();


          clearInterval(
            moneyMovement
          );

        }

      },

      30
    );

}


/* ========================= */
/* NORMAL OBSTACLES */
/* ========================= */

function spawnObstacle() {

  if (
    !gameStarted ||
    gamePaused ||
    gameOver
  ) {

    return;

  }


  const obstacle =
    document.createElement("div");


  obstacle.classList.add(
    "obstacle"
  );


  const randomType =
    obstacleTypes[
      Math.floor(
        Math.random() *
        obstacleTypes.length
      )
    ];


  obstacle.innerText =
    randomType.name;


  obstacle.classList.add(
    randomType.className
  );


  const randomLane =
    Math.floor(
      Math.random() * 3
    );


  obstacle.style.left =
    lanePositions[randomLane] +
    "px";


  gameArea.appendChild(
    obstacle
  );


  let obstacleTop = -60;


  const obstacleMovement =
    setInterval(
      function() {

        if (gameOver) {

          clearInterval(
            obstacleMovement
          );

          obstacle.remove();

          return;

        }


        if (
          gamePaused ||
          !gameStarted
        ) {

          return;

        }


        obstacleTop += 5;


        obstacle.style.top =
          obstacleTop + "px";


        const playerRect =
          player.getBoundingClientRect();


        const obstacleRect =
          obstacle.getBoundingClientRect();


        const touching =

          obstacleRect.bottom >
            playerRect.top &&

          obstacleRect.top <
            playerRect.bottom &&

          obstacleRect.right >
            playerRect.left &&

          obstacleRect.left <
            playerRect.right;


        if (touching) {

          updateProgress(-20);


          obstacle.remove();


          clearInterval(
            obstacleMovement
          );

          return;

        }


        if (obstacleTop > 700) {

          obstacle.remove();


          clearInterval(
            obstacleMovement
          );

        }

      },

      30
    );

}


/* ========================= */
/* QUESTION PICKUP */
/* ========================= */

function spawnQuestionPickup() {

  if (
    !gameStarted ||
    gamePaused ||
    gameOver
  ) {

    return;

  }


  const questionPickup =
    document.createElement("div");


  questionPickup.classList.add(
    "questionPickup"
  );


  questionPickup.innerText =
    "?";


  const randomLane =
    Math.floor(
      Math.random() * 3
    );


  questionPickup.style.left =
    lanePositions[randomLane] +
    "px";


  gameArea.appendChild(
    questionPickup
  );


  let pickupTop = -50;


  const pickupMovement =
    setInterval(
      function() {

        if (gameOver) {

          clearInterval(
            pickupMovement
          );

          questionPickup.remove();

          return;

        }


        if (
          gamePaused ||
          !gameStarted
        ) {

          return;

        }


        pickupTop += 5;


        questionPickup.style.top =
          pickupTop + "px";


        const playerRect =
          player.getBoundingClientRect();


        const questionRect =
          questionPickup.getBoundingClientRect();


        const touching =

          questionRect.bottom >
            playerRect.top &&

          questionRect.top <
            playerRect.bottom &&

          questionRect.right >
            playerRect.left &&

          questionRect.left <
            playerRect.right;


        if (touching) {

          questionPickup.remove();


          clearInterval(
            pickupMovement
          );


          showQuestion();

          return;

        }


        if (pickupTop > 700) {

          questionPickup.remove();


          clearInterval(
            pickupMovement
          );

        }

      },

      30
    );

}


/* ========================= */
/* GRANDE TREASURE CHEST */
/* ========================= */

function spawnGrandeBlock() {

  if (
    !gameStarted ||
    gamePaused ||
    gameOver
  ) {

    return;

  }


  /*
  Only a 15% chance every time
  this function gets checked.
  */

  const shouldSpawn =
    Math.random() < 0.15;


  if (!shouldSpawn) {

    return;

  }


  const grandeBlock =
    document.createElement("div");


  grandeBlock.classList.add(
    "grandeBlock"
  );


  const randomLane =
    Math.floor(
      Math.random() * 3
    );


  grandeBlock.style.left =
    lanePositions[randomLane] +
    "px";


  gameArea.appendChild(
    grandeBlock
  );


  let grandeTop = -70;


  const grandeMovement =
    setInterval(
      function() {

        if (gameOver) {

          clearInterval(
            grandeMovement
          );

          grandeBlock.remove();

          return;

        }


        if (
          gamePaused ||
          !gameStarted
        ) {

          return;

        }


        grandeTop += 5;


        grandeBlock.style.top =
          grandeTop + "px";


        const playerRect =
          player.getBoundingClientRect();


        const grandeRect =
          grandeBlock.getBoundingClientRect();


        const touching =

          grandeRect.bottom >
            playerRect.top &&

          grandeRect.top <
            playerRect.bottom &&

          grandeRect.right >
            playerRect.left &&

          grandeRect.left <
            playerRect.right;


        if (touching) {

          grandeBlock.remove();


          clearInterval(
            grandeMovement
          );


          showGrandePopup();

          return;

        }


        if (grandeTop > 700) {

          grandeBlock.remove();


          clearInterval(
            grandeMovement
          );

        }

      },

      30
    );

}


/* ========================= */
/* GRANDE POPUP */
/* ========================= */

function showGrandePopup() {

  gamePaused = true;


  grandePopup.style.display =
    "flex";


  setTimeout(
    function() {

      grandePopup.style.display =
        "none";


      if (!gameOver) {

        gamePaused = false;


        pauseButton.innerText =
          "Pause";

      }

    },

    2000
  );

}


/* ========================= */
/* SHOW QUESTION */
/* ========================= */

function showQuestion() {

  gamePaused = true;


  questionFeedback.innerText =
    "";


  answerButtons.innerHTML =
    "";


  const question =
    vocab[
      Math.floor(
        Math.random() *
        vocab.length
      )
    ];


  questionText.innerText =
    question.definition +
    "\n\nWhich term matches this definition?";


  let possibleAnswers = [
    question.term
  ];


  while (
    possibleAnswers.length < 4
  ) {

    const randomTerm =
      vocab[
        Math.floor(
          Math.random() *
          vocab.length
        )
      ].term;


    if (
      !possibleAnswers.includes(
        randomTerm
      )
    ) {

      possibleAnswers.push(
        randomTerm
      );

    }

  }


  possibleAnswers.sort(
    function() {
      return Math.random() - 0.5;
    }
  );


  possibleAnswers.forEach(
    function(answer) {

      const button =
        document.createElement(
          "button"
        );


      button.classList.add(
        "answerButton"
      );


      button.innerText =
        answer;


      button.addEventListener(
        "click",
        function() {

          answerQuestion(
            answer,
            question.term
          );

        }
      );


      answerButtons.appendChild(
        button
      );

    }
  );


  questionScreen.style.display =
    "flex";

}


/* ========================= */
/* ANSWER QUESTION */
/* ========================= */

function answerQuestion(
  selectedAnswer,
  correctAnswer
) {

  const buttons =
    document.querySelectorAll(
      ".answerButton"
    );


  buttons.forEach(
    function(button) {

      button.disabled = true;

    }
  );


  if (
    selectedAnswer ===
    correctAnswer
  ) {

    questionFeedback.innerText =
      "Correct! +50% progress";


    questionFeedback.style.color =
      "limegreen";


    updateProgress(50);

  }

  else {

    questionFeedback.innerText =
      "Wrong! The correct answer was " +
      correctAnswer +
      ". -50% progress";


    questionFeedback.style.color =
      "red";


    updateProgress(-50);

  }


  setTimeout(
    function() {

      questionScreen.style.display =
        "none";


      if (!gameOver) {

        gamePaused = false;


        pauseButton.innerText =
          "Pause";

      }

    },

    1500
  );

}


/* ========================= */
/* START BUTTON */
/* ========================= */

startButton.addEventListener(
  "click",
  function() {

    gameStarted = true;

    gamePaused = false;


    startScreen.style.display =
      "none";


    pauseButton.innerText =
      "Pause";

  }
);


/* ========================= */
/* PAUSE BUTTON */
/* ========================= */

pauseButton.addEventListener(
  "click",
  function() {

    if (
      !gameStarted ||
      gameOver
    ) {

      return;

    }


    gamePaused =
      !gamePaused;


    if (gamePaused) {

      pauseButton.innerText =
        "Resume";

    }

    else {

      pauseButton.innerText =
        "Pause";

    }

  }
);


/* ========================= */
/* AUTO PAUSE */
/* ========================= */

document.addEventListener(
  "visibilitychange",
  function() {

    if (
      document.hidden &&
      gameStarted &&
      !gameOver &&
      !gamePaused
    ) {

      gamePaused = true;


      pauseButton.innerText =
        "Resume";

    }

  }
);


/* ========================= */
/* PLAY AGAIN */
/* ========================= */

restartButton.addEventListener(
  "click",
  function() {

    location.reload();

  }
);


/* ========================= */
/* SPAWN TIMERS */
/* ========================= */

setInterval(
  spawnMoney,
  2000
);


setInterval(
  spawnObstacle,
  3000
);


setInterval(
  spawnQuestionPickup,
  5000
);


/*
Checks every 5 seconds,
but only actually spawns
15% of the time.
*/

setInterval(
  spawnGrandeBlock,
  5000
);


/* ========================= */
/* STARTUP */
/* ========================= */

movePlayer();

updateRankDisplay();

startScreen.style.display =
  "flex";

pauseButton.innerText =
  "Pause";