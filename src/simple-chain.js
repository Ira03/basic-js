const CustomError = require("../extensions/custom-error");

const chainMaker = {
  count: 0,
  chain: '',

  getLength() {
    return this.count;
  },

  addLink(value) {
    if (this.chain) {
      this.chain += '~~';
    }

    if (value === undefined) {
      this.chain += `(  )`;
    } else {
      this.chain += `( ${value} )`;
    }
    this.count++;
   
    return chainMaker;
  },

  removeLink(position) {
    if (typeof position === 'number' && Number.isInteger(position)) {
      let arr = this.chain.split('~~');
      if (arr[position]) {
        arr.splice(position - 1, 1);
        this.chain = arr.join('~~');
      }
      return chainMaker;
    } else {
      this.chain = '';
      throw new Error('wrong position!');
    }
  },

  reverseChain() {
    let arr = this.chain.split('~~');
    this.chain = arr.reverse().join('~~');
    return chainMaker;
  },

  finishChain() {
    let chain = this.chain;
    this.chain = '';
    return chain;
  }
};

module.exports = chainMaker;
