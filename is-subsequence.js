// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let indexOne = 0;
    let indexTwo = 0;

    while(indexOne < str1.length && indexTwo < str2.length) {
        if(str1[indexOne] === str2[indexTwo]) {
            indexOne++;
        }
        indexTwo++;
    }

    return indexOne === str1.length;
}
