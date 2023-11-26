/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Hector Rodriguez",
    photo: "images/profile.jpg",
    favoriteFoods: ['Arepa', 'Cachapa', 'CheeseBurger', 'Pabellon', 'Pizza'],
    hobbies: ['Soccer', 'Listening music', 'Basketball', 'Chess', 'Family time'],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Lima, Peru',
        lenght: '2 years'
    },
    {
        place: 'Caracas, Venezuela',
        lenght: '1 year'
    },
    {
        place: 'Valle de la Pascua, Venezuela',
        lenght: '1 year'
    },
    {
        place: 'Cantaura, Venezuela',
        lenght: '30 years'
    },
)


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.getElementById('favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.getElementById('hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.lenght;
    document.getElementById('places-lived').appendChild(dt);
    document.getElementById('places-lived').appendChild(dd);
});

