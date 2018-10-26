console.log('You are in ' + window.location);

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.coolClass.mine');
const firstBySelector = document.querySelector('div');
console.log(allBySelector, firstBySelector);

const quest = prompt("What do you want to output?")

byId.innerHTML = quest;//"<h2>Hello, I'm Id div!<h2>";
firstBySelector.innerHTML = "<h2>Hello, I'm the first with selector<h2>";
