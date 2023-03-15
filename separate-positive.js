// add whatever parameters you deem necessary
function separatePositive(arr) {

    let left = 0;
    let right = arr.length - 1;

    while(left < right) {

        while(arr[left] > 0 && left < right){
            left++
        }

        while(arr[right] < 0 && left < right){
            right--;
        }

        if(left < right){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    return arr;
};