document.getElementById('generateBtn').addEventListener('click', () => {
  const numPasswords = parseInt(document.getElementById('numPasswords').value);
  const passwordList = document.getElementById('passwordList');
  passwordList.innerHTML = ''; // Clear previous passwords

  if (isNaN(numPasswords) || numPasswords < 1) {
      alert('Please enter a valid number.');
      return;
  }

  const words = ['Apple', 'Azure', 'Birch', 'Blush', 'Brass', 'Burgundy', 'Cerulean', 'Charcoal', 'Cherry', 'Chestnut',  
    'Cobalt', 'Coral', 'Crimson', 'Cyan', 'Dandelion', 'Denim', 'Ebony', 'Emerald', 'Fawn', 'Flame',  
    'Flax', 'Forest', 'Fuchsia', 'Garnet', 'Gold', 'Graphite', 'Hazel', 'Indigo', 'Ivory', 'Jade',  
    'Jasmine', 'Lavender', 'Lilac', 'Lime', 'Mahogany', 'Malachite', 'Mauve', 'Mint', 'Mustard', 'Ochre',  
    'Olive', 'Onyx', 'Orchid', 'Peach', 'Pearl', 'Periwinkle', 'Plum', 'Quartz', 'Ruby', 'Russet',  
    'Saffron', 'Sage', 'Sand', 'Scarlet', 'Sepia', 'Silver', 'Slate', 'Snow', 'Spruce', 'Steel',  
    'Tan', 'Taupe', 'Tawny', 'Terra', 'Thistle', 'Topaz', 'Turquoise', 'Umber', 'Vanilla', 'Verdant',  
    'Vermilion', 'Violet', 'Walnut', 'Wheat', 'White', 'Wisteria', 'Yellow', 'Zinc', 'Amaranth', 'Amethyst',  
    'Apricot', 'Aquamarine', 'Arctic', 'Ash', 'Beige', 'Beryl', 'Blizzard', 'Bronze', 'Carnation', 'Chiffon',  
    'Copper', 'Cotton', 'Driftwood', 'Ecru', 'Feldspar', 'Frost', 'Granite', 'Horizon', 'Lavish', 'Meadow', 
    'Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Black', 'White', 'Orange', 'Purple', 'Brown',  
    'Gray', 'Gold', 'Silver', 'Tan', 'Beige', 'Teal', 'Lime', 'Ivory', 'Coral', 'Cyan',  
    'Navy', 'Peach', 'Mint', 'Rust', 'Amber', 'Plum', 'Rose', 'Slate', 'Moss', 'Pear',  
    'Aqua', 'Ash', 'Berry', 'Blush', 'Brick', 'Clay', 'Cloud', 'Cocoa', 'Cream', 'Fern',  
    'Frost', 'Grape', 'Honey', 'Ice', 'Jet', 'Leaf', 'Lilac', 'Mango', 'Moon', 'Oat',  
    'Pine', 'Rain', 'Sand', 'Sea', 'Sky', 'Snow', 'Soil', 'Star', 'Stone', 'Sun',  
    'Thyme', 'Wood', 'Apple', 'Berry', 'Chalk', 'Cherry', 'Denim', 'Dusk', 'Earth', 'Fire',  
    'Fog', 'Grass', 'Ocean', 'Onyx', 'Petal', 'Quartz', 'River', 'Ruby', 'Shell', 'Smoke',  
    'Sugar', 'Violet', 'Water', 'Wind', 'Wolf', 'Wheat', 'Sunset', 'Shadow', 'Storm', 'Drift',  
    'Forest', 'Glass', 'Light', 'Metal', 'Olive', 'Steel', 'Topaz', 'Willow', 'Velvet', 'Breeze'];

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
