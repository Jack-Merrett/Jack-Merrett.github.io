document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const passwordList = document.getElementById('passwordList');
  const numPasswordsInput = document.getElementById('numPasswords');
  let words = []; // Array to store words from the file

  // Fetch the words from the text file
  fetch('words.txt')
      .then(response => {
          if (!response.ok) {
              throw new Error(`Failed to load words.txt: ${response.status}`);
          }
          return response.text();
      })
      .then(text => {
          words = text.split('\n').map(word => word.trim()).filter(word => word !== '');
          console.log('Words loaded:', words); // Debug log to confirm words are loaded
      })
      .catch(error => {
          console.error('Error loading words:', error);
      });

  // Generate passwords when button is clicked
  generateBtn.addEventListener('click', () => {
      const numPasswords = parseInt(numPasswordsInput.value);
      if (isNaN(numPasswords) || numPasswords < 1) {
          alert('Please enter a valid number.');
          return;
      }

      if (words.length === 0) {
          alert('Words are not loaded yet. Please try again.');
          return;
      }

      passwordList.innerHTML = ''; // Clear previous passwords

      for (let i = 0; i < numPasswords; i++) {
          const word1 = words[Math.floor(Math.random() * words.length)];
          const word2 = words[Math.floor(Math.random() * words.length)];
          const number = Math.floor(Math.random() * 90) + 10; // Two-digit number
          const password = `${word1}${number}${word2}!`;

          const li = document.createElement('li');
          li.textContent = password;
          passwordList.appendChild(li);
      }
  });
});
