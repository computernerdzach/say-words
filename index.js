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

  let word1, word2;

  if (document.getElementById("inbox1").value != "" && document.getElementById("inbox1").value != undefined) {
    word1 = document.getElementById("inbox1").value;
  } else return;
  
  if (document.getElementById("inbox2").value != "" && document.getElementById("inbox2").value != undefined) {
    word2 = document.getElementById("inbox2").value;
  } else return;

  let wordString = "";

  wordString = word1 + " / " +word2;
  document.getElementById("word-log").innerText = (wordString)
  
  document.getElementById("inbox1").value = "";
  document.getElementById("inbox2").value = "";
}

