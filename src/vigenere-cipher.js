const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag) {
    this.flag = flag;
    this.makeAlphabet();
  }

  makeAlphabet = () => {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let i = 0;
    let obj = {};
    for (let item of arr) {
      obj[item] = i;
      i++;
    }
  this.alphabet = obj;
}
 
  makeArrayOfNumbers = (message) => {
    message = message.toUpperCase();
    let arr = [];
    for (let char of message) {
      if (char.match(/[a-zA-Z]/)) {
        arr.push(this.alphabet[char]);
      }
    }
  return arr;
  }

  getStringFromKey = (key, arr) => {
    let keyString = '';
    if (arr.length > key.length) {
      let integer = Math.trunc(arr.length / key.length);
      let rest = arr.length % key.length;
      keyString = (key.repeat(integer) + key.slice(0, rest)).toUpperCase();
    } else if (arr.length < key.length) {
      keyString = key.slice(0, arr.length);
    } else if (arr.length === key.length) {
      keyString = key;
  }
  return keyString;
  }

  getCriptogramArray = (arr1, arr2) => {
    let arrayOfSum = arr1.map((item, index) => {
    return item = (item + arr2[index] >= 26) ? item + arr2[index] - 26 : item + arr2[index];
    });
    let cryptogramArray = [];

    arrayOfSum.forEach(item => {
      let key = Object.keys(this.alphabet).find(key => this.alphabet[key] === item);
      cryptogramArray.push(key);
    })

    return cryptogramArray;
  }
  getCriptogramArrayDecrypt = (arr1, arr2) => {
    let arrayOfSum = arr1.map((item, index) => {
    return item = (item - arr2[index] < 0) ? 26 + item - arr2[index] : item - arr2[index];
    });
    let cryptogramArray = [];

    arrayOfSum.forEach(item => {
      let key = Object.keys(this.alphabet).find(key => this.alphabet[key] === item);
      cryptogramArray.push(key);
    })

    return cryptogramArray;
  }

  getCryptogram = (arr) => {
    let j = 0;
      for (let i = 0; i < this.initialArray.length; i++) {
        if (this.initialArray[i].match(/[a-zA-Z]/)) {
          this.initialArray[i] = arr[j];
          j++;
        } else {
          j += 0;
        }     
      }
  } 

  encrypt = (message, key) => {
    if (!message|| !key) throw new Error('Error: no message or key');
    this.initialArray = message.toUpperCase().split('');

      //make array of numbers from message
    let arrayOfNumbersFromMEssage = this.makeArrayOfNumbers(message);
    let keyString = this.getStringFromKey(key, arrayOfNumbersFromMEssage );

     // make array of numbers from key
    let arrayOfNumbersFromKey = this.makeArrayOfNumbers(keyString);
    let cryptogramArray = this.getCriptogramArray(arrayOfNumbersFromMEssage, arrayOfNumbersFromKey);

      // get criptogram
    this.getCryptogram(cryptogramArray);
      
    if (this.flag === true || this.flag === undefined) {
      return this.initialArray.join('');
    } else {
      return this.initialArray.reverse().join('');
    }
  }

  decrypt = (message, key) => {
    if (!message|| !key) throw new Error('Error: no message or key');
    this.initialArray = message.toUpperCase().split('');

      //make array of numbers from message
    let arrayOfNumbersFromMEssage = this.makeArrayOfNumbers(message);
    let keyString = this.getStringFromKey(key, arrayOfNumbersFromMEssage );

     // make array of numbers from key
    let arrayOfNumbersFromKey = this.makeArrayOfNumbers(keyString);
    let cryptogramArray = this.getCriptogramArrayDecrypt(arrayOfNumbersFromMEssage, arrayOfNumbersFromKey);

     // get criptogram
     this.getCryptogram(cryptogramArray);
      
     if (this.flag === true || this.flag === undefined) {
       return this.initialArray.join('');
     } else {
       return this.initialArray.reverse().join('');
     }


  }

}

  


module.exports = VigenereCipheringMachine;
