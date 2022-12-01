
function getFillings(sandwich) {
    if (sandwich === undefined) throw new Error("ingredients is required");
    // Your code here!

    return (sandwich['fillings']);
  
    
  }

  function isFromManchester(person) {
    if (person === undefined) throw new Error("person is required");
    // Your code here!

    return (person['city']=== 'Manchester');


  }




  const person = {
    name: "Mohammed",
    city: "Leeds",
    age: 23,
  };

  isFromManchester(person);