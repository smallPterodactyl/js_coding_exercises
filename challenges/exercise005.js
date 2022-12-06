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
   * The 'counting' object stores both our output and
   * a parsing-counting function as objects.
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
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
