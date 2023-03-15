// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const freq1 = {};
    const freq2 = {};

    for (let digit of String(num1)){
        freq1[digit] = (freq1[digit] || 0) + 1;
    }

    for (let digit of String(num2)){
        freq2[digit] = (freq2[digit] || 0) + 1;
    }

    for (let key in freq1) {
        if(freq1[key] !== freq2[key]) {
            return false;
        }
    }
    return true
  };

