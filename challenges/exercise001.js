// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!

  return word[0].toUpperCase()+ word.slice(1);

}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  // Add your code here!
  
  //Capitalize as a precaution
  return ((firstName[0]).toUpperCase() + '.' + (lastName[0]).toUpperCase());

}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!

  let vatPrice = originalPrice * (1 + vatRate/100);

  if (vatPrice.isInteger) {
     return (vatPrice);
  } 
  else {
     return (parseFloat(vatPrice.toFixed(2)));
  }

}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!

   let salePrice = originalPrice * (1 - reduction/100);

   if (salePrice.isInteger) {
     return salePrice;
   }

   else {
      return (parseFloat(salePrice.toFixed(2)));
   }
 }

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!

  if (str.length % 2 > 0) {

    //Case 1: An odd-numbered string

      let midPoint =  (str.length - 1) / 2;
      return str[midPoint];
    }

    //Case 2: An even-numbered string

    else {
        let midPoint = str.length/2;
        return (str[midPoint - 1] + str[midPoint]);
    }   

}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!

  let newWord = '';
  for (let i = (word.length -1); i >= 0; i--) {

      newWord += word[i]; 
  }
  return (newWord);
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let reversedWords = [];

  // Process each word in the array, calling the previous function
  for (let i = 0; i < words.length; i++) {
   
        let nextWord = reverseWord (words[i]);
        reversedWords.push(nextWord);
  }
  return reversedWords;
}


export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!

  let countLinuxUsers = 0;
  let _thisUser = [''];
  let found = '';

  for (const thisUser in users) {

       //Loop through the object, counting only Linux users
      _thisUser = (Object.values(users[thisUser]));

      found = _thisUser.find(element => element === 'Linux');
      if (found) {

          countLinuxUsers += 1;

      }  
  } 
  return countLinuxUsers;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!

  let sumScores = '';
  let meanScore = 0;

  sumScores = scores.reduce((accumulator, currentValue) => accumulator + currentValue);
  meanScore = parseFloat((sumScores/scores.length).toFixed(2));
  return (meanScore);

}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!

  if (n%3 === 0){
    if (n%5 === 0) {
      return ('fizzbuzz');
    }  
    else {
     return ('fizz');
    }
  }
  else if (n%5 === 0) { 
   return ('buzz');
  }
  else {  
   return (n); 
  }
}
