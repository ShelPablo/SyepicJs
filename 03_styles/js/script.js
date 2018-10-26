console.log('You are in ' + window.location);

const Colored = document.querySelector('.colored');
console.log(Colored)

console.log(Colored.style);

let quest = prompt('what color?');

//Colored.style['background-color'] = 'red';
//Colored.style.backgroundColor = 'blue';
Colored.style.backgroundColor = quest;