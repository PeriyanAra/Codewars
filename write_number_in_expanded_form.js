function expandedForm(num) {
  let str = num.toString();
  let nums = [];
  
  for(let i = str.length - 1; i >= 0; i--){
    if(str.toString()[i] != '0'){
      nums.unshift(str.toString().slice(i, str.length));
      str = Number(str) - Number(nums[0]);
    }
  }
  
  return nums.join(' + ');
}

/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.
*/
