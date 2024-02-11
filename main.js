let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".button-reset");
let userInput = document.querySelector("#user-input");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 10; 
let userValueList = []; 

chanceArea.innerHTML = `남은 기회:${chances}`;
playButton.addEventListener("click", play);

// resetButton의 존재 여부 확인
if (resetButton) {
    resetButton.addEventListener("click", reset);
}

userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNumber);
}

function play() {
  const userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultText.textContent = "1부터 100 사이의 숫자를 입력 해주세요";
    return;
  }

  if (userValueList.includes(userValue)) {
    resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
    return;
  }

  chances--;
  chanceArea.innerHTML = `남은 기회:${chances}`;
  userValueList.push(userValue);
  if (userValue < computerNumber) {
    resultAreaImg.src =
      "https://64.media.tumblr.com/b017bd0d39618c1ed750c8fa6ab41d2d/f1c1de3186f99c8d-fb/s540x810/f3c78d5ea347ca9b0e2d3a72e4713d0631a1b04d.gif";
    resultText.textContent = "Up!";
  } else if (userValue > computerNumber) {
    resultAreaImg.src = "https://64.media.tumblr.com/fc63ce7a327215128caacd7d7b199934/f1c1de3186f99c8d-5d/s540x810/d41f630678ba1df83f17d21c2f3c20d474ad5c40.gif";
    resultText.textContent = "Down!";
  } else {
    resultAreaImg.src =
      "https://64.media.tumblr.com/b4e1d4bc3bfa8aa3f6c1cb6a61dbfaf4/f1c1de3186f99c8d-64/s540x810/054bd2aa55b1e385e9f5b1a6d644d4e8273426a2.gif";
    resultText.textContent = "정답!";
    gameOver = true;
  }

  if (chances == 0) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function focusInput() {
  userInput.value = "";
}

function reset() {
  pickRandomNumber();
  userInput.value = "";
  resultAreaImg.src =
    "https://64.media.tumblr.com/de8d168e0c971b06e83c06a7efe4df00/ce532ef7f8c11fa0-96/s500x750/d68930d127bd176a5e232b4f3b62088eabc325e9.gifv";
  resultText.textContent = "한번 더 도전 ";
  gameOver = false;
  playButton.disabled = false;
  chanceArea.innerHTML = `남은 기회:${chances}`;
  userValueList = [];
}

pickRandomNumber();
