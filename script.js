const words = ["Pink", "Salmon", "Blue", "Lime", "Yellow", "Purple"]; // Add more words!

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePassword() {
  const word1 = getRandomElement(words);
  const word2 = getRandomElement(words);
  const number = Math.floor(Math.random() * 90) + 10; // Random 2-digit number
  return `${word1}${number}${word2}!`;
}

document.getElementById("generate").addEventListener("click", () => {
  const password = generatePassword();
  document.getElementById("password").textContent = password;
});
