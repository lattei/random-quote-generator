/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
console.log('test');
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
    tags: "advice"

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

console.log(getRandomQuote());
/***
 * `printQuote` function
***/
function printQuote() {
  let toBePrinted = randomQuote();
  

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);