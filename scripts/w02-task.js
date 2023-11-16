/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Hector Rodriguez";
const d = new Date();
const currentYear = d.getFullYear();
let profilePicture = "images/profile.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');
/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute ('src', profilePicture);


/* Step 5 - Array */

let favoriteFoods = ['Arepa', 'Cachapa', 'CheeseBurger', 'Pabellon', 'Pizza']
foodElement.innerHTML += `<br>${favoriteFoods}`;
let extraFood = 'Hotdog';
favoriteFoods.push(extraFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;



