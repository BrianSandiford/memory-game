'use strict';
let count;
let compareArray;
const backOfCard = 'backcard.JPG';
const blueTrain = 'bluetrain.JPG';
const greenTrain = 'greentrain.JPG';
const redTrain = 'redtrain.JPG';
const arrayOfImages = [
  blueTrain,
  blueTrain,
  greenTrain,
  greenTrain,
  redTrain,
  redTrain,
];

const init = function () {
  count = 0;
  compareArray = ['', '', '', '', '', '', ''];
  for (let index = 0; index <= 5; index++)
    document.querySelector(
      `.item${index}`
    ).innerHTML = `<img src="${backOfCard}" alt="back of card" />`;
};

function shuffle(array) {
  for (let i = 0; i < 6; i++) {
    const tempCard = array[i];
    const randomIndex = Math.floor(Math.random() * 6);
    array[i] = array[randomIndex];
    array[randomIndex] = tempCard;
  }
}

function checkForWin(array, arrayOfImages) {
  let occurCounter = 0;
  for (let i = 0; i < 6; i++) {
    if (array[i] === arrayOfImages) {
      occurCounter++;
    }
  }
  if (occurCounter === 2) return true;
  else return false;
}

init();

for (let i = 0; i <= 5; i++) {
  document.querySelector(`.item${i}`).addEventListener('click', function () {
    document.querySelector(
      `.item${i}`
    ).innerHTML = `<img src="${arrayOfImages[i]}" alt="back of card" />`;
    compareArray[i] = arrayOfImages[i];
    count++;
    console.log(`count ${count}`);
    if (count === 2) {
      if (checkForWin(compareArray, arrayOfImages[i])) {
        setTimeout(() => {
          init();
        }, 2000);
        alert('You won!');
      } else {
        alert('You lost!');
        setTimeout(() => {
          init();
        }, 2000);
      }
    }
  });
}
