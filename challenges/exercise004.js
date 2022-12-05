export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  // Use the array filter method, with filter condition of < 1

  const smallNums = nums.filter(num => num < 1);
  
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here

  /* Create a simple arrow function (word => word.charAt(0) === char)
   * to compare the first letter of each name with the char parameter.
   * Use this function with the array filter method.
   */

  const namesWithSameInitial = names.filter(name => name.charAt(0) === char);

  return namesWithSameInitial;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here

/* Try to use startsWith() in combination with the filter array method.
 * Add a space after 'to' to account for the main verb.
 */

const onlyVerbs = words.filter (word => word.startsWith('to '));

}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  //Try to filter out using isInteger approach

  const onlyInts = nums.filter (num => Number.isInteger(num) === true)


}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

//Combine array map method with Math.sqrt

  const sqrtArray = nums.map(num => Math.sqrt(num));

}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here




}
