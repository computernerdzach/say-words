import { nouns } from "./words.js";

document.getElementById("randomButton").addEventListener("click", getWords);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getWords() {
  document.getElementById("word1").innerText = nouns[getRandomInt(nouns.length)];
  document.getElementById("word2").innerText = nouns[getRandomInt(nouns.length)];
}

