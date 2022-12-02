export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!

  return (sandwich['fillings']);

}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!

  return (person['city']=== 'Manchester');

}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!

  //This value may need to be re-set in future
  const maxPassengers = 40;

  return (Math.ceil(people/maxPassengers));

}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  const sheepArr = arr.filter(animal => {
    return animal === 'sheep';
  });
  return sheepArr.length;

};


export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  
  return ((person['address']['postCode'][0]) === 'M' && 
          (person['address']['city'] === 'Manchester'));

}
