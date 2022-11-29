'use strict';
console.log ('Sup nerds?');

Products.votingArray = [];
let productProfile = document.querySelector('section');
let whichOneWon = document.querySelector('button');
let imgOne = document.querySelector('section img:first-child');
let imgTwo = document.querySelector('section img:nth-child(2)');
let imgThree = document.querySelector('section img:nth-child(3)');
console.log(productProfile, whichOneWon, imgOne, imgTwo, imgThree);

let clicks = 0;
let maxClicks = 25;
console.log('how many clicks: ', {clicks, maxClicks});

function Products(name, src){
  this.name = name;
  this.src = src;
  this.views = 0;
  this.click = 0;
  Products.votingArray.push(this);
}

console.log('Odd ball array: ', Products.votingArray);

function getRandomNumber(){
  return Math.floor(Math.random() * Products.votingArray.length);
}

function renderProducts(){
  let productOne = getRandomNumber();
  let productTwo = getRandomNumber();
  let productThree = getRandomNumber();
  console.log(productOne, productTwo, productThree);

  while(productOne === productThree){
    productThree = getRandomNumber();
  }
  while(productOne === productTwo || productThree === productTwo){
    productTwo = getRandomNumber();
  }
  console.log(productOne, productTwo);

  imgOne.src = Products.votingArray[productOne].src;
  imgTwo.src = Products.votingArray[productTwo].src;
  imgThree.src = Products.votingArray[productThree].src;

  imgOne.alt = Products.votingArray[productOne].name;
  imgTwo.alt = Products.votingArray[productTwo].name;
  imgThree.alt = Products.votingArray[productThree].name;

  Products.votingArray[productOne].views++;
  Products.votingArray[productTwo].views++;
  Products.votingArray[productThree].views++;
}

