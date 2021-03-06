/** Stacks! **/ 
//# É uma pilha como uma pilha de livros

// @> Contento funções internas, são nomeados como "métodos";
// @> Sendo eles: push, pop, peek, length...

var letters = []; // this is our stack
var word = "freeCodeCamp";
var rword = "";

// subir em letters cada word da lista
for (var i = 0; i < word.length; i++) {
	letters.push(word[i]);
}

// usando pop para reverter a orderm da lista
for (var i = 0; i < word.length; i++) {
	rword += letters.pop();
}

if (rword === word) {
	console.log(`${word} é um palindromo!`);
} else {
	console.log(`${word} não é um palindromo!`);
}

// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};
  
    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    
    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
    this.size = function() {
        return this.count;
    }
    
    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
