// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const obj = {}; 
    const keyLength = keys.length;
    const valLength = values.length;

    for(let i = 0; i < keyLength; i++){
        const key = keys[i];
        const val = (i < valLength) ? values[i] : null;
        obj[key] = val;
    } 
    return obj;
};
