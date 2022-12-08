export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  //8.12.22 Rewrote, removing bracket notation to avoid referencing properties

  return sandwich.fillings;

}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  //8.12.22 Rewrote, removing bracket notation to avoid referencing properties

  return person.city === 'Manchester';

}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  //This value may need to be re-set in future
  
  //8.12.22 Rewrote constatnt using shouting case syntax
  
  const MAX_PASSENGERS = 40;
  return (Math.ceil(people/MAX_PASSENGERS));

}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

 //8.12.22 Made this function more concise
  return arr.filter(animal => animal === 'sheep').length;

};

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  
  return (person?.address?.postCode?.[0] === 'M') && 
          (person?.address?.city === 'Manchester');

}
