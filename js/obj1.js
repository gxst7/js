let words = [
    "program",
    "cat",
    "menace"
  ];
 
let word = words[Math.floor(Math.random() * words.length)];
  
let answerArray = [];
  
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
  alert(answerArray.join(" "));
    let guess = prompt("ur letter");
    if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("enter just one letter");
  } else {
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
  }
}

alert(answerArray.join(" "));
alert(`your word is ${word}`); 