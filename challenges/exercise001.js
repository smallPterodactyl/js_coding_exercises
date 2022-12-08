// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  
  return word[0].toUpperCase()+ word.slice(1);

}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  
  //Capitalize as a precaution
  // 8.12.22: Replaced strings with template literals

  return `${firstName.substring(0,1).toUpperCase()}.${lastName.substring(0,1).toUpperCase()}`;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  

  let vatPrice = originalPrice * (1 + vatRate/100);

  // 8.12.22: Condensed logic into ternary operator
  return vatPrice.isInteger ? vatPrice : parseFloat(vatPrice.toFixed(2));

}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  

   let salePrice = originalPrice * (1 - reduction/100);

   // 8.12.22: Condensed logic into ternary operator
   return salePrice.isInteger ? salePrice : parseFloat(salePrice.toFixed(2));

 }

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  

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
  

  let newWord = '';
  for (let i = (word.length -1); i >= 0; i--) {

      newWord += word[i]; 
  }
  return (newWord);
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  // 8.12.22 Re-wrote using array map method
  const reversedWords = words.map (w => reverseWord(w));
  
  return reversedWords;
}


export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  
  // 8.12.22 Re-wrote using array filter method
  // (note use of .length)

  return users.filter(u => u.type === 'Linux').length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  

  let sumScores = '';
  let meanScore = 0;

  sumScores = scores.reduce((accumulator, currentValue) => accumulator + currentValue);
  meanScore = parseFloat((sumScores/scores.length).toFixed(2));
  return (meanScore);
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  

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
