//Bubble search data structure

var values = [ 8, 7, 6, 5, 4, 3, 2, 1];

function order(){
  let begin = 0;
  let end = 8;
  let tmp = [];

  for (times = 0; times < 8; times++){
    for (position = begin; position < end -1 - times; position++) {
      if(values[position] > values[position + 1]){
        tmp = values[position];
        values[position] = values[position + 1];
        values[position + 1] = tmp;
      }
    }
  }
}

  order();
  console.log("Ordered vector ...");
  console.log(values);
