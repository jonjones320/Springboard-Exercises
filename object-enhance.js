////////////////////////////////////////////////---Object-Enhancement-Exercises---///////////////////////////////////////////////////////

// Same keys and values
function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName,
  }
}

// Computed Property Names
let favoriteNumber = 42;

const instructor1 = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
}

// Object Methods
const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return `${firstName} says bye!`;
  }
}

// createAnimal function
// Write a function which generates an animal object. The function should accepts 3 arguments:
// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"


function animal(species, verb, noise) {
    const animalObj = {
        species,
        [verb]() {
           return noise
        }
    };
}






///////////////////////////////////////////////////////////////////////////////////////////////////////

// function makePerson (first, last, age) {
//     return {
//         first: first,
//         last: last,  
//         age: age,
//         isAlive: true,
//     }
// }
function makePerson (first, last, age) {
    return {
        first, 
        last, 
        age,
        isAlive: true,
    }
};

/////////////////////////////////////////////////////////////////////////

// const mathStuff = {
//     x: 200,
//     add: function(a,b) {
//         return a + b;
//     },
//     square: function(a) {
//         return a * a;
//     },
// };
const mathStuff = {
    x: 200,
    add(a,b) {
        return a + b;
    },
    square(a) {
        return a * a;
    },
    multiply: (a,b) => {
        return a * b;
    },
};

/////////////////////////////////////////////////////////////////////////

//An object which makes colors searchable either from the name or the hex code.
// const colors = {
//     periwinkle: '9c88ff',
//     '9c88ff': periwinkle
// };

// function makeColor(name, hex) {
//     const color = {};
//     color[name] = hex;
//     color[hex] = name;
//     return color;
// }

function makeFast(name, hex) {
    return {
    [name]: hex,
    [hex]: name,
    };
}