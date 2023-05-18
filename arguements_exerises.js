
// function sum() {
//     let total = 0;
//     let args = Array.prototype.slice.call(arguments);
//     args.forEach(element => {
//         total += element;
//     });
//     return total;
// };

// function sum(...nums) {
//     let total = 0;
//     nums.forEach (num => {
//         total += num;
//     });
//     return total;
// };

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

// Function.prototype.myBind = function(ctx) {
//     const func = this;
//     let bindArgs = Array.prototype.slice.call(arguments);
//     bindArgs.shift();
//     return function() {
//         let callArgs = Array.prototype.slice.call(arguments);
//         return func.call(ctx, ...bindArgs, ...callArgs);
//     };
// };

Function.prototype.myBind = function (ctx, ...bindArgs) {
    const func = this;
    return function (...callArgs) {
        return func.apply(ctx, bindArgs.concat(callArgs));
    }
};

class Cat {
    constructor(name) {
      this.name = name;
    }

    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }

  class Dog {
    constructor(name) {
      this.name = name;
    }
  }

  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");

//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true

//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true

//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true

//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true

//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true

function curriedSum(numArg) {
    let args = [];
    return function _curry(num) {
        args.push(num)
        if (args.length === numArg) {
            return args.reduce((acc, element) => acc + element);
        } else {
            return _curry;
        }
    }

};

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
    let args = [];
    return function _curry(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            this.call(this, args);
        } else {
            return _curry;
        }
    }

};
