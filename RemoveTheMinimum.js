function removeSmallest(numbers) {
  let min;
  let index;

  if(typeof numbers === 'object' && numbers.slice(0, 0)){
    if(numbers.length == 0){
      return numbers;
    }
    else{
      for(let i = 0; i < numbers.length; i++){
        if(!min){
          min = numbers[i];
          index = i;
        }
        else if(min > numbers[i]){
          min = numbers[i];
          index = i;
        }
      }
      
      numbers.splice(index, 1);
      return numbers;
    }
  }
