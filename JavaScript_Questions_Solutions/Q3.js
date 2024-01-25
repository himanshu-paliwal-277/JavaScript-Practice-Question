// Q.3 What is the difference between Call, Apply and Bind

// In JavaScript, call, apply, and bind are methods that are used to manipulate the way a function is invoked.

// 1. call Method:

// The call method is used to invoke a function with a specified this value and individual arguments. It takes the this value as its first argument and the remaining arguments are the parameters to be passed to the function.

// Syntax: function.call(thisArg, arg1, arg2, ...).
// Example:
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = { name: "Himanshu" };
greet.call(person, "Sir");

// 2. apply Method:

// The apply method is similar to call, but it takes an array of arg0uments instead of individual arguments. It is often used when the number of arguments is dynamic or not known in advance.

// Syntax: function.apply(thisArg, [arg1, arg2, ...]).
// Example:

greet.apply(person, ["Mam"]);
// Output: Hello, Alice! My name is John.

// 3. bind Method:

// The bind method is used to create a new function with a specified this value and initial arguments. It doesn't immediately invoke the function but returns a new function with the specified this value and partially applied arguments.

// Syntax: function.bind(thisArg, arg1, arg2, ...).
// Example:

const greetMe = greet.bind(person);
greetMe('Bhai');

// -> call and apply are used to invoke a function immediately with a specified this value and arguments.
// -> bind is used to create a new function with a specified this value and optional initial arguments, without immediately invoking the function. The new function can be called later.