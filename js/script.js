/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Gathered my quotes from brainyquote.com!
const quotes = [
  {
    quote: "Control is not real, and I'm really understanding that every day. It's about the acceptance of relinquishing control that makes it powerful for you.",
    source: "SZA"

  },
  {
    quote: "Big words seldom accompany good deeds.",
    source: "Charlotte Whitton",
    said: "Someone said a big word."

  },
  {
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    source: "George Bernard Shaw",
    year: 1943

  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    source: "Confucius"

  },
  {
    quote: "No, no, because the ice melts, and then it's like Second Drink!",
    source: "Pam Beesly",
    citation: "The Office"
  }
];



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  //Created a random variable that generates between 0 and last index of quotes arr.
  let randomNum = Math.floor(Math.random() * quotes.length - 1) + 1;
  //RandomNum + bracket notation to get a random object from 'quotes' arr, stored in randomQuote
  let randomQuote = quotes[randomNum];
  //returning the randomQuote variable
  return randomQuote;

}
//Used to test getRandomQuote()
// console.log(getRandomQuote());
/***
 * Creating a variable to hold random Value and plugging that into our randomRGB function to get the background color.
 * getRGB function
 ***/
const randomValue = () => Math.floor(Math.random() * 256);
function getRandomRGB(value) {
  const color = `rgb(${value()},${value()},${value()})`;
  return color;
  
}



/***
 * `printQuote` function
 * It calls getRandomQuote from above and passes it through our If Else statements.
 * If else statements are created to check if quotes had a 3rd value that needed to be printed alongside it. 
 * Else condition runs if the object literal only has 2 key/value pairs.
***/
function printQuote() {
  let colorChange = getRandomRGB(randomValue);
  let toBePrinted = getRandomQuote();
  let modifyHTML = `
  <p class="quote">${toBePrinted.quote}</p>
  <p class="source">${toBePrinted.source}`;
  
  if (toBePrinted.year) {
    modifyHTML += `<span class="year">${toBePrinted.year}</span></p>`;
  } else if (toBePrinted.citation) {
    modifyHTML += `<span class="citation">${toBePrinted.citation}</span></p>`;
  } else if (toBePrinted.said) {
    modifyHTML += `<span class="said"> said when: ${toBePrinted.said}</span></p>`;
  // This statement runs if the quote has no 3rd property.
  } else {
    modifyHTML += `</p>`;
  }
  //Used to test what printQuote() logged
  console.log(modifyHTML);
  document.body.style.backgroundColor = `${colorChange}`;
  console.log(colorChange);
  document.getElementById('quote-box').innerHTML = modifyHTML; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);