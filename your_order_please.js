function order(words){
  if(!words){
    return words;
  }
  else{
    let wordsArr = words.split(' ');
    let result = '';
    
    //return new Set(wordsArr[0]).has('2') ? true : false;
    for(let i = 1; i < 10; i++){
      for(let j = 0; j < wordsArr.length; j++){
        if(new Set(wordsArr[j]).has(i.toString())){
          if(result.length == 0){
            result = `${wordsArr[j]}`;
          }
          else{
            result = `${result} ${wordsArr[j]}`;
          }
        }
      }
    }
    
    return result;
  }
}

/* 
Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
*/