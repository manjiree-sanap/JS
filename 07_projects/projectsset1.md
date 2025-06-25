# projects related to DOM

##project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code

##project 1

```javascript



const butttons =document.querySelectorAll('.button');
const body= document.querySelector("body");

butttons.forEach(function(button){

  console.log(button);

  button.addEventListener('click',function(e){

    console.log(e)
    console.log(e.target)
    if(e.target.id== 'grey'){
      body.style.backgroundColor=e.target.id;
    }

    if(e.target.id== 'white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id== 'blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id== 'yellow'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id== 'purple'){
      body.style.backgroundColor=e.target.id;
    }

  })
});



```



#project 2 solution 

```javascript
const form= document.querySelector('form');

//this usecase will give you empty 

//const height = parseInt(document.querySelector('#height').value);

form.addEventListener(`submit`,function(e){
  e.preventDefault();

  const height= parseInt(document.querySelector('#height').value);

  const weigth= parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if(height === '' || height < 0|| isNaN(height)) {
   
    results.innerHTML = `please give valid height ${height}`;
  }
  else 
  if(weigth === '' || weigth < 0|| isNaN(weigth)) {
   
    results.innerHTML = `please give valid weigth ${weigth}`;

  }else
  {
    const bmi = (weigth/ ((height*height)/10000)).toFixed(2);

    //show the result
    results.innerHTML= `<span>${bmi}</span>`;
  }
});

```

##project 3 solution
```javascript
const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date();
  //console.log(date.toLocalTimeString());
  clock.innerHTML= date.toLocaleTimeString();
},1000);



```

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```

