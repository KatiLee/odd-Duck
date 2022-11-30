'use strict';
console.log ('Sup nerds?');

Products.votingArray = [];
let productProfile = document.querySelector('section');
let whichOneWon = document.querySelector('button');
let imgOne = document.querySelector('section img:first-child');
let imgTwo = document.querySelector('section img:nth-child(2)');
let imgThree = document.querySelector('section img:nth-child(3)');
//console.log(productProfile, whichOneWon, imgOne, imgTwo, imgThree);

let clicks = 0;
let maxClicks = 25;
//console.log('how many clicks: ', {clicks, maxClicks});

function Products(name, src){
  this.name = name;
  this.src = src;
  this.views = 0;
  this.click = 0;
  Products.votingArray.push(this);
}

//console.log('Odd ball array: ', Products.votingArray);

function getRandomNumber(){
  return Math.floor(Math.random() * Products.votingArray.length);
}

function renderProducts(){
  let productOne = getRandomNumber();
  let productTwo = getRandomNumber();
  let productThree = getRandomNumber();
  //console.log(productOne, productTwo, productThree);

  while(productOne === productThree){
    productThree = getRandomNumber();
  }
  while(productOne === productTwo || productThree === productTwo){
    productTwo = getRandomNumber();
  }
  //console.log(productOne, productTwo);

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

function handleProductsClick(event){
  console.log('welcome to the click', event);
  if(event.target === productProfile){
    alert('Common, help us out, which one is the coolest?');
  }
  clicks++;
  let clickProducts = event.target.alt;
  console.log(clickProducts);
  for(let i = 0; i < Products.votingArray.length; i++){
    if(clickProducts === Products.votingArray[i].name){
      Products.votingArray[i].click++;
      break;
    }
  }

  if(clicks === maxClicks){
    productProfile.removeEventListener('click', handleProductsClick);
    whichOneWon.addEventListener('click', renderResults);
  } else {
    renderProducts();
  }
}

function renderResults(){
  let ul = document.querySelector('ul');
  for(let i = 0; i < Products.votingArray.length; i++){
    let li = document.createElement('li');
    li.textContent = '${Products.votingArray[i].name} had ${Products.votingArray[i]views} views and was clicked on ${Products.votingArray[i].click} times';
    ul.appendChild(li);
  }
}

new Products('Star Wars Luggage', '/images/bag.jpg');
new Products('Banana Slicer', 'images/banana.jpg');
new Products('The Ultimate TP Stand', 'images/bathroom.jpg');
new Products('Toe Splashing Boots', 'images/boots.jpg');
new Products('The Breakfast Making Machine', 'images/breakfast.jpg');
new Products('Meatball Bubble Gum', 'images/bubblegum.jpg');
new Products('Odd Duck Chair', 'images/chair.jpg');
new Products('Action Cthulhu', 'images/cthulhu.jpg');
new Products('Odd Duck Dog', 'images/dog-duck.jpg');
new Products('Canned Dragon Meat', 'images/dragon.jpg');
new Products('Writing and Eating Utensils', 'images/pen.jpg');
new Products('Doggie Dusters', 'images/pet-sweep.jpg');
new Products('Slice Scissors', 'images/scissors.jpg');
new Products('The Shark Sack', 'images/shark.jpg');
new Products('Swaddle Sweeper', 'images/sweep.png');
new Products('Tauntaun Bedroll', 'images/tauntaun.jpg');
new Products('Unicorn Spam', 'images/unicorn.jpg');
new Products('Infinity Watering Can', 'images/water-can.jpg');
new Products('Sommeliers Sniff-ter', 'images/wine-glass.jpg');

renderProducts();

productProfile.addEventListener('click', handleProductsClick);
