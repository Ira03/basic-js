const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let newArr = [];

   
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == '--double-prev' || arr[i] == '--discard-prev' && i == 0) continue;
       if (arr[i] == '--double-next' || arr[i] == '--discard-next' && i == arr.length - 1) continue;
       
        if (arr[i] == '--discard-next' && arr[i + 2] !== '--discard-prev') {
        i+=2;
      } else if (arr[i] == '--discard-prev' && arr[i - 2] !== '--discard-next') {
        
          newArr.pop(); 
        
      } else if (arr[i] == '--double-next') {
        if (arr[i + 1]) {
          newArr.push(arr[i + 1]);
        }
        
      } else if (arr[i] == '--double-prev') {
        if (arr[i - 1]) {
          newArr.push(arr[i - 1]);
        }
      } else {
        newArr.push(arr[i]);
      } 

    }

    
    
 return newArr;
};

// for (let i = 0; i < arr.length; i++) {
    

//   if (arr[i] == '--double-prev' || arr[i] == '--discard-prev' && i == 0) continue;
//   if (arr[i] == '--double-next' || arr[i] == '--discard-next' && i == arr.length - 1) continue;
  

//   if (arr[i] == '--double-prev') {
//     newArr.push(arr[i - 1]);
//   } else if (arr[i] == '--double-next') {
//     newArr.push(arr[i + 1]);
//   } else if (arr[i] !== '--double-prev' || !arr[i] == '--double-next') {
//     newArr.push(arr[i]);
//   }
  
//   } 
  

// for (let i = 0; i < newArr.length; i++) {
//   if (newArr[i] == '--discard-next') {
//     newArr.splice(i, 2);
//     i += 0;
//   } else if (newArr[i] == '--discard-prev') {
//     newArr.splice(i - 1, 2);
//     i = i - 1
//   }
// }   

  

// return newArr;

// }
