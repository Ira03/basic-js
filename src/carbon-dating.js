const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (sampleActivity == undefined && typeof sampleActivity !== 'string' && !isFinite(sampleActivity) && sampleActivity <= 0 && !(+sampleActivity < MODERN_ACTIVITY)) {
    return false;
  } 
    let decayRate =  0.693 / HALF_LIFE_PERIOD;
    let sampleAge = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / decayRate);
    if(isFinite(sampleAge) && !isNaN(sampleAge) && !sampleAge < 0) {
      return sampleAge;
    } else {
      return false;
    }
    
    

 
  
  
};
