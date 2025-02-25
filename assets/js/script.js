// DOM elements
const scenarioEl = document.getElementById("scenario");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const introBox = document.getElementById("intro-box");
const testBox = document.getElementById("test");
const finalScoreBox = document.getElementById("final-score-box");
const mainTitle = document.getElementById("heading");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("start-again");
const homePageBtn = document.getElementById("home-page");

// variables for test
let currentScenarioIndex = 0;
let correctScore = 0;
let incorrectScore = 0;

// Array for my scenarios with answers and correct and false options.
const scenarios = [
  {
    scenario:
      "A footballer aged 17 enters into a long-term contract with an agent to negotiate commercial contracts on his behalf as a professional football player. The footballer’s parents are not cosignatories to the contract. A month later, when the footballer is still 17, the footballer decides that he no longer wants the agent to represent him and that he wants to bring the contract to an end. Can the footballer terminate the contract?",
    answers: [
      {
        text: "No, because he is of full capacity being over 16 years of age.",
        correct: false,
      },
      {
        text: "No, because it is a commercial contract and not a consumer contract.",
        correct: false,
      },
      {
        text: "No, because he is a minor and it is a contract for necessaries.",
        correct: false,
      },
      {
        text: "Yes, because he is a minor and it is not a contract for necessaries.",
        correct: true,
      },
      {
        text: "Yes, because his parents were not co-signatories to the contract.",
        correct: false,
      },
    ],
  },

  {
    scenario:
      "Last month a cycling enthusiast incorporated an online bicycle accessories shop. He is the sole director and he and a friend are the only shareholders. Prior to incorporation of the company, the enthusiast negotiated a contract with a provider of cycling clothing. The contract was signed, prior to the receipt of the certificate of incorporation, by the enthusiast in his own name, on behalf of the company. With whom, if anyone, does the benefit of the contract reside?",
    answers: [
      { text: "The company only.", correct: false },
      { text: "The shareholders only", correct: false },
      { text: "The enthusiast only.", correct: true },
      { text: "The enthusiast and the company jointly.", correct: false },
      { text: "No one, the contract is void.", correct: false },
    ],
  },

  {
    scenario:
      "A man is employed by a roofing company to repair roofs. The role requires him to wear special gloves in order to protect his hands when he handles roof tiles. Whilst standing on some scaffolding, negligently erected by the roofing company, he falls off, suffers serious injury to his head and brings a claim. He carelessly failed to wear the gloves at the time. Which of the following best describes whether the company can successfully claim contributory negligence on the part of the roofer? ",
    answers: [
      {
        text: "The company cannot claim contributory negligence because the roofer’s carelessness did not cause or contribute to the injury.",
        correct: true,
      },
      {
        text: "The company cannot claim contributory negligence because the roofer did not owe the company a duty of care.",
        correct: false,
      },
      {
        text: "The company can claim contributory negligence because the roofer’s carelessness caused or contributed to the injury.",
        correct: false,
      },
      {
        text: "The company can claim contributory negligence because the roofer’s carelessness materially increased the risk of injury.",
        correct: false,
      },
      {
        text: "The company can claim contributory negligence because the roofer owed the company a duty of care.",
        correct: false,
      },
    ],
  },
  {
    scenario:
      "A private limited company has unamended model articles as set out in Schedule 1 to the Companies (Model Articles) Regulations 2008. The company has issued ordinary shares only and has no shareholders’ agreement. Its most recent set of accounts show that the company did not make a profit or a loss in the most recent accounting period, although it has distributable profits of £50,000 carried forward from previous accounting periods. The shareholders want the company to declare a dividend out of these profits, but the directors intend to retain the profits within the company to finance an expansion of the company’s trade. Can the shareholders compel the directors to recommend a dividend?",
    answers: [
      {
        text: "Yes, because the directors have a duty to act in the best interests of the shareholders.",
        correct: false,
      },
      {
        text: "Yes, because the shareholders have the power to require payment of a dividend by ordinary resolution.",
        correct: false,
      },
      {
        text: "Yes, because the shareholders have a right to receive a dividend if the company has distributable profits.",
        correct: false,
      },
      {
        text: "No, because only the directors have the power to recommend the payment of a dividend.",
        correct: true,
      },
      {
        text: "No, because the directors can only recommend a dividend out of profits of the most recent accounting period. ",
        correct: false,
      },
    ],
  },
  {
    scenario:
      "A man is arrested and detained at a police station on suspicion of common assault which is a summary only offence. The man is homeless and has no income. The man is not legally represented during his interview under caution, in which he denies the offence. After the interview the man is told that he will be charged with the offence. The man states that he now wants legal advice as he does not want the police to charge him. Is the man entitled to publicly funded legal advice at the police station?",
    answers: [
      {
        text: "The terms on the leaflet constituted an offer which the architect accepted by asking for a quotation.",
        correct: false,
      },
      {
        text: "The quotation constituted an offer which the architect accepted on the website designers’ standard terms and conditions.",
        correct: true,
      },
      {
        text: "The quotation constituted an offer which the architect accepted on the architect’s standard terms and conditions.",
        correct: false,
      },
      {
        text: "The letter from the architect to the web designers constituted an offer which the web designers accepted by sending a quotation.",
        correct: false,
      },
      {
        text: "The letter from the architect to the web designers constituted a counter offer which the web designers accepted by sending a quotation.",
        correct: false,
      },
    ],
  },
  {
    scenario:
      "A man is given a bicycle as a gift. He later agrees to sell the bicycle for £25 to a woman but no payment has yet been made. He subsequently discovers that the bicycle is worth £390. He informs the woman that he no longer wishes to sell the bicycle because he was mistaken about its value. What advice should the woman be given?",
    answers: [
      {
        text: "There is a contract because there is executed consideration.",
        correct: false,
      },
      {
        text: "There is a contract because sufficient consideration has been promised.",
        correct: true,
      },
      {
        text: "There is no contract because the consideration is insufficient.",
        correct: false,
      },
      {
        text: "There is no contract because adequate consideration has not been promised.",
        correct: false,
      },
      {
        text: "There is no contract because the consideration promised is only executory.",
        correct: false,
      },
    ],
  },
  {
    scenario:
      "The owner of a Greek restaurant orders wall tiles that include a border design showing the Greek flag. After the tiles have been fitted, the owner notices that the tiles are decorated with the flag of Uruguay. The owner wants the tiles to be replaced. In a claim for breach of contract which of the following measure of damages is the court most likely to award?",
    answers: [
      { text: "Expectation.", correct: false },
      { text: "Reliance.", correct: false },
      { text: "Cost of cure.", correct: true },
      { text: "Loss of amenity.", correct: false },
      { text: "Mental distress.", correct: false },
    ],
  },
  {
    scenario:
      "A decision is made by the Court of Appeal (Civil Division) in favour of the claimant. The defendant wishes to obtain permission to appeal. Which of the following courts have the power to grant permission to appeal?",
    answers: [
      { text: "The Court of Appeal only.", correct: false },
      { text: "The Supreme Court only.", correct: false },
      { text: "The House of Lords only", correct: false },
      { text: "The Court of Appeal and the Supreme Court.", correct: true },
      { text: "The Court of Appeal and the House of Lords.", correct: false },
    ],
  },
  {
    scenario:
      "A man runs a very popular farmers market on a small farm on the edge of a village every Thursday. This results in the village becoming very busy on Thursdays when many of its roads are blocked by parked cars. Because of this, on Thursdays, a woman who runs a business in the village is unable to deliver her goods and she loses trade as a result. Which cause of action should the woman pursue in tort?",
    answers: [
      { text: "Private nuisance.", correct: false },
      { text: "Public nuisance.", correct: true },
      { text: "Rylands v Fletcher.", correct: false },
      { text: "Negligence.", correct: false },
      { text: "Occupiers' liability.", correct: false },
    ],
  },
  {
    scenario:
      "In the course of a trial various arguments are put to the judge as to the exact meaning of a particular section of a relevant statute. When deciding the case, the judge first looks at the natural ordinary meaning of the words used. However, such an interpretation of those words results in an absurd meaning being given to the section. The judge therefore, in coming to his decision, interprets the words in a different way which does not result in an absurd meaning. What method of statutory interpretation has the judge used?",
    answers: [
      { text: "The literal rule.", correct: false },
      { text: "The mischief rule.", correct: false },
      { text: "The extrinsic evidence rule. ", correct: false },
      { text: "The golden rule.", correct: true },
      { text: "The intrinsic evidence rule.", correct: false },
    ],
  },
];

// event handler for start btn
startBtn.onclick = () => {
  mainTitle.classList.add("hide");
  introBox.classList.add("hide");
  testBox.classList.remove("hide");
  startTest();
};

// function to reset score when tests restarts
function resetScore(){
  currentScenarioIndex = 0;
  correctScore = 0;
  incorrectScore = 0;
  document.getElementById("correct-score").textContent = correctScore;
  document.getElementById("incorrect-score").textContent = incorrectScore;
}
// function for start test
function startTest() {
  resetScore();
  startBtn.innerHTML = "Start";
  showScenario();
}

//function to show scenarios and answer buttons
function showScenario() {
  resetState();

  let currentScenario = scenarios[currentScenarioIndex];
  let scenarioNo = currentScenarioIndex + 1;

  scenarioEl.innerHTML = scenarioNo + ". " + currentScenario.scenario;
  document.getElementById("current-scenario").textContent = scenarioNo;
  currentScenario.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer-btn");
    answersEl.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answersEl.firstChild) {
    answersEl.removeChild(answersEl.firstChild);
  }
}

/**
 * This function is to show when selected, if answer is correct or no,
 *  and to update score until test is finished.
 */
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    correctScore++;
    document.getElementById("correct-score").textContent = correctScore;
  } else {
    selectedBtn.classList.add("incorrect");
    incorrectScore++;
    document.getElementById("incorrect-score").textContent = incorrectScore;
  }

  Array.from(answersEl.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

//function to display final score box
function displayFinalScore() {
  finalScoreBox.classList.remove("hide");
  testBox.classList.add("hide");

  let finalScoreEl = finalScoreBox.querySelector(".final-score");
  let finalMessage;

  if (correctScore <= 5) {
    finalMessage =
      `<span>You got<div>` +
      correctScore +
      ` out of ` +
      scenarios.length +
      `</div><div>You can restart anytime and improve your answers!</div></span>`;
  } else if (correctScore >= 6 && correctScore < 8) {
    finalMessage =
      `<span>You got<div>` +
      correctScore +
      ` out of ` +
      scenarios.length +
      `</div><div>Great! You are getting close to become a professional!</div></span>`;
  } else if (correctScore >= 8 && correctScore <= 10) {
    finalMessage =
      `<span>You got<div>` +
      correctScore +
      ` out of ` +
      scenarios.length +
      `</div><div>Amaizing! You are a master of Functioning Legal Knowledge!</div></span>`;
  }
  finalScoreEl.innerHTML = finalMessage;
}

function activateNextBtn() {
  currentScenarioIndex++;
  if (currentScenarioIndex < scenarios.length) {
    showScenario();
  } else {
    displayFinalScore();
  }
}

// event handler for next btn
nextBtn.addEventListener("click", () => {
  if (currentScenarioIndex < scenarios.length) {
    activateNextBtn();
  }
});

// event handler for Start again btn
restartBtn.onclick = () => {
  finalScoreBox.classList.add("hide");
  testBox.classList.remove("hide");
  currentScenarioIndex = 0;
  correctScore = 0;
  incorrectScore = 0;
  startTest();
};

// Event handler for home page btn
homePageBtn.onclick = () => {
  mainTitle.classList.remove("hide");
  introBox.classList.remove("hide");
  finalScoreBox.classList.add("hide");
};

startTest();
