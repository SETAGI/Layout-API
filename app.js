// /* ----------------------------- Exercise 1 ------------------------------- */

let title = document.querySelector('.presentation__textHeading h1');
title.innerHTML = 'Hi Everyone';
/* Other way */
// title.innerText = 'Hi My dear firend';

// /* ------------------------------ Exercise 2 ------------------------------- */
let a = document.createElement('a');
a.href = '#';
a.innerHTML = 'ITEM 5';
let nav = document.getElementById('navigation');
nav.appendChild(a);

// /* ----------------------------- Exercise 3 ------------------------------ */

let blockImage = document.querySelector('.presentation__image');

let image = document.createElement('img');
image.src = './images/favicon.png';

setTimeout(() => {
	document.querySelector('.presentation__image img').remove();
	blockImage.appendChild(image);
}, 2000);

// /* ----------------------------- Exercise 4 -------------------------------- */

let text = document.querySelector('.presentation__textHeading p');
text.innerHTML = 'hi guys <strong style="font-weight:bold">I love it</strong>';

/* ----------------------------- Exercise 5 -------------------------------- */
const URL = 'https://api.github.com/users',
	images = document.querySelectorAll('.picture');

let picturesArray = [],
	namesArray = [],
	userSelected = [];

const getInfoUsers = async () => {
	try {
		let response = await fetch(URL);
		let data = await response.json();
		userSelected = await data.slice(0, 2);
		return userSelected;
	} catch (error) {
		console.error('Something is wrong', error);
	}
};

let users = getInfoUsers();

users.then((response) => {
	response.forEach((user, index) => {
		let img = document.createElement('img');
		img.src = user.avatar_url;
		img.className = 'picture__image';
		images[index].appendChild(img);

		let figCap = document.createElement('figcaption');
		figCap.className = 'picture__caption';
		figCap.innerText = user.login;
		images[index].appendChild(figCap);
	});
});
