//Binary search data structure

var values = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];

function searchbin(num) {
  let begin, end;
  let middle;
  let step;
  step = 0;
  begin = 0;
  end = 9.
  while (begin <= end) {
    middle = parseInt((begin + end) / 2);
    step = step + 1;
    if(num == values[middle]) {
      console.log(`I found in ${step} steps!`)
        return middle;
    }else{
      if(num > values[middle]){
        begin = middle + 1;
      }else{
        end = middle -1;
      }
    }
  }console.log(`I did not find it ${step} steps!`)
  return -1;
}
//---using our search tool---//

console.log(searchbin(10));
console.log(searchbin(60));
