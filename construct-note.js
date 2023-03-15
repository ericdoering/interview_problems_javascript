// add whatever parameters you deem necessary
function constructNote(str1, str2) {
    const letterCheck = {};

    for(let i = 0; i < str2.length; i++) {
        const letter = str2[i];
        letterCheck[letter] = (letterCheck[letter] || 0) + 1;
    }

    for(let i = 0; i < str1.length; i++) {
        const letter = str1[i]

        if(!letterCheck[letter]) {
            return false;
        }

        letterCheck[letter]--;

        if(letterCheck[letter] < 0) {
            return false;
        }
    }

    return true;
}
