import { nouns } from "./words.js";

document.getElementById("randomButton").addEventListener("click", getWords);
document.getElementById("wordLogger").addEventListener("click", logWords);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getWords() {
  document.getElementById("word1").innerText = nouns[getRandomInt(nouns.length)];
  document.getElementById("word2").innerText = nouns[getRandomInt(nouns.length)];
  document.getElementById("word-log").innerText = "";
  document.getElementById("inbox1").value = "";
  document.getElementById("inbox2").value = "";
}

function logWords() {

  let word1, word2, wordString, index;

  if (document.getElementById("inbox1").value != "" && document.getElementById("inbox1").value != undefined) {
    word1 = document.getElementById("inbox1").value;
  } else return;
  
  if (document.getElementById("inbox2").value != "" && document.getElementById("inbox2").value != undefined) {
    word2 = document.getElementById("inbox2").value;
  } else return;

  if (document.getElementById('word-log').innerText !== "" && document.getElementById('word-log').innerText != undefined) {
    let scoreArray = document.getElementById("word-log").innerText.split("\n");
    let lastElement = scoreArray[scoreArray.length - 1];
    index = Number(lastElement.substring(0, lastElement.indexOf(":"))) + 1;
    wordString = document.getElementById("word-log").innerText + '\n' + index + ": " + word1 + " / " +word2;
  } else {
    index = 1;
    wordString = index + ": " + word1 + " / " + word2;
  }
  
  document.getElementById("word-log").innerText = (wordString)
  document.getElementById("inbox1").value = "";
  document.getElementById("inbox2").value = "";
}

