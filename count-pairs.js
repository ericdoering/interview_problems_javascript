// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let count = 0;
    let hash = {}; 
    
    for (let num of arr) {
      let complement = target - num;
      
      if (hash[complement]) {
        count++;
        hash[num] = false; 
      } else {
        hash[num] = true; 
      }
    }
    
    return count;
};
