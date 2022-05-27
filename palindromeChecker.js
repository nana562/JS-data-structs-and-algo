/**Stacks */
//functions: push, pop, peek, length

//Using stacks to implement a palindrome checker

var letters = []; // this is our stack. Arrays have functions of a stack

var word = "racecar";

var reverseWord = "";

//put letters of word into stack
for (let i = 0; i < word.length; i++) {

  letters.push(word[i]);
}

//pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {

  reverseWord += letters.pop();
}

if (reverseWord === word) {

  console.log(word + " is a palindrome");
  
} else {

  console.log(word + " is not a palindrome");
}
