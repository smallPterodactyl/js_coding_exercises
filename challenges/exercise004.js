export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(n => n < 1);
  
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  return names.filter(name => name.charAt(0) === char);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  //Verb definition may change in future
  const VERB_ID = 'to ';

  return (words.filter(word => word.slice(0,3) === VERB_ID ? word : null))

}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter (num => Number.isInteger(num)? num : null)

}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  return ((nums.map(num => Number((Math.sqrt(num)).toFixed(2)))));

}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
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
