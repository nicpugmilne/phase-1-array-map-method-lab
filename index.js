// Some questions to consider:

// How can we "iterate" through individual words in a string?
// Can we execute an iteration inside an iteration? How?
// How can we capitalize just the first letter in a word?


const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//function sentenceSplitter(sentences){
//     let splitSentence = sentences[0].split(" ")
//    
// }
// sentenceSplitter()

// const phrase = 'what does the this keyword mean?'


// function singleSplitter(arr){
//   //Take phrase and create a new array of words split at the empty space.
//   let words = arr.split(" ")
//   console.log(words);
//   let wordsCased = words.forEach((word) => {
//     console.log(word.charAt(0).toUpperCase() + word.slice(1));
//   });
//   //use forEach to call .toUpperCase() on the first letter of each word in the splitSentence array and return the complete word

//   // return .join() to bring all the words from the splitSentence array back into a single array with each word capitalized
// }

function titleCased() {
  return tutorials.map((tutorial) => 
    tutorial.split(' ').map((word) => 
      word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '));
}

// capitalWords(tutorials)

// singleSplitter(phrase);