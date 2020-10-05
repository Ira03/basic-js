const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('not an Array!');
  }

  let newArr = [];

   
    

    for (let i = 0; i < arr.length; i++) {
      

      if (arr[i] == '--double-next') {
        if(arr[i + 1] !== undefined) {
          newArr.push(arr[i + 1]);
        }
     
      } 
       if (arr[i] == '--double-prev') {
        if(arr[i - 1] !== undefined) {
          newArr.push(arr[i - 1]);
          
        }
        
        
      }
        if (arr[i] == '--discard-next') {
        if (arr[i + 1] !== undefined) {
          if(arr[i+2] === '--double-prev') {
            i+=2;
          } else {
            i+=1;
          }
          
        continue;
        
          
        
          
        }
      
      } 
       if (arr[i] == '--discard-prev') {
        if (arr[i - 1] !== undefined) {
          arr[i-2] === '--discard-next' ? i++ : newArr.pop();
        }
        

      } 
       if (arr[i] !== '--discard-prev' && arr[i] !== '--discard-next' && arr[i] !== '--double-prev' && arr[i] !== '--double-next' ) newArr.push(arr[i]);
      
    }
 return newArr;
};


