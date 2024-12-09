const minNumber = 0;
const maxNumber = 10;
let secretNumber;
let attempts;
let listDrawnNumbers = [];

newGame();

function checkUserGuess() {
  attempts++;

  let guessedNumber = getHtmlContent('id', 'numberInput');

  if (guessedNumber >= 0 && guessedNumber <= 10 && !(!guessedNumber)) {
    if (secretNumber == guessedNumber) {
      setHtmlContent('tag', 'h1', 'You win!');
      setHtmlContent('id', 'informativeText' ,`The secret number is ${secretNumber}, you got it in ${attempts} attempt${attempts > 1 ? 's' : ''}!`);
      document.getElementById('guess').disabled = true;
      document.getElementById('newGame').disabled = false;
      clearInputValue('id', 'numberInput');
      return;
    }
  
    else if (secretNumber > guessedNumber) {
      setHtmlContent('tag', 'h1', `Wrong guess!`);
      setHtmlContent('id', 'informativeText' ,`Tip: The number is greater than ${guessedNumber}`);
    }
    
    else if (secretNumber < guessedNumber) {
      setHtmlContent('tag', 'h1', `Wrong guess!`);
      setHtmlContent('id', 'informativeText' ,`Tip: The number is less than ${guessedNumber}`);
    }
  }
  
  else {
    setHtmlContent('tag', 'h1', `Invalid value!`);
    setHtmlContent('id', 'informativeText' ,`Enter a number between ${minNumber} and ${maxNumber}`);
  }

  clearInputValue('id', 'numberInput');
}

function newGame() {
  secretNumber = getRandomIntInclusive(minNumber, maxNumber);
  attempts = 0;
  setHtmlContent('tag', 'h1', 'Secret number');
  setHtmlContent('id', 'informativeText', 'Select a number between ' + minNumber + ' a ' + maxNumber + ':');
  clearInputValue('id', 'numberInput');
  document.getElementById('guess').disabled = false;
  document.getElementById('newGame').disabled = true;
  console.log('secretNumber :: ' + secretNumber);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let drawNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('BEFORE :: drawNumber :: ' + drawNumber);
  console.log('BEFORE :: listDrawnNumbers.length :: ' + listDrawnNumbers.length);
  
  if (listDrawnNumbers.includes(drawNumber)) {
    if (listDrawnNumbers.length > (maxNumber - minNumber)) {
      console.log('INSIDE :: CLEAR LIST');
      listDrawnNumbers = [];
      drawNumber = getRandomIntInclusive(min, max);
      return drawNumber;
    }
    
    else {
      console.log('INSIDE :: GET OTHER VALUE');
      drawNumber = getRandomIntInclusive(min, max);
      return drawNumber;
    }
  }

  else {
    console.log('INSIDE ELSE :: drawNumber :: ' + drawNumber);
    listDrawnNumbers.push(drawNumber);
    return drawNumber;
  }

}

function setHtmlContent(attribute, attributeValue, content) {
  let selectedElement;
  
  if (attribute == 'id') {
    selectedElement = document.getElementById(attributeValue);
    
  }
  
  else if (attribute == 'tag') {
    selectedElement = document.querySelector(attributeValue);
  }

  selectedElement.innerHTML = content;
}

function getHtmlContent(attribute, attributeValue) {
  let contentValue;
  
  if (attribute == 'id') {
    contentValue = document.getElementById(attributeValue).value;
  }
  
  else if (attribute == 'tag') {
    contentValue = document.querySelector(attributeValue).value;
  }

  return contentValue;
}

function clearInputValue(attribute, attributeValue) {
  if (attribute == 'id') {
    document.getElementById(attributeValue).value = '';
  }
  
  else if (attribute == 'tag') {
    document.querySelector(attributeValue).value = '';
  }
}