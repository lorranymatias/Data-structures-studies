//Sequential search data structure

var values = [5, 8, 10, 22, 45, 38];

function search(num) {
  for (var i = 0; i < 6; i++) {
      if(num == values[i]) {
        return i;
      }
  }return -1;
}

//---using our search tool---//

console.log(search(10));
console.log(search(50));