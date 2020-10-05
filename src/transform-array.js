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
     
      } else if (arr[i] == '--double-prev') {
        if(arr[i - 1] !== undefined) {
          newArr.push(arr[i - 1]);
        }
        
        
      } else if (arr[i] == '--discard-next') {
        if (arr[i + 1] !== undefined) {
         
          i = i + 2;
        }
      
      } else if (arr[i] == '--discard-prev') {
        if (arr[i - 1] !== undefined) {
          arr[i-2] === '--discard-next' ? i++ : newArr.pop();
        }
        

      } else {
        newArr.push(arr[i]);
      }




    }


    
    
 return newArr;
};


