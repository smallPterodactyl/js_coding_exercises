export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!

  const arrayOfSquares = nums.map((number) => Math.pow(number,2));

  return arrayOfSquares;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!

  //Process the initial word
  const firstWord = words[0];
   
  //Case 1: There is only one word
  if ((words.length) === 1) {
    return firstWord;
  }
  else {

   /* Case 2: There is more than one word:
    * map and capitalise these, then add
    * them to the existing first word string. */

    const remainingWords = words.slice(1,([words.length])); 

    const camelCaseString = remainingWords.map 
      (word => 
        word.charAt(0).toUpperCase() + word.slice(1,([word.length]))
      );
      return (firstWord+camelCaseString.join(''));
  
  }
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!

// This will need to be restrctured: it's not working 
for (let i = 0; i < numStudents; i++) {

  const numStudents = people[0].length;
  let countSubjects = 0;

      countSubjects += people[0][i]['subjects'].length;   
 }
  
 //This is not working in the test environment - scope issue to sort out
 return(countSubjects);

}
  

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!

  let menus = Object.entries(menu);

  //Set up a loop to examine all items on the menu
  for (let i = 0; i < menus.length; i++) {
     
    // Pass each menu item's ingredients to an array to examine
    let itemIngredients = ((menus[i][1]['ingredients']));
    let found = itemIngredients.find(element => element === ingredient);
  
    //If the target ingredient is found, we can exit
    if (found) {
      return true;
    }   
  }
  // The loop has completed without finding the ingredient
  return false;

}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!

  let duplicateArray = [];
  let matchFound = '';

  //For each element of arr1, try to find a match in arr2
  for (let i = 0; i < arr1.length; i++) {

    //Form a new array from any matched numbers
    matchFound = arr2.find(element => element === arr1[i]);
    if (matchFound) {
      duplicateArray.push(matchFound);
   } 
  }
  //Filter out duplicates
   let uniqueDuplicates = duplicateArray.filter((element, index) => {
   return duplicateArray.indexOf(element) === index;});

   //Try to make the ascending order work ... but it isn't
   return uniqueDuplicates.sort(function(a,b){return a-b});

}