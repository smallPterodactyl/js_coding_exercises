export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  //Find the position following n
  const indexNumber = (nums.indexOf(n)+1);

  //Return the number after n, if it exists:
  if (nums[indexNumber] === undefined) {return null}
  else {return (indexNumber > 0 ? (nums[indexNumber]) : null)}

};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  /* 
   * The 'counting' object contains the output object and
   * a parsing-counting function object.
   */

  const counting = {
    counters: {1: 0, 0: 0},

    counterObjects (numberStr) {
      for (let n = 0; n < numberStr.length; n++) {
        if (numberStr.charAt(n) === '1') {
          counting.counters['1'] += 1;
          }
        else {
          counting.counters['0'] += 1;
          }
       }
    return counting.counters
    } 
}
/* 
 * The main function summons the object method: 
 * the object could be extended / simplified
 * further in future
 */
return counting.counterObjects(str);
};


export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  
/* 
    * Work from the end of the input string to the beginning
    * to build an return string: conversion to Number will
    * remove any leading '0' characters
   */
  
let nReversed = '';

for (let i = (n.toString().length)-1; i >=  0; i--) {
 nReversed = nReversed + (n.toString()).charAt(i);
}

return (Number(nReversed));

};


export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  
  //Flatten the arrays for easier summing
  const flattened = arrs.flatMap(num => num);

  const initialValue = 0;

  //Return the summed array values
  return (flattened.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  ));
 
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  //Extract all values to compare with the search term
  const haystackArray = Object.values(haystack);

  /*
   * Convert the values to a string for easy manipulation:
   * look for a match with the search term, converting
   * everything to lower-case
   */
  return (((haystackArray.toString()).toLowerCase()).
          includes(searchTerm.toLowerCase()));   

};

export  const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

   // Remove punctuation
   const punctuationless = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "");

   // Create a uniform-case array to ensure accurate matching
   const wordArray =  (punctuationless.toLowerCase()).split(' ');
  
   // Use a reduce function to count the number of repeating words
   const countedWords = wordArray.reduce((allWords, word) => {
    const currCount = allWords[word] ?? 0;
    return {
      ...allWords,
      [word]: currCount + 1,
    };
  }, {}); 
  return (countedWords);
};

// I adapted the code heavily from Mozilla documentation!
