var elements = [];
var summit = -1;
const MAX =10;

function push(num){
  if(summit < MAX){
    summit= summit + 1;
    elements[summit]= num;
  }else
    console.log("Stack is full!")
}

function itIsEmpty(){
  return summit == -1;
}

function pop(){
  if (summit != -1){
    let num = elements[summit];
    summit = summit -1;
    return num;
  }else
  console.log("Stack is empty!");
}

// ---part of code that uses stack--- //
// push(10);
// push(20);
// push(30);

// console.log(elements);

// console.log(pop());
// console.log(pop());
// console.log(pop());

var numDecimal= 10;
var rest;

console.log("Time to stack!")
while (numDecimal != 0) {
  rest = parseInt(numDecimal % 2);
  push(rest);
  console.log(rest);
  numDecimal = parseInt(numDecimal / 2);
}

console.log("Unstacking everything!")
while (!itIsEmpty()){
  console.log(pop());
}


