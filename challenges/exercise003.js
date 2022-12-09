export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  return nums.map((number) => Math.pow(number,2));

}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  
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
  
  // 8.12.22 Solved after learning about new use for 'reduce'!

  return people.reduce((accumulator, currentPerson) => 
  accumulator += currentPerson.subjects.length, 0);

}
  
export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  
  //8.12.22 Rewrote, replacing loop with nested 'includes'

  return (menu.find(menuItem => 
         menuItem.ingredients.includes(ingredient)) !== undefined)

}


export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

    /*
   * Use Set to reduce one array to unique values; then
   * filter it, returning only values found in the second array 
   */

  return sortNumbers([...new Set (arr1)]).filter(n => arr2.includes(n));

  // Function to perform numeric sorting
    function sortNumbers(anyArray) {
      return anyArray.sort((a, b) => a - b)
    } 
}